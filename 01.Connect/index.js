import express from "express";
import { connectDB } from "./db/connectDB.js";
import {
  MovieModel,
  allDoc,
  createDocument,
  insertManyDocuments,
  singleDoc,
  docWithField,
  updateById,
  updateMany,
  deleteMany,
  deleteOne,
} from "./models/Movies.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

// createDocument();
// insertManyDocuments();
// allDoc()
// singleDoc();
// docWithField()
// updateById("6af6b5678a307e8727c606db");
// updateMany()
// deleteMany()
deleteOne("6af6b70b2d427ce2a4cd8254")

app.listen(port, () => console.log(`Server listening on port ${port}`));
