import { type ChangeEvent, type FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { atualizar, cadastrar, listar } from "../../../services/Service"

import type Departamento from "../../../models/Departamento"
import type Colaborador from "../../../models/Colaborador"
import { ClipLoader } from "react-spinners"

function FormColaborador() {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [departamentos, setDepartamentos] = useState<Departamento[]>([])

	const [departamento, setDepartamento] = useState<Departamento>({
		id: 0,
		nome: "",
		icone: "",
	})
	const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador)

	const { id } = useParams<{ id: string }>()

	async function buscarColaboradorPorId(id: string) {
		try {
			await listar(`/colaboradores/${id}`, setColaborador)
		} catch (error: any) {
			alert("Erro ao Buscar Colaborador")
			console.error(error)
		}
	}

	async function buscarDepartamentoPorId(id: string) {
		try {
			await listar(`/departamentos/${id}`, setDepartamento)
		} catch (error: any) {
			alert("Erro ao Buscar Departamento")
			console.error(error)
		}
	}

	async function buscarDepartamentos() {
		try {
			await listar(`/departamentos`, setDepartamentos)
		} catch (error: any) {
			alert("Erro ao Buscar Departamentos")
			console.error(error)
		}
	}

	useEffect(() => {
		buscarDepartamentos()

		if (id !== undefined) {
			buscarColaboradorPorId(id)
		}
	}, [id])

	useEffect(() => {
		setColaborador({
			...colaborador,
			departamento: departamento,
		})
	}, [departamento])

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		const { type, value, name } = e.target
		let valor: string | number = value

		if (["number", "range"].includes(type) || (!isNaN(Number(value)) && value !== "")) {
			const valorSemZeros = value.replace(/^0+(?!$)/, "") || "0"
			valor = parseFloat(Number(valorSemZeros).toFixed(2))
		}

		setColaborador({
			...colaborador,
			[name]: valor,
			departamento: departamento,
		})
	}

	function retornar() {
		navigate("/colaboradores")
	}

	async function gerarNovoColaborador(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)

		if (id !== undefined) {
			try {
				await atualizar(`/colaboradores`, colaborador, setColaborador)

				alert("Colaborador atualizado com sucesso")
			} catch (error: any) {
				alert("Erro ao atualizar o Colaborador!")
				console.error(error)
			}
		} else {
			try {
				await cadastrar(`/colaboradores`, colaborador, setColaborador)

				alert("Colaborador cadastrado com sucesso")
			} catch (error: any) {
				alert("Erro ao cadastrar o Colaborador!")
				console.error(error)
			}
		}

		setIsLoading(false)
		retornar()
	}

	return (
		<div
			className={`container flex flex-col items-center justify-center mx-auto my-4 
		md:my-0 md:h-[81vh] px-6 py-10`}
		>
			<h1 className="text-3xl md:text-4xl text-center mb-8 font-semibold">
				{id !== undefined ? "Editar Colaborador" : "Cadastrar Colaborador"}
			</h1>

			<form
				className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md flex flex-col gap-6"
				onSubmit={gerarNovoColaborador}
			>

				<div className="flex flex-col gap-1">
					<label htmlFor="nome" className="font-medium text-sm text-gray-700">Nome *</label>
					<input
						value={colaborador.nome}
						onChange={(e) => atualizarEstado(e)}
						type="text"
						name="nome"
						id="nome"
						placeholder="John Smith"
						required
						className="border border-gray-300 rounded-lg p-3 bg-white text-base 
						   focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Linha dupla: Data + Cargo */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

					<div className="flex flex-col gap-1">
						<label htmlFor="dtNasc" className="font-medium text-sm text-gray-700">Data de Nascimento *</label>
						<input
							value={colaborador.dtNasc}
							onChange={(e) => atualizarEstado(e)}
							type="date"
							name="dtNasc"
							id="dtNasc"
							required
							className="border border-gray-300 rounded-lg p-3 bg-white text-base
							   focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="cargo" className="font-medium text-sm text-gray-700">Cargo *</label>
						<input
							value={colaborador.cargo}
							onChange={(e) => atualizarEstado(e)}
							type="text"
							name="cargo"
							id="cargo"
							placeholder="Software Engineer"
							required
							className="border border-gray-300 rounded-lg p-3 bg-white text-base 
							   focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

				</div>

				{/* Email */}
				<div className="flex flex-col gap-1">
					<label htmlFor="email" className="font-medium text-sm text-gray-700">E-mail *</label>
					<input
						value={colaborador.email}
						onChange={(e) => atualizarEstado(e)}
						type="email"
						name="email"
						id="email"
						placeholder="email@example.com"
						required
						className="border border-gray-300 rounded-lg p-3 bg-white text-base 
						   focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				{/* Linha dupla: Salário + Foto */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

					<div className="flex flex-col gap-1">
						<label htmlFor="salario" className="font-medium text-sm text-gray-700">Salário *</label>
						<input
							value={colaborador.salario || ""}
							onChange={(e) => atualizarEstado(e)}
							type="number"
							step=".01"
							name="salario"
							id="salario"
							placeholder="85000"
							required
							className="border border-gray-300 rounded-lg p-3 bg-white text-base 
							   focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<label htmlFor="foto" className="font-medium text-sm text-gray-700">Foto (URL) *</label>
						<input
							value={colaborador.foto}
							onChange={(e) => atualizarEstado(e)}
							type="text"
							name="foto"
							id="foto"
							placeholder="https://imagem.com/foto.png"
							required
							className="border border-gray-300 rounded-lg p-3 bg-white text-base
							   focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

				</div>

				{/* Departamento */}
				<div className="flex flex-col gap-1">
					<label htmlFor="departamento" className="font-medium text-sm text-gray-700">
						Departamento *
					</label>

					<select
						name="departamento"
						id="departamento"
						value={departamento.id !== 0 ? departamento.id : ""}
						onChange={(e) => buscarDepartamentoPorId(e.currentTarget.value)}
						className="border border-gray-300 rounded-lg p-3 bg-white text-base 
						   focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="" disabled>Selecione um Departamento</option>

						{departamentos.map((departamento) => (
							<option key={departamento.id} value={departamento.id}>
								{departamento.nome}
							</option>
						))}
					</select>
				</div>

				{/* Botões */}
				<div className="flex justify-end gap-4 mt-4">

					<button
						type="button"
						onClick={() => window.history.back()}
						className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700
						   hover:bg-gray-100 transition"
					>
						Cancelar
					</button>

					<button
						type="submit"
						disabled={isLoading}
						className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium
						   hover:bg-blue-700 transition flex items-center justify-center"
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
	)
}

export default FormColaborador