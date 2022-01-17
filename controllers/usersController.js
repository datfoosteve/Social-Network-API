const {User, Thought} = require('../models');



const grade = async (userId) =>
  User.aggregate([
    {
      $unwind: '$thoughts',
    },
    {
    //   $group: { _id: userId, friends:friendData, thoughts:thoughtData }
      $group: { _id: userId, friends: {$count: '$thought.reactionCount' }},
    },
  ]);


// **`/api/users`**


module.exports = {
// * `GET` all users
getUsers(req,res){
    User.find()
    .then(async(users) => {
        const userObj = {
            users,
        }
    })
},

// * `GET` a single user by its `_id` and populated 
getSingleUser(req,res) {},

// * `POST` a new user:
createUser(req,res){
    User.create(req.body)
        .then((User) => res.json(User))
        .catch((err) => res.status(500).json(err));
    },

deleteUser(req,res){
    User.findOneAndRemove({_id: req.params.userId})
}


};



    // ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```





// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted.

// ---

// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

// ---



// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.