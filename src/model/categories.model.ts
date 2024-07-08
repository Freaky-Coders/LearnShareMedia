import mongoose, { Document, Schema } from "mongoose";

export interface Categories extends Document {
    category: string;
    subCategory: string[];
}

const CategoriesSchema: Schema<Categories> = new Schema({
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: [String],
        required: true,
    },
});

// Check if the model is already compiled and use it, otherwise compile a new one
const CategoryModel = mongoose.models.Categories || mongoose.model<Categories>("Categories", CategoriesSchema);

export default CategoryModel;
