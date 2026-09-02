const mongoose = require('mongoose');

const chatLogSchema = new mongoose.Schema({
  message: { type: String, required: true },
  reply: { type: String, required: true },
  ip: { type: String },
  sessionId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('ChatLog', chatLogSchema);
