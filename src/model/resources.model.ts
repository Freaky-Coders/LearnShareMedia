import mongoose, { Document, Schema } from 'mongoose';


export interface Resources extends Document {
    title: string;
    description: string;
    file: string;
    category: string;
    subcategory: string;
    tags: string[]
}


const ResourcesSchema: Schema<Resources> = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    file: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}, {timestamps: true})

const ResourcesModel = (mongoose.models.Resources as mongoose.Model<Resources>) || mongoose.model<Resources>('Resources', ResourcesSchema);

export default ResourcesModel;