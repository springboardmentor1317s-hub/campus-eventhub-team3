// models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  college_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // or College model if separate
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  location: { type: String },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
