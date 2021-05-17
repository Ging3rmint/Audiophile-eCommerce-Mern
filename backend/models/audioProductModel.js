import mongoose from "mongoose";

const itemIncludeSchema = mongoose.Schema({
  quantity: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
});

const recommendationSchema = mongoose.Schema({
  slug: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    mobile: {
      type: String,
    },
    tablet: {
      type: String,
    },
    desktop: {
      type: String,
    },
  },
});

const gallerySchema = mongoose.Schema({
  first: {
    mobile: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
  },
  second: {
    mobile: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
  },
  third: {
    mobile: {
      type: String,
      required: true,
    },
    tablet: {
      type: String,
      required: true,
    },
    desktop: {
      type: String,
      required: true,
    },
  },
});

const audioProductSchema = mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    mobile: {
      type: String,
    },
    tablet: {
      type: String,
    },
    desktop: {
      type: String,
    },
  },
  category: {
    type: String,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  includes: [itemIncludeSchema],
  gallery: gallerySchema,
  others: [recommendationSchema],
});

const AudioProduct = mongoose.model("AudioProduct", audioProductSchema);

export default AudioProduct;
