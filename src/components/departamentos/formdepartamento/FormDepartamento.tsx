import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import type Departamento from "../../../models/Departamento";
import { atualizar, cadastrar, listar } from "../../../services/Service";

function FormDepartamento() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/departamentos/${id}`, setDepartamento);
    } catch (error: any) {
      alert("Departamento não encontrado.");
      console.error(error);
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setDepartamento({
      ...departamento,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovoDepartamento(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/departamentos`, departamento, setDepartamento);
        alert("Departamento atualizado com sucesso");
      } else {
        await cadastrar(`/departamentos`, departamento, setDepartamento);
        alert("Departamento cadastrado com sucesso");
      }
    } catch (error: any) {
      alert("Ocorreu um erro ao salvar o departamento.");
      console.error(error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/departamentos");
  }

  return (
    <div
      className="
        container mx-auto px-6 
        pt-24 pb-10
        md:pt-28
        flex flex-col items-center
      "
    >
      <h1 className="text-3xl md:text-4xl text-center mb-8 font-semibold">
        {id === undefined ? "Cadastrar Departamento" : "Editar Departamento"}
      </h1>

      <form
        className="
          w-full max-w-3xl bg-white p-8 rounded-xl shadow-md 
          flex flex-col gap-6
        "
        onSubmit={gerarNovoDepartamento}
      >
        {/* Nome */}
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="font-medium text-sm text-gray-700">
            Nome do Departamento *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Ex: Recursos Humanos"
            required
            className="
              border border-gray-300 rounded-lg p-3 bg-white text-base
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            value={departamento.nome}
            onChange={atualizarEstado}
          />
        </div>

        {/* Ícone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="icone" className="font-medium text-sm text-gray-700">
            Ícone (URL)
          </label>
          <input
            type="text"
            id="icone"
            name="icone"
            placeholder="https://link-do-icone.png"
            required
            value={departamento.icone}
            onChange={atualizarEstado}
            className="
              border border-gray-300 rounded-lg p-3 bg-white text-base
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              px-6 py-2 rounded-lg border border-gray-300 text-gray-700
              hover:bg-gray-100 transition
            "
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="
              px-6 py-2 rounded-lg bg-blue-600 text-white font-medium
              hover:bg-blue-700 transition flex items-center justify-center
            "
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={22} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Salvar"}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormDepartamento;