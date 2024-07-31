const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    variantText: {
        required: false,
        type: String
    },
    isCorrect: {
        required: false,
        type: Boolean
    },
    nextScreen: {
        required: false,
        type: Number
    }
})

const screenSchema = new mongoose.Schema({
    screenText: {
        required: false,
        type: String
    },
    screenImage: {
        required: false,
        type: String
    },
    screenVideo: {
        required: false,
        type: String
    },
    screenAudio: {
        required: false,
        type: String
    },
    correctAnswer: {
        required: false,
        type: String
    },
    variants: {
        type: [variantSchema],
        required: false
    }
})

const questSchema = new mongoose.Schema({
    questName: {
        required: true,
        type: String
    },
    questDescription: {
        required: true,
        type: String
    },
    tags: {
        required: false,
        type: [String]
    },
    screens: {
        type: [screenSchema],
        required: false
    }
})

module.exports = mongoose.model('quest', questSchema)