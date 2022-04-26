const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        active: {type: Boolean, required: true}
    },
    {timestamps: true}
)


module.exports = mongoose.model('Collections', CollectionSchema);
