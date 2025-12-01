import { useEffect, useState } from "react"
import { RingLoader } from "react-spinners"
import { listar } from "../../../services/Service"
import type Colaborador from "../../../models/Colaborador"
import { CalculatorIcon, EyeIcon, PencilSimpleIcon, TrashSimpleIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function ListarColaboradores() {
	const [isLoading, setIsLoading] = useState(true)

	const [colaboradores, setColaboradores] = useState<Colaborador[]>([])

	async function buscarColaboradores() {
		await listar("/colaboradores", setColaboradores)
	}

	useEffect(() => {
		setIsLoading(true)
		buscarColaboradores().finally(() => setIsLoading(false))
	}, [])

	return (
		<>
			{isLoading && (
				<RingLoader
					color="#0D9488"
					size={60}
					speedMultiplier={2}
					className="mx-auto my-28"
				/>
			)}

			<div className="flex justify-center w-full min-h-[calc(100vh-8rem)] overflow-x-hidden">
				<div className="box-border w-full px-6 mt-10 max-w-6xl lg:px-12">
					<div className="flex items-center justify-between mb-8">
						<div>
							<h1 className="text-3xl font-bold text-slate-900">Colaboradores</h1>
							<p className="text-slate-500 mt-1">
								Gerencie as informações do funcionário
							</p>
						</div>
						<Link
							to="/cadcolaborador"
							className="px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-900 transition-colors shadow-sm flex items-center gap-2"
						>
							<span className="text-lg">+</span> Adicionar Colaborador
						</Link>
					</div>
					{!isLoading && colaboradores.length === 0 && (
						<div className="my-16 text-2xl text-center text-slate-700">
							Nenhum colaborador foi encontrado
						</div>
					)}
					{!isLoading && colaboradores.length > 0 && (
						<div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
							<table className="w-full text-left border-collapse">
								<thead className="bg-teal-700 text-white">
									<tr>
										<th className="p-4 font-semibold">Nome</th>
										<th className="p-4 font-semibold">Departamento</th>
										<th className="p-4 font-semibold">Cargo</th>
										<th className="p-4 font-semibold">Salário</th>
										<th className="p-4 text-center font-semibold">Ações</th>
									</tr>
								</thead>

								<tbody className="bg-white">
									{colaboradores.map((col) => (
										<tr
											key={col.id}
											className="border-b hover:bg-gray-50 transition-colors border-gray-200"
										>
											<td className="p-4">{col.nome}</td>

											<td className="p-4">
												{col.departamento?.nome ?? "—"}
											</td>

											<td className="p-4">{col.cargo}</td>

											<td className="p-4">
												{Intl.NumberFormat("pt-BR", {
													style: "currency",
													currency: "BRL",
												}).format(col.salario ?? 0)}
											</td>

											<td className="p-4">
												<div className="flex justify-center gap-4 text-slate-600">
													<Link to={`/colaborador/${col.id}`}>
														<EyeIcon
															size={20}
															className="hover:text-teal-700 transition-colors"
														/>
													</Link>

														<Link to={`/calcularsalario/${col.id}`}>
														<CalculatorIcon
															size={20}
															className="hover:text-teal-700 transition-colors"
														/>
													</Link>

													<Link to={`/editarcolaborador/${col.id}`}>
														<PencilSimpleIcon
															size={20}
															className="hover:text-teal-700 transition-colors"
														/>
													</Link>


													<Link to={`/deletarcolaborador/${col.id}`}>
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

export default ListarColaboradores