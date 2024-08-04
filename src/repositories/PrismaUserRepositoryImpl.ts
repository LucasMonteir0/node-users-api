import {UserRepository} from "./UserRepository";
import {User} from "../entities/User";
import {prisma} from "../database/index.js";
import {UserMapper} from "../utils/mappers/user_mapper";

export class PrismaUserRepositoryImpl implements UserRepository {

    async create(user: User): Promise<{}> {
        const u = await prisma.user.create({
            data: UserMapper.toObject(user)
        });

        return {
            id: u.id,
            name: u.name,
            email: u.email,
            createdAt: u.createdAt
        }
    }

    async findAll(): Promise<{}> {
        const users = await prisma.user.findMany();
        return users.map((u) => {
            return {
                id: u.id,
                name: u.name,
                email: u.email,
                createdAt: u.createdAt
            }
        });

    }
}