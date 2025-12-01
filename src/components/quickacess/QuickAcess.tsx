import {
  ArrowRightIcon,
  BuildingsIcon,
  CalculatorIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function AcessoRapido() {
  return (
    <div className="w-full flex justify-center mt-16 mb-8">
      <div className="w-[1100px]">

        {/* Título */}
        <h1 className="text-[32px] font-semibold text-center">Acesso Rápido</h1>
        <p className="text-center text-gray-500 mt-2 mb-12">
          Navegue para os módulos do sistema
        </p>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ===== CARD ===== */}
          <div className="relative bg-white border border-[#E5E7EB] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] h-[220px] p-8 flex items-start gap-6 flex-col">
            {/* ícone */}
            <div className="w-16 h-16 bg-[#1D8BF0] rounded-2xl flex items-center justify-center">
              <UsersIcon size={36} weight="bold" className="text-white" />
            </div>

            <div className="flex flex-col justify-start">
              <h2 className="text-[17px] font-semibold mb-1">Colaboradores</h2>
              <p className="text-gray-600 text-[15px] leading-tight w-[330px]">
                Gerencie as informações dos colaboradores
              </p>

              <Link to={"/colaboradores"}
                className="text-[#1D8BF0] font-medium text-[15px] mt-6"
              >
                Vá para Colaboradores
            <ArrowRightIcon
              size={20}
              weight="bold"
              className="text-[#1D8BF0] absolute bottom-6 right-6"
            />
              </Link>
            </div>
          </div>

          <div className="relative bg-white border border-[#E5E7EB] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] h-[220px] p-8 flex items-start gap-6 flex-col">
            <div className="w-16 h-16 bg-linear-to-br from-[#1D8BF0] to-[#E3836D] rounded-2xl flex items-center justify-center">
              <BuildingsIcon size={36} weight="bold" className="text-white" />
            </div>

            <div>
              <h2 className="text-[17px] font-semibold mb-1">Departamentos</h2>
              <p className="text-gray-600 text-[15px] leading-tight w-[330px]">
                Organize e gerencie os departamentos
              </p>

              <Link to={"/departamentos"}
                className="text-[#1D8BF0] font-medium text-[15px] mt-6"
              >
                Vá para Departamentos
            <ArrowRightIcon
              size={20}
              weight="bold"
              className="text-[#1D8BF0] absolute bottom-6 right-6"
            />
              </Link>
          </div>
          </div>

          {/* ===== CARD ===== */}
          <div className="relative bg-white border border-[#E5E7EB] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] h-[220px] p-8 flex items-start gap-6 flex-col">
            <div className="w-16 h-16 bg-[#1D8BF0] rounded-2xl flex items-center justify-center">
              <CalculatorIcon size={36} weight="bold" className="text-white" />
            </div>

            <div>
              <h2 className="text-[17px] font-semibold mb-1">Calculo de salário</h2>
              <p className="text-gray-600 text-[15px] leading-tight w-[330px]">
                Calcule o salário final dos colaboradores
              </p>

              <Link to={"/calculo"}
                className="text-[#1D8BF0] font-medium text-[15px] mt-6"
              >
                Vá para o Cálculo de Salário
            <ArrowRightIcon
              size={20}
              weight="bold"
              className="text-[#1D8BF0] absolute bottom-6 right-6"
            />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}