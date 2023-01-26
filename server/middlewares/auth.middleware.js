export const authMiddleWare = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];

  if (token === "abcdefghi") {
    return next();
  }
  res.status(401).json({
    message: "access denied ,please dd the token",
  });
};
