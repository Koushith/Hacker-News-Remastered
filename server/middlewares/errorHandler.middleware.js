export const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    success: false,
    message: err.message,
  });
  next();
};

// i have no idea what the heck is this- i wrote this 3months ago. reist later
