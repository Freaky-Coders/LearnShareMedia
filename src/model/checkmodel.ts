import mongoose, { Document, Schema } from "mongoose";

export interface Image extends Document{
    image_url: string
} 

const ImageSchema: Schema<Image> = new Schema({
    image_url: {
        type: String,
        required: true
    }
}, {timestamps: true})

const ImageModel = (mongoose.models.ImageMod as mongoose.Model<Image>) || mongoose.model<Image>('ImageMod', ImageSchema)

export default ImageModel;