import {UserRepository} from "../repositories/UserRepository";
import {User} from "../entities/User";

export class FindAllUserService {
    constructor(private userRepository: UserRepository) {
    }

    async execute(): Promise<{}> {
        return await this.userRepository.findAll();
    }
}