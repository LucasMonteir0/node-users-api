import {UserRepository} from "../repositories/UserRepository";
import {User} from "../entities/User";

export class CreateUserService {
    constructor(private userRepository: UserRepository) {
    }

    async execute(user: User): Promise<{}> {
        return await this.userRepository.create(user);
    }
}