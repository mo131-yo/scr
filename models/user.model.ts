import { Model, model, models, Schema} from "mongoose";

    type User= {
    name: string;
    username: string;
    email: string;
    password: string
    };

    const UserSchema= new Schema<User>({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
    });

export const UserModel= models["User"] || model("User", UserSchema);