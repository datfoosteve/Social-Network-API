const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      maxLength: 280,
      minLength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: [
      {
        type: String,
        required: true,
      }
    ],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtual: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return `${this.reactions.length}`;
  });

  const Thought = model('thought', thoughtSchema);
  module.exports = Thought;