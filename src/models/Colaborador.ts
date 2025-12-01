import type Departamento from "./Departamento";

export default interface Colaborador {
    id: number;
    nome: string;
    email: string;
    dtNasc: string;
    cargo: string;
    salario: number;
    foto: string;
    departamento: Departamento | null;
}