import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Departamento from "../../../models/Departamento";
import { atualizar, cadastrar, listar } from "../../../services/Service";

function FormDepartamento() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [departamento, setDepartamento] = useState<Departamento>({} as Departamento);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/departamentos/${id}`, setDepartamento)
    } catch (error: any) {
      alert('Departamento não encontrado.')
      console.error(error)
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setDepartamento({
      ...departamento,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovoDepartamento(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/departamentos`, departamento, setDepartamento)

        alert('Departamento atualizado com sucesso')

      } catch (error: any) {
        alert('Erro ao atualizar o Departamento')
        console.error(error)
      }

    } else {
      try {
        await cadastrar(`/departamentos`, departamento, setDepartamento)

        alert('Departamento cadastrado com sucesso')

      } catch (error: any) {
        alert('Erro ao cadastrar o Departamento')
        console.error(error)
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/departamentos")
  }

  return (
    <div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
      <h1 className="my-8 text-3xl text-center md:text-4xl">
        {id === undefined ? 'Cadastrar Departamento' : 'Editar Departamento'}
      </h1>

      <form className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2"
        onSubmit={gerarNovoDepartamento}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="nome">Departamento</label>
          <input
            type="text"
            placeholder="Departamento"
            id='nome'
            name='nome'
            className="p-2 text-base bg-white border-2 rounded border-slate-700 utral-800 md:text-lg"
            required
            value={departamento.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
					<label htmlFor="icone" className="font-medium">Icone do Departamento</label>
					<input
						value={departamento.icone}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						type="text"
						placeholder="Adicione aqui a URL do icone do Departamento"
						name="icone"
						id="icone"
						required
						className="border-2 border-slate-700 rounded p-2 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
					/>
				</div>
        <button
          className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-slate-400 hover:bg-slate-800 md:w-1/2 md:text-lg"
          type="submit"
        >
          {isLoading ?
            <ClipLoader
            color="#ffffff"
            size={24}
          />
            :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormDepartamento;