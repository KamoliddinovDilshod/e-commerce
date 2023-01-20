import { Router } from "express";
import {
  categories,
  getCategories,
  putCategories,
  deleteCategories,
  getCategoriesById,
} from "../controller/categories.js";
import { login } from "../controller/login.js";
import {
  deleteProduct,
  getProductById,
  postProducts,
  product,
  putProduct,
  queryProduct,
} from "../controller/products.js";
import {
  deleteSubCategories,
  getSubCategories,
  getSubCategoriesById,
  postSubCategories,
  putSubCategories,
} from "../controller/subCategories.js";
import { verifyToken } from "../middlewares/login.middeware.js";
import validation from "../middlewares/validation.js";
import {
  categoriesValidation,
  loginValidation,
  productValidation,
  subCategoriesValidation,
} from "../validation/validate.js";

const router = Router();

export default router
  .get("/categories/:id", getCategoriesById)
  .get("/categories", getCategories)
  .get("/subCategories", getSubCategories)
  .get("/subCategories/:id", getSubCategoriesById)
  .get("/product", queryProduct)
  .get("/product/:id", getProductById)
  .post("/login", login)
  .use(verifyToken)
  .post("/categories", categories)
  .post("/subcategories", postSubCategories)
  .post("/product", postProducts)
  .put("/categories/:id", putCategories)
  .put("/subcategories/:id", putSubCategories)
  .put("/product/:id", putProduct)
  .delete("/categories/:id", deleteCategories)
  .delete("/subcategories/:id", deleteSubCategories)
  .delete("/product/:id", deleteProduct);
