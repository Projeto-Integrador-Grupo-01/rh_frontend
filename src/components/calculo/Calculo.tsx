import { useState, type ChangeEvent, type FormEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Calcular from "../../models/Calcular";
import { cadastrar } from "../../services/Service";

function Calculo() {

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [calculo, setCalculo] = useState<Calcular>({
    tHorasExtras: 0,
    valorHora: 0,
    descontos: 0
  });

  const [resultado, setResultado] = useState<any>(null);

  // ⬇️ Novo estado para armazenar dados do colaborador
  const [colaborador, setColaborador] = useState<any>(null);

  // ⬇️ Buscar dados do colaborador pelo ID
  useEffect(() => {
    async function carregarColaborador() {
      try {
        const resposta = await fetch(`/colaboradores/${id}`);
        const dados = await resposta.json();
        setColaborador(dados);
      } catch (erro) {
        console.error("Erro ao carregar colaborador:", erro);
      }
    }

    carregarColaborador();
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCalculo({
      ...calculo,
      [e.target.name]: e.target.value,
    });
  }

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await cadastrar(`/colaboradores/calcularsalario/${id}`, calculo, setResultado);
    } catch (error) {
      console.error(error);
      alert("Erro ao calcular salário");
    }

    setIsLoading(false);
  }

  return (
    <div className="container mx-auto px-6 pt-24 pb-10 md:pt-28 flex flex-col items-center">

      {/* ⬇️ Título com nome, fallback enquanto carrega */}
      <h1 className="text-3xl md:text-4xl text-center mb-8 font-semibold">
        {colaborador ? `Calcular Salário de ${colaborador.nome}` : "Carregando..."}
      </h1>

      <form
        className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md flex flex-col gap-6"
        onSubmit={enviar}
      >

        {/* Horas Extras */}
        <div className="flex flex-col gap-1">
          <label htmlFor="tHorasExtras" className="font-medium text-sm text-gray-700">
            Total de Horas Extras
          </label>
          <input
            type="number"
            id="tHorasExtras"
            name="tHorasExtras"
            placeholder="Ex: 10"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={calculo.tHorasExtras}
            onChange={atualizarEstado}
          />
        </div>

        {/* Valor da Hora */}
        <div className="flex flex-col gap-1">
          <label htmlFor="valorHora" className="font-medium text-sm text-gray-700">
            Valor da Hora
          </label>
          <input
            type="number"
            step="0.01"
            id="valorHora"
            name="valorHora"
            placeholder="Ex: 25.50"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={calculo.valorHora}
            onChange={atualizarEstado}
          />
        </div>

        {/* Descontos */}
        <div className="flex flex-col gap-1">
          <label htmlFor="descontos" className="font-medium text-sm text-gray-700">
            Descontos
          </label>
          <input
            type="number"
            step="0.01"
            id="descontos"
            name="descontos"
            placeholder="Ex: 150.00"
            required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={calculo.descontos}
            onChange={atualizarEstado}
          />
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition flex items-center justify-center"
          >
            {isLoading ? <ClipLoader size={22} color="#fff" /> : "Calcular"}
          </button>
        </div>
      </form>

      {/* RESULTADO */}
      {resultado && (
        <div className="w-full max-w-3xl bg-blue-50 mt-8 p-6 rounded-xl border border-blue-200 shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Resultado</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <p><strong>Salário Bruto:</strong> R$ {resultado.salarioBruto}</p>
            <p><strong>Horas Extras:</strong> R$ {resultado.tHorasExtras}</p>
            <p><strong>Valor Hora Extra:</strong> R$ {resultado.valorHoraExtra}</p>
            <p><strong>Dias Trabalhados:</strong> {resultado.diasTrabalhados}</p>
            <p><strong>INSS:</strong> R$ {resultado.inss}</p>
            <p><strong>IRRF:</strong> R$ {resultado.irrf}</p>
            <p><strong>Total Descontos:</strong> R$ {resultado.tDescontos}</p>
            <p><strong>Salário Líquido:</strong> R$ {resultado.salarioLiquido}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calculo;