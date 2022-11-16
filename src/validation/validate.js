import Joi from "joi";

export const categoriesValidation = Joi.object()
  .keys({
    categoryName: Joi.string().min(2).required(),
  })
  .required();

export const subCategoriesValidation = Joi.object()
  .keys({
    categoryId: Joi.number().min(1).required(),
    subCategoryName: Joi.string().min(1).required(),
  })
  .required();

export const productValidation = Joi.object()
  .keys({
    subCategoryId: Joi.number().min(1).required(),
    productName: Joi.string().min(1).required(),
    price: Joi.number().min(1).required(),
    color: Joi.string().min(1).required(),
    model: Joi.string().min(1).required(),
  })
  .required();

export const loginValidation = Joi.object()
  .keys({
    name: Joi.string().min(3).required(),
    password: Joi.number().min(1).required(),
  })
  .required();
