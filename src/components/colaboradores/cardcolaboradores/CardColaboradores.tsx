import { PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import type Colaborador from '../../../models/Colaborador'

interface CardColaboradorProps {
	colaborador: Colaborador
}

function CardColaboradores({ colaborador }: Readonly<CardColaboradorProps>) {
	return (
		<div className="flex flex-col justify-between overflow-hidden bg-white rounded-lg">
			<div className="flex items-end justify-end pt-2 pr-2">
				<Link to={`/editarcolaborador/${colaborador.id}`}>
					<PencilIcon
						size={24}
						className="mr-1 hover:fill-teal-800"
					/>
				</Link>

				<Link to={`/deletarcolaborador/${colaborador.id}`}>
					<TrashIcon
						size={24}
						className="mr-1 hover:fill-red-700"
					/>
				</Link>
			</div>

			<div className="py-4">
				<img
					src={colaborador.foto}
					className="mx-auto mt-1 h-44 max-w-75"
					alt={colaborador.nome}
				/>

				<div className="p-4">
					<p className="text-sm text-center uppercase">
						{colaborador.nome}
					</p>
					<p className="text-sm text-center uppercase">
						{colaborador.email}
					</p>
					<p className="text-sm text-center uppercase">
						{colaborador.cargo}
					</p>
					<p className="text-sm text-center uppercase">
						{colaborador.dtNasc}
					</p>
					<h3 className="text-xl font-bold text-center uppercase">
						{Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL',
						}).format(colaborador.salario)}
					</h3>
					<p className="text-sm italic text-center">
						Departamento: {colaborador.departamento?.nome}
					</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<button
					className="flex items-center justify-center w-full py-2 text-white bg-teal-600 hover:bg-teal-900"
					onClick={() => alert('Função em Desenvolvimento!')}
				>
					Calcular Salário
				</button>
			</div>
		</div>
	)
}

export default CardColaboradores
