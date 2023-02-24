const mongoose = require("mongoose");

const CampgroundSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const Campground = mongoose.model("Campground", CampgroundSchema);
module.exports = Campground;