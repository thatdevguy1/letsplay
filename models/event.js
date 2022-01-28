const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const eventSchema = new Schema({
  name: {
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
  date: {
    type: Date,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  participants: [
    {
      name: {
        type: String,
      },
      userId: {
        type: String,
      },
      _id: false,
    },
  ],
  messages: [chatSchema],
});

module.exports = mongoose.model("Event", eventSchema);
