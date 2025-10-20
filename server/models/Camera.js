const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String, // URL to the camera image
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        enum: ['DSLR', 'Mirrorless', 'Point & Shoot', 'Action', 'Camcorder'],
        required: true,
    },
    sensorType: {
        type: String,
        enum: ['Full Frame', 'APS-C', 'Micro Four Thirds', '1-inch', 'Other'],
        required: true,
    },
    resolution: {
        type: String, // Example: "24.2 MP"
        required: true,
    },
    videoQuality: {
        type: String, // Example: "4K 60fps"
        required: true,
    },
    lensCompatibility: {
        type: String, // Example: "EF Mount, RF Mount, E Mount"
        required: true,
    },
    features: {
        type: [String], // Example: ["Wi-Fi", "Touchscreen", "Weather Sealed"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Camera = mongoose.model('Camera', cameraSchema);
module.exports = Camera;
