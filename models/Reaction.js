const {Schema, model} = require('mongoose');

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
        }
    }
)