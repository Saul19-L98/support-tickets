const mongoose = require("mongoose");

const noteScheme = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Ticket",
    },
    text: {
      type: String,
      require: [true, "Please enter some text"],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteScheme);
