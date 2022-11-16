import url from "url";
import { errorHandler } from "../errors/errorHandler.js";
import { read, write } from "../utils/FS.js";

export const queryProduct = async (req, res, next) => {
  const { color, price, model, productName, subCategoryId } = req.query;

  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const filter = product.filter(
    (e) =>
      (e.color == color && e.price == price) ||
      (e.color == color && e.model == model) ||
      (e.color == color && e.productName == productName) ||
      (e.color == color && e.subCategoryId == subCategoryId) ||
      (e.price == price && e.model == model) ||
      (e.price == price && e.productName == productName) ||
      (e.price == price && e.subCategoryId == subCategoryId) ||
      (e.productName == productName && e.model == model) ||
      (e.subCategoryId == subCategoryId && e.model == model) ||
      (e.subCategoryId == subCategoryId && e.productName == productName)
  );

  return res.status(200).json({
    filter,
  });
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;
  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const findCategory = product.filter((e) => e.productId == id);

  const output = [];

  if (findCategory) {
    for (let i of findCategory) {
      output.push({
        productId: id,
        productName: i.productName,
        subCategoryId: i.subCategoryId,
        model: i.model,
        color: i.color,
        price: i.price,
      });
    }

    return res.status(200).json({
      output,
    });
  }
};

export const product = async (req, res, next) => {
  return next(
    res.status(400).json({
      message: [],
    })
  );
};

export const postProducts = async (req, res, next) => {
  const { subCategoryId, productName, price, color, model } = req.filtered;

  if (!subCategoryId && !productName && !price && !color && !model) {
    return next(
      res.status(400).json({
        message: "bad request",
      })
    );
  }

  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const existing = product.find(
    (e) =>
      e.subCategoryId == subCategoryId &&
      e.productName == productName &&
      e.price == price &&
      e.color == color &&
      e.model == model
  );

  if (existing) {
    return res.status(201).json({
      message: "This category alredy exist",
    });
  }

  product.push({
    productId: product.at(-1)?.productId + 1 || 1,
    subCategoryId: subCategoryId,
    model: model,
    productName: productName,
    color: color,
    price: price,
  });

  await write("products.json", product).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  return next(
    res.status(201).json({
      message: product.at(-1),
    })
  );
};

export const putProduct = async (req, res, next) => {
  const { id } = req.params;
  const { subCategoryId, productName, price, color, model } = req.filtered;

  if (!subCategoryId && !productName && !price && !color && !model) {
    next(new errorHandler("bad request", 400));
    return res.status(400).json({
      message: "bad request",
    });
  }

  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const existing = product.find((e) => e.productId == id);

  existing.subCategoryId = subCategoryId
    ? subCategoryId
    : existing.subCategoryId;
  existing.productName = productName ? productName : existing.productName;
  existing.price = price ? price : existing.price;
  existing.color = color ? color : existing.color;
  existing.model = model ? model : existing.model;

  await write("products.json", product).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  res.status(200).json({
    message: existing,
  });

  next();
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  const product = await read("products.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  product.splice(
    product.find((e) => e.productId == id),
    1
  );

  await write("products.json", product).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  return next(
    res.status(200).json({
      message: "Product delete",
    })
  );
};
