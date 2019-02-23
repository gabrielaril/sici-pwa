import { Dependencia } from '../model/dependencia.model';

export class Usuario{
    code: number;
    dependencies: Dependencia[];
    email: string;
    name: string;
    roles: string[];

    constructor(code: number, dependencies: Dependencia[],
        email: string, name: string, roles: string[]){
            this.code = code;
            this.dependencies = dependencies;
            this.email = email;
            this.name = name;
            this.roles = roles;
    }
}