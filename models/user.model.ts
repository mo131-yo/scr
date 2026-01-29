import { Model, model, models, Schema} from "mongoose";

enum UserRole {
    USER= "USER",
    ADMIN = "ADMIN",
    GUEST = "GUEST",
}

    type User= {
    name: string;
    role: UserRole;
    username: string;
    email: string;
    isVerified: boolean;
    password: string
    };


    const UserSchema= new Schema<User>({
    name: [{type: String, required: true}],
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: Object.values(UserRole), default: UserRole.USER, required: true},
    isVerified: { type: Boolean, default: false, required: true},
    });

export const UserModel= models["User"] || model("User", UserSchema);