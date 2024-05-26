import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 100 // Adjusted the maximum length to 100
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    tags: {
        type: [String],
        required: true
    },
    githubUrl: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    livePreviewUrl: {
        type: String,
        required: false
    },
    slug: {
        type: String,
        required: false,
        unique: true,
    },
}, { timestamps: true });

const ProjectModel = mongoose.model('Project', projectSchema);
export default ProjectModel;