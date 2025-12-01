import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RingLoader } from "react-spinners"

import type Colaborador from "../../../models/Colaborador"
import DetalhesColaborador from "./DetalhesColaborador"
import { listar } from "../../../services/Service"

function RotaDetalhesColaborador() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [colaborador, setColaborador] = useState<Colaborador | null>(null)

    async function carregarColaborador() {
        await listar(`/colaboradores/${id}`, setColaborador)
    }

    useEffect(() => {
        setIsLoading(true)
        carregarColaborador().finally(() => setIsLoading(false))
    }, [id])

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

            {!isLoading && colaborador && (
                <DetalhesColaborador colaborador={colaborador} />
            )}

            {!isLoading && !colaborador && (
                <div className="text-center text-2xl text-slate-700 mt-20">
                    Colaborador não encontrado.
                </div>
            )}
        </>
    )
}

export default RotaDetalhesColaborador
