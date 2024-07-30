const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isDone: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports.TODOS = mongoose.model("todo", todoSchema);
