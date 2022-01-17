const {Schema, model} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reactionSchema = new Schema(
    {
        reactionId:{
            type: Schema.Types.ObjectId,
            default: ObjectId()
        },
        reactionBody:{
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt:{
            type: Date(),
            default: Date.now,
            get:timeStamp => {
                return dateFormat(timeStamp);
            }
        }
    }
)

const Reaction = model('Reaction', reactionSchema);
module.exports = Reaction;