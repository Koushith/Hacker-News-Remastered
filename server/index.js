import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.connect.js";
import { Link } from "./model/links.model.js";
import linkRoutes from "./routes/links.route.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import cors from "cors";

const app = express();
dotenv.config();
connectDb();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/links", linkRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on PORT ${port}`);
});
