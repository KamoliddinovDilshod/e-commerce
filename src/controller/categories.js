import { errorHandler } from "../errors/errorHandler.js";
import { read, write } from "../utils/FS.js";

export const getCategories = async (_, res, next) => {
  const allCategories = await read("categories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const output = [];

  for (let i of allCategories) {
    output.push({
      categoryId: i.categoryId,
      categoryName: i.categoryName,
      subCategories: subCategories.filter((e) => {
        return e.categoryId == i.categoryId && delete e.categoryId;
      }),
    });
  }

  res.status(200).json({
    output,
  });
};

export const getCategoriesById = async (req, res, next) => {
  const { id } = req.params;
  const allCategories = await read("categories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const subCategories = await read("subCategories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const findCategory = allCategories.filter((e) => e.categoryId == id);

  const output = [];

  if (findCategory) {
    for (let i of findCategory) {
      output.push({
        categoryId: id,
        categoryName: i.categoryName,
        subCategories: subCategories.filter((e) => {
          return e.categoryId == id && delete e.categoryId;
        }),
      });
    }

    return res.status(200).json({
      output,
    });
  }
};

export const categories = async (req, res, next) => {
  const { categoryName } = req.filtered;

  const allCategories = await read("categories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const existing = allCategories.find((e) => e.categoryName == categoryName);

  if (existing) {
    return res.status(201).json({
      message: "This category alredy exist",
    });
  }

  allCategories.push({
    categoryId: allCategories.at(-1)?.categoryId + 1 || 1,
    categoryName: categoryName,
  });

  await write("categories.json", allCategories).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  return next(
    res.status(201).json({
      message: allCategories.at(-1),
    })
  );
};

export const putCategories = async (req, res, next) => {
  const { id } = req.params;
  const { categoryName } = req.filtered;

  if (!categoryName && !id) {
    return next(new errorHandler(error.message, 400));
  }

  const allCategories = await read("categories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const existing = allCategories.find((e) => e.categoryId == id);

  existing.categoryName = categoryName ? categoryName : existing.categoryName;

  await write("categories.json", allCategories).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  res.status(200).json({
    message: existing,
  });

  next();
};

export const deleteCategories = async (req, res, next) => {
  const { id } = req.params;

  const allCategories = await read("categories.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  allCategories.splice(
    allCategories.find((e) => e.categoryId == id),
    1
  );

  await write("categories.json", allCategories).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  return next(
    res.status(200).json({
      message: "Categories delete",
    })
  );
};
