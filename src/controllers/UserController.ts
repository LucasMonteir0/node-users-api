import {Request, Response} from "express";
import {UserMapper} from "../utils/mappers/user_mapper";
import {CreateUserService} from "../services/CreateUserService";
import {PrismaUserRepositoryImpl} from "../repositories/PrismaUserRepositoryImpl";
import {User} from "../entities/User";
import {FindAllUserService} from "../services/FindAllUserService";

type UserResponse = {
    id: String,
    name: String,
    email: String,
    createdAt: String,
}

export default {
    async createUser(req: Request, res: Response): Promise<void> {
        const service = new CreateUserService(new PrismaUserRepositoryImpl())
        try {
            const user = new User(req.body);
            const response = await service.execute(user);
            res.status(201).json(response);
        } catch (e) {
            res.status(400).json({messages: 'Erro ao tentar criar este usuário.'});
        }
    },

    async findAll(req: Request, res: Response) {
        const service = new FindAllUserService(new PrismaUserRepositoryImpl());
        try {
            const response = await service.execute();
            res.status(200).json(response);
        } catch (e) {
            res.status(400).json({messages: 'Erro ao tentar buscar todos os usuários.'});
        }
    }
}