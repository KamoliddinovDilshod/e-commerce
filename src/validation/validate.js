import Joi from "joi";

export const admin = Joi.object().keys({
  login: Joi.string().min(2),
  parol: Joi.string().min(2),
});

export const timeTable = Joi.object()
  .keys({
    fulldate: Joi.string().min(1),
    hour: Joi.string().min(1),
    sector: Joi.string().min(2),
    species: Joi.string().min(2),
    event: Joi.string().min(2),
    link: Joi.string().min(1),
  })
  .required();

export const statusBar = Joi.object()
  .keys({
    id: Joi.number().min(1).required(),
    status: Joi.string().min(2).required(),
  })
  .required();

export const post = Joi.object()
  .keys({
    title: Joi.string().min(1),
    description: Joi.string().min(1),
    text: Joi.string().min(1),
  })
  .required();

export const organization = Joi.object()
  .keys({
    name: Joi.string().min(5),
    fullname: Joi.string().min(1).required(),
    professiya: Joi.string().min(3).required(),
    phonenumber: Joi.number().min(8).required(),
    addnumber: Joi.number().min(8).required(),
  })
  .required();

export const filter = Joi.object()
  .keys({
    time: Joi.string().min(1),
    species: Joi.string().min(2),
    event: Joi.string().min(2),
    fullname: Joi.string().min(1),
  })
  .required();

export const description = Joi.object()
  .keys({
    time: Joi.string().min(1),
    species: Joi.string().min(2),
    event: Joi.string().min(2),
    fullname: Joi.string().min(1),
  })
  .required();
