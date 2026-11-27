import mongoose from "mongoose";

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Creating Model
const MovieModel = mongoose.model("Movie", movieSchema);

// Create Document
const createDocument = async () => {
  try {
    //Creating new document
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 600000,
      genre: ["Action", "Thriller"],
      isActive: true,
      comments: [{ value: "Awesome Movie" }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Insert many documents
const insertManyDocuments = async () => {
  try {
    const names = [
      "Extraction 2",
      "The Batman",
      "Interstellar",
      "Inception",
      "Gladiator",
      "The Dark Knight",
    ];
    const genres = [
      ["Action", "Thriller"],
      ["Action", "Crime"],
      ["Sci-Fi", "Drama"],
      ["Sci-Fi", "Mystery"],
      ["Action", "Drama"],
      ["Action", "Crime"],
    ];
    const comments = [
      "Awesome movie",
      "Worth watching",
      "Great story",
      "Amazing visuals",
      "Excellent acting",
      "A masterpiece",
    ];
    const randomMovie = (index) =>
      new MovieModel({
        name: names[index],
        ratings: Math.floor(Math.random() * 5) + 1,
        money: Math.floor(Math.random() * 990000) + 10000,
        genre: genres[index],
        isActive: Math.random() >= 0.5,
        comments: [{ value: comments[index] }],
      });

    const m1 = randomMovie(0);
    const m2 = randomMovie(1);
    const m3 = randomMovie(2);
    const m4 = randomMovie(3);
    const m5 = randomMovie(4);
    const m6 = randomMovie(5);
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Find all documents
const allDoc = async () => {
  try {
    const result = await MovieModel.find(); //All Data
    // console.log(result);

    //Iterating Over
    result.forEach((movie) => {
      // console.log(movie.name)
      // console.log(movie.ratings);
      console.log(movie.money);
    });
  } catch (error) {
    console.log(error);
  }
};

// Find single Document
const singleDoc = async () => {
  try {
    const result = await MovieModel.findById(
      "6af6b70b2d427ce2a4cd825c",
      "name",
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Find document with specific field

const docWithField = async () => {
  try {
    // const result = await MovieModel.find({name:"Gladiator"}).limit(1)
    // const result = await MovieModel.find({name:"Gladiator"}).skip(1)
    // const result = await MovieModel.find({
    //   name: "Gladiator",
    // }).countDocuments();
    // const result = await MovieModel.find({
    //   name: "Gladiator",
    // }).sort({ ratings: -1 });
    // const result = await MovieModel.find({ money: { $lt: 600000 } });
    // const result = await MovieModel.find({ money: { $gt: 600000 } });
    // const result = await MovieModel.find({
    //   $and: [{ money: 600000 }, { ratings: 4 }],
    // });

    //  const result = await MovieModel.find({
    //   $nor: [{ money: 600000 }, { ratings: 4 }],
    // });

    //  const result = await MovieModel.find({
    //   $or: [{ money: 600000 }, { ratings: 4 }],
    // });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update single Document
const updateById = async (id) => {
  try {
    const result = await MovieModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          name: "Hello",
        },
      },
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//Update many documents
const updateMany = async () => {
  try {
    const result = await MovieModel.updateMany(
      {
        ratings: 4,
      },
      {
        $set: {
          name: "Hello",
        },
      },
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Delete Many Documents
//Update many documents
const deleteMany = async () => {
  try {
    const result = await MovieModel.deleteMany({
      ratings: 4,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//Update many documents
const deleteOne = async (id) => {
  try {
    const result = await MovieModel.findByIdAndDelete({
      _id: id,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export {
  MovieModel,
  createDocument,
  insertManyDocuments,
  allDoc,
  singleDoc,
  docWithField,
  updateById,
  updateMany,
  deleteMany,
  deleteOne,
};
