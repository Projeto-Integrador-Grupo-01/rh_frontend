import { useEffect, useState } from "react"
import { RingLoader } from "react-spinners"
import type Departamento from "../../../models/Departamento"
import { listar } from "../../../services/Service"
import { Link } from "react-router-dom"
import { PencilSimpleIcon, TrashSimpleIcon } from "@phosphor-icons/react"

function ListarDepartamentos() {
	const [isLoading, setIsLoading] = useState(true)

	const [departamentos, setDepartamentos] = useState<Departamento[]>([])

	async function buscarDepartamentos() {
		await listar("/departamentos", setDepartamentos)
	}

	useEffect(() => {
		setIsLoading(true)
		buscarDepartamentos().finally(() => setIsLoading(false))
	}, [])

	return (
		<>
			{isLoading && (
					<RingLoader
						color="#0D9488"
						size={60}
						speedMultiplier={2}
						aria-label="Ring-loading"
						className="mx-auto my-28"
					/>
			)}

			<div className="flex justify-center w-full min-h-[calc(100vh-8rem)] overflow-x-hidden">
				<div className="box-border w-full px-6 mt-10 max-w-6xl lg:px-12">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h1 className="text-3xl font-bold text-slate-900">Departamentos</h1>
							<p className="text-slate-500 mt-1">
								Gerencie as informações do departamento
							</p>
						</div>
						<Link
							to="/caddepartamento"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
						>
							<span className="text-lg">+</span> Adicionar Departamento
						</Link>
					</div>
					{!isLoading && departamentos.length === 0 && (
						<div className="my-16 text-2xl text-center text-slate-700">
							Nenhum departamento foi encontrado
						</div>
					)}
					{!isLoading && departamentos.length > 0 && (
						<div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
							<table className="w-full text-left border-collapse">
								<thead className="bg-slate-800 text-white">
									<tr>
										<th className="p-4 font-semibold">Nome</th>
										<th className="p-4 text-center font-semibold">Ações</th>
									</tr>
								</thead>

								<tbody className="bg-white">
									{departamentos.map((col) => (
										<tr
											key={col.id}
											className="border-b hover:bg-gray-50 transition-colors"
										>
											<td className="p-4">{col.nome}</td>
											<td className="p-4">
												<div className="flex justify-center gap-4 text-slate-600">

													<Link to={`/editardepartamento/${col.id}`}>
														<PencilSimpleIcon
															size={20}
															className="hover:text-blue-600 transition-colors"
														/>
													</Link>
													<Link to={`/deletardepartamento/${col.id}`}>
														<TrashSimpleIcon
															size={20}
															className="hover:text-red-600 transition-colors"
														/>
													</Link>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default ListarDepartamentos
