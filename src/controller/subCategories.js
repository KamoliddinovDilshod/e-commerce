import { errorHandler } from "../errors/errorHandler.js";
import { read, write } from "../utils/FS.js";
import { subCategoriesValidation } from "../validation/validate.js";

export const getSubCategoriesById  = async (req, res, next) => {
  const { id } = req.params;
  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const findCategory = subCategories.filter((e) => e.subCategoryId == id);

  const output = [];

  if (findCategory) {
    for (let i of findCategory) {
      output.push({
        subCategoryId: id,
        subCategoryName: i.subCategoryName,
        products: product.filter((e) => {
          return e.subCategoryId == id && delete e.subCategoryId;
        }),
      });
    }

    return res.status(200).json({
      output,
    });
  }
};

export const  getSubCategories = async (req, res, next) => {
  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const output = [];

  for (let i of subCategories) {
    output.push({
      categoryId: i.categoryId,
      subCategoryName: i.subCategoryName,
      products: product.filter((e) => {
        return e.subCategoryId == i.categoryId && delete e.subCategoryId;
      }),
    });
  }

  res.status(200).json({
    output,
  });
};

export const postSubCategories = async (req, res, next) => {

  const { value, error } = subCategoriesValidation.validate(req.body)

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { subCategoryName , categoryId} = value;

  if (!categoryId && !subCategoryName) {
    return next(new errorHandler("bad request", 400));
  }

  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const existing = subCategories.find(
    (e) => e.subCategoryName == subCategoryName && e.categoryId == categoryId
  );

  if (existing) {
    return res.status(201).json({
      message: "This category alredy exist",
    });
  }

  subCategories.push({
    subCategoryId: subCategories.at(-1)?.subCategoryId + 1 || 1,
    categoryId: categoryId,
    subCategoryName: subCategoryName,
  });

  await write("subCategories.json", subCategories).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  return next(
    res.status(201).json({
      message: subCategories.at(-1),
    })
  );
};

export const putSubCategories = async (req, res, next) => {
  const { id } = req.params;

  const { value, error } = subCategoriesValidation.validate(req.body)

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { subCategoryName , categoryId} = value;

  if (!subCategoryName && !id && !categoryId) {
    return next(new errorHandler(error.message, 400));
  }

  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const existing = subCategories.find((e) => e.subCategoryId == id);

  existing.subCategoryName = subCategoryName
    ? subCategoryName
    : existing.subCategoryName;
  existing.categoryId = categoryId ? categoryId : existing.categoryId;

  await write("subCategories.json", subCategories).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  res.status(200).json({
    message: existing,
  });

  next();
};

export const deleteSubCategories = async (req, res, next) => {
  const { id } = req.params;

  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  subCategories.splice(
    subCategories.find((e) => e.subCategoryId == id),
    1
  );

  await write("subCategories.json", subCategories).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  return next(
    res.status(200).json({
      message: "subcategories delete",
    })
  );
};
