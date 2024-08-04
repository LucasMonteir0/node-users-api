import {v4 as uuid} from 'uuid';

export class User {
    id: String
    name: String
    email: String
    password: String
    createdAt: Date

    constructor({name, email, password}) {
        this.name = name;
        this.email = email;
        this.password = password;

        if (!this.id) {
            this.id = uuid();
        }

    }

}