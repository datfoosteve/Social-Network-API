const {Schema, model} = require("mongoose");
const thoughtSchema = require("./Thought");

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
        ref: thoughtSchema,
      },
    ],

   // * `friends`
// * Array of `_id` values referencing the `User` model (self-reference)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: userSchema,
      },
    ]
  },
  {
    toJSON: {
      getters: true,
      virtual: true
    },
  }
);



userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = model("user", UserSchema);
module.exports = User;

