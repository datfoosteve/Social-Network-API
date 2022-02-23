/* This is creating a schema for our database. */
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //mongoose match
    },

    // `thoughts`
    // * Array of `_id` values referencing the `Thought` model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    // * `friends`
    // * Array of `_id` values referencing the `User` model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    /* Telling the JSON.stringify() function to use the getters for the properties. */
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

/* Adding a virtual property to the userSchema. This virtual property is a getter function that
returns the length of the friends array. */
userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = model("User", userSchema);
module.exports = User;
