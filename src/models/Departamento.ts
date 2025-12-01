import type Colaborador from "./Colaborador";

export default interface Departamento {
    id: number | undefined;
    nome: string;
    icone: string;
    colaborador?: Colaborador[];
}