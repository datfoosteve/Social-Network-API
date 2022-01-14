const { Schema, model, SchemaTypeOptions } = require("mongoose");
const thoughtSchema = require("./Thought");
const userSchema = require("./User");

const UserSchema = new Schema(
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
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: thoughtSchema,
      },
    ],
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
