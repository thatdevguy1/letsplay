const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  public: {
    type: Boolean,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  maxParticipants: Number,
  minParticipants: Number,
  location: {
    address: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  creator: {},
  participants: [],
});

module.exports = mongoose.model("Event", eventSchema);
