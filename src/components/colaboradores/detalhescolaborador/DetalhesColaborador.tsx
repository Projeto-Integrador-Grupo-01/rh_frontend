import { Link } from "react-router-dom";
import { ArrowLeftIcon, PencilSimpleIcon, TrashSimpleIcon } from "@phosphor-icons/react";
import type Colaborador from "../../../models/Colaborador";

interface CardColaboradorProps {
    colaborador: Colaborador;
}

export default function DetalhesColaborador({ colaborador }: Readonly<CardColaboradorProps>) {
    return (
        <div className="container mx-auto px-6 mt-10 max-w-5xl">

            {/* VOLTAR */}
            <Link
                to="/colaboradores"
                className="flex items-center gap-2 text-slate-600 hover:underline mb-6"
            >
                <ArrowLeftIcon size={18} /> Voltar para Colaboradores
            </Link>

            {/* CABEÇALHO */}
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">
                        {colaborador.nome}
                    </h1>
                    <p className="text-slate-500 text-lg">
                        {colaborador.cargo}
                    </p>
                </div>

                <div className="flex gap-3">
                    <Link to={`/editarcolaborador/${colaborador.id}`}>
                        <button className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 flex items-center gap-2">
                            <PencilSimpleIcon size={18} /> Editar
                        </button>
                    </Link>

                    <Link to={`/deletarcolaborador/${colaborador.id}`}>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center gap-2">
                            <TrashSimpleIcon size={18} /> Excluir
                        </button>
                    </Link>
                </div>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* CARD ESQUERDO */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-6">
                        Dados Pessoais
                    </h2>

                    <div className="space-y-4 text-slate-700">

                        <div>
                            <p className="text-sm font-medium text-slate-500">Nome Completo</p>
                            <p className="text-lg">{colaborador.nome}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-500">E-mail</p>
                            <p className="text-lg">{colaborador.email}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-500">Cargo</p>
                            <p className="text-lg">{colaborador.cargo}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-500">Departamento</p>
                            <p className="text-lg">
                                {colaborador.departamento?.nome ?? "—"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-500">Data de Nascimento</p>
                            <p className="text-lg">{colaborador.dtNasc}</p>
                        </div>

                    </div>
                </div>

                {/* CARD DIREITO */}
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-800 mb-6">
                        Salário Base
                    </h2>

                    <div className="space-y-4 text-slate-700">

                        <div>
                            <p className="text-sm font-medium text-slate-500">Salário</p>
                            <p className="text-2xl font-semibold">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(colaborador.salario)}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}