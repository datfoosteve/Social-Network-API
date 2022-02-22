const { User, Thought } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find().then((thoughts) => {
      res.json(thoughts);
    });
  },

  getSingleThought(req, res) {
    Thought.findById(req.params.thoughtId).then((thought) => {
      res.json(thought);
    });
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return thought;
      })
      .then((thought) => {
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        ).then((user) => {
          res.json(user);
        });
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    ).then((thought) => {
      res.json(thought);
    });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) => {
        return thought;
      })
      .then((thought) => {
        User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        ).then((user) => {
          res.json(user);
        });
      });
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    ).then((thought) => {
      res.json(thought);
    });
  },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    ).then((thought) => {
      res.json(thought);
    });
  },
};
