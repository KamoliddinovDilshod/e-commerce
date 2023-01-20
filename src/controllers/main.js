import { pool } from "../../config/db.js";
import { sign } from "../utils/jwt.js";
import { errorHandler } from "../error/errorHandler.js";
import {
  admin,
  filter,
  organization,
  post,
  statusBar,
  timeTable,
} from "../validation/validate.js";

export const login = async (req, res, next) => {
  const { value, error } = admin.validate(req.body);

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { login, parol } = value;

  try {
    const query = await pool.query(
      `SELECT id FROM admin WHERE login=$1 AND parol=$2`,
      [login, parol]
    );
    res.status(200).json({
      message: query.rows,
      access_token: sign(query.rows.find((e) => e)),
    });
  } catch (error) {
    return next(new errorHandler(error.message, 401));
  }
};

export const getFullPress = async (req, res, next) => {
  const query = await pool.query(
    `SELECT time.id, time.status,  time.fulldate ,post.title , organization.fullname , organization.professiya , time.status , time.hour FROM time LEFT JOIN post ON post.id = time.id LEFT JOIN organization ON organization.id = time.id WHERE time.status = 'acsept' ORDER BY time.id DESC;`
  );
  res.status(200).json(query.rows);
};

export const getFullASC = async (req, res, next) => {
  const query = await pool.query(
    `SELECT time.id, time.status,  time.fulldate ,post.title , organization.fullname , organization.professiya , time.status , time.hour FROM time LEFT JOIN post ON post.id = time.id LEFT JOIN organization ON organization.id = time.id WHERE time.status = 'acsept' ORDER BY time.id ASC;`
  );
  res.status(200).json(query.rows);
};

export const getFullCourse = async (req, res, next) => {
  const query = await pool.query(
    `SELECT * FROM time LEFT JOIN post ON post.id = time.post_id WHERE time.id = $1`,
    [req.params.id]
  );

  res.status(201).json(query.rows);
};

export const getFilter = async (req, res, next) => {
  const { value, error } = filter.validate(req.body);

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { time, species, event, fullname } = value;

  const query = await pool.query(
    `SELECT time.fulldate , time.event , time.species , organization.fullname FROM time LEFT JOIN organization ON  organization.id = time.id  WHERE time.fulldate BETWEEN $1 AND $5 OR time.event = $3 OR time.species = $2 AND organization.fullname = $4;
    `,
    [time, species, event, fullname, "NOW()::DATE"]
  );

  res.status(200).json(query.rows);
}; // chala

export const getCourseDescription = async (req, res, next) => {
  const { id } = req.params;
  const query = await pool.query(
    `SELECT time.fulldate , time.event , time.species , post.title , post.image , post.description ,time.id, time.hour FROM time LEFT JOIN post ON  post.id = time.id WHERE time.id = $1;
    `,
    [id]
  );
  res.status(200).json(query.rows);
};

export const postTime = async (req, res, next) => {
  const { value, error } = timeTable.validate(req.body);

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { fulldate, hour, sector, species, event, link } = value;

  const querytime = await pool.query(
    `INSERT INTO time(fulldate , hour , sector ,species , event , link) VALUES($1 , $2 , $3 , $4 , $5 , $6) RETURNING *;`,
    [fulldate, hour, sector, species, event, link]
  );

  res.status(201).json(querytime.rows);
};

export const postPosts = async (req, res, next) => {
  const image = req.file;
  const { value, error } = post.validate(req.body);

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { title, description, text } = value;

  const query = await pool.query(
    `INSERT INTO post(title , description , image , text) VALUES($1 , $2 , $3 , $4) RETURNING *;`,
    [title, description, image.filename, text]
  );

  res.status(201).json(query.rows);
};

export const postOrganization = async (req, res, next) => {
  const { value, error } = organization.validate(req.body);

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { professiya, name, fullname, phonenumber, addnumber } = value;

  const query = await pool.query(
    `INSERT INTO organization(professiya , name , fullname , phonenumber , addnumber) VALUES($1 , $2 , $3 , $4 , $5) RETURNING *;`,
    [professiya, name, fullname, phonenumber, addnumber]
  );

  res.status(201).json(query.rows);
};

export const updateTimeStatus = async (req, res, next) => {
  const { value, error } = statusBar.validate(req.body);

  if (error) {
    return next(new errorHandler(error.message, 400));
  }

  const { status, id } = value;

  const query = await pool.query(`UPDATE time SET status=$1 WHERE id=$2;`, [
    status,
    id,
  ]);

  res.status(201).json(query.rows);
};

export const select = async (req, res, next) => {
  const selectName = req.body;

  const query = await pool.query(
    `SELECT * FROM $1 LEFT JOIN sector ON sector.$1 = $1.id;`,
    [req.body]
  );

  res.status(201).json(query.rows);
};
