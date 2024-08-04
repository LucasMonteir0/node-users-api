import { User } from "../../entities/user";

export class UserMapper {

    static toObject(user: User){
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt
        };
    }
}