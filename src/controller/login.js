import { errorHandler } from "../errors/errorHandler.js";
import { read, write } from "../utils/FS.js";
import { sign } from "../utils/jwt.js";
import { loginValidation } from "../validation/validate.js";

export const login = async (req, res, next) => {
  const { value, error } = loginValidation.validate(req.body)

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { name, password } = value;

  const users = await read("login.json").catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  const findUser = users.find((e) => e.name == name && e.password == password);

  if (findUser) {
    return next(new errorHandler("Unautherized", 401));
  }

  if (!name && !password) {
    return res.status(400).json({
      message: "Bad request",
    });
  }

  users.push({
    id: users.at(-1)?.id + 1 || 1,
    name: name,
    password: password,
  });

  await write("login.json", users).catch((error) => {
    return next(new errorHandler(error.message, 400));
  });

  res.status(201).json({
    message: users.at(-1),
    access_token: sign({ id: users?.id }),
  });
};
