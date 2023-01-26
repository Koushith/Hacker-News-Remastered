import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.connect.js";
import { Link } from "./model/links.model.js";
import linkRoutes from "./routes/links.route.js";
import userRoutes from "./routes/public/user.route.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import cors from "cors";
// import { authMiddleWare } from "./middlewares/auth.middleware.js";

const app = express();
dotenv.config();
connectDb();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/links", linkRoutes);
app.use("/auth", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on PORT ${port}`);
});

// app.get("/user", authMiddleWare, (req, res) => {
//   res.json({
//     name: "koushith",
//   });
// });

// let users = [
//   {
//     name: "koushith",
//     password: "hello",
//   },

//   {
//     name: "preetham",
//     password: "hesllo",
//   },
// ];

// app.post("/login", (req, res) => {
//   try {
//     const { username, password } = req.body;

//     console.log("reqqqqqq", username, password);

//     // const userExists = users.find((n) => n.name === username);
//     // console.log("userssss", userExists);

//     const userExists = users.filter(
//       (u) => u.name === username && u.password === password
//     );
//     console.log("userssss", userExists);

//     if (userExists.length > 0) {
//       res.json({
//         token: "lalalaalal",
//       });
//     } else {
//       res.status(401).json({
//         message: "incorrect username/password",
//       });
//     }
//   } catch (error) {
//     res.status(401).json({
//       message: "sssss",
//     });
//   }
// });
