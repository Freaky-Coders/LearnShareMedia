import mongoose, { Document, Schema } from "mongoose";

export interface Categories extends Document{
    category: string;
    subCategory: string[]
}

const CategoriesSchema: Schema<Categories> = new Schema({
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: [String],
        required: true
    }
})

const CategoryModel = (mongoose.models.Categories as mongoose.Model<Categories>) || mongoose.model<Categories>("categories", CategoriesSchema);

export default CategoryModel;