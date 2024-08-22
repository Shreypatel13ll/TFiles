import mongoose, { Schema } from "mongoose";

const fileSystemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['file', 'dir']
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'data',
        default: null
    },
    children: [{
        type: Schema.Types.ObjectId,
        ref: 'data'
    }],
    createdOn: {
        type: Date,
        default: Date.now
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

fileSystemSchema.index({ name: 1, parent: 1 }, { unique: true });

// Middleware to update lastModified on save
fileSystemSchema.pre('save', function (next) {
    this.lastModified = new Date();
    next();
});


export default mongoose.model('data', fileSystemSchema);
