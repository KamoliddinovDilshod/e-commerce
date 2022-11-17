import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const { access_token } = req.headers;

  if (!access_token) {
    return res.status(401).json({
      message: "Provide access token",
    });
  }

  jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }

   return next()
  });
};
