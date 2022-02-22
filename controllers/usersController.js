const { User, Thought } = require("../models");

// **`/api/users`**

module.exports = {
  // * `GET` all users
  getUsers(req, res) {
    User.find().then(async (users) => {
      res.json(users);
    });
  },

  // * `GET` a single user by its `_id` and populated
  getSingleUser(req, res) {
    User.findById(req.params.id)
      .populate("friends")
      .populate("thoughts")
      .then(async (user) => {
        res.json(user);
      });
  },

  // * `POST` a new user:
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId }).then((user) => {
      res.json(user);
    });
  },

  updateUser(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    ).then((user) => {
      res.json(user);
    });
  },

  addFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    ).then((user) => {
      res.json(user);
    });
  },
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    ).then((user) => {
      res.json(user);
    });
  },
};
