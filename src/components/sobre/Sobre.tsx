import React from "react";

import alineImg from "../../assets/aline.jpeg";
import cintiaImg from "../../assets/cintia.jpeg";
import nicollyImg from "../../assets/nicolly.jpeg";
import rafaelaImg from "../../assets/rafaela.jpeg";
import querenImg from "../../assets/queren.jpeg";



type TeamMember = {
    id: number;
    name: string;
    role: string;
    linkedin: string;
    photo: string;
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Aline Romanini",
        role: "Desenvolvedora",
        linkedin: "https://www.linkedin.com/m/in/aline-romanini/",
        photo: alineImg,
    },
    {
        id: 2,
        name: "Cintia Dourado",
        role: "Desenvolvedora",
        linkedin: "https://www.linkedin.com/in/cintia-douradom/",
        photo: cintiaImg,
    },
    {
        id: 3,
        name: "Nicolly Jesus",
        role: "Scrum Master",
        linkedin: "https://www.linkedin.com/m/in/nicolly-jesus/",
        photo: nicollyImg,
    },
    {
        id: 4,
        name: "Rafaela Lemes",
        role: "Tester",
        linkedin: "https://www.linkedin.com/in/rafamorais/",
        photo: rafaelaImg,
    },
    {
        id: 5,
        name: "Queren Alves",
        role: "Desenvolvedora",
        linkedin: "https://www.linkedin.com/in/querenhalves/",
        photo: querenImg,
    },
];

const Sobre: React.FC = () => {
    return (
        <main className="min-h-screen bg-[#f5f7fb]">
            {/* BANNER / HERO */}
            <section className="w-full bg-gradient-to-r from-[#679398] to-[#373f44]">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-slate-50 md:px-8 lg:flex-row lg:items-center lg:py-16">
                    {/* Texto do banner */}
                    <div className="max-w-xl">
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100/80">
                            Plataforma de Gestão de Pessoas
                        </span>

                        <h1 className="mt-4 text-3xl font-semibold leading-snug text-slate-50 md:text-4xl">
                            Sobre o <span className="font-bold">ConectaRH</span>
                        </h1>

                        <p className="mt-3 text-sm leading-relaxed text-slate-100/80 md:text-[15px]">
                            O ConectaRH foi criado para simplificar a rotina do setor de
                            Recursos Humanos, centralizando informações, automatizando cálculos
                            e oferecendo uma visão clara da sua equipe em um ambiente moderno
                            e intuitivo.
                        </p>

                        {/* Cards curtos dentro do banner */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-2xl border border-slate-100/20 bg-slate-900/30 p-4 backdrop-blur">
                                <h3 className="text-xs font-semibold text-slate-50">
                                    Gestão simplificada
                                </h3>
                                <p className="mt-1 text-[11px] text-slate-100/80">
                                    Cadastros, departamentos e salários organizados em um só lugar.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-100/20 bg-slate-900/30 p-4 backdrop-blur">
                                <h3 className="text-xs font-semibold text-slate-50">
                                    Visão em tempo real
                                </h3>
                                <p className="mt-1 text-[11px] text-slate-100/80">
                                    Informações sempre atualizadas para decisões rápidas e seguras.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-100/20 bg-slate-900/30 p-4 backdrop-blur lg:block hidden">
                                <h3 className="text-xs font-semibold text-slate-50">
                                    Experiência intuitiva
                                </h3>
                                <p className="mt-1 text-[11px] text-slate-100/80">
                                    Interface leve e familiar, sem poluição visual.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* “Card” decorativo à direita */}
                    <div className="mt-4 w-full max-w-sm self-stretch lg:mt-0 lg:self-center">
                        <div className="h-full rounded-3xl bg-[#6793984D] p-4 shadow-xl shadow-slate-900/30 backdrop-blur">
                            <div className="flex items-center justify-between text-[11px] text-slate-100/80">
                                <span className="rounded-full bg-slate-900/60 px-3 py-1">
                                    Visão do painel
                                </span>
                                <span className="text-slate-100/60">ConectaRH • 2025</span>
                            </div>

                            <div className="mt-3 rounded-2xl bg-slate-900/60 p-4">
                                <div className="mb-3 flex items-center justify-between text-[11px] text-slate-100/80">
                                    <span>Colaboradores ativos</span>
                                    <span className="rounded-full bg-blue-500/20 px-2 py-[2px] text-[10px] font-medium text-blue-100">
                                        +24 este mês
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex-1 rounded-2xl bg-slate-800/80 p-3 text-[11px]">
                                        <p className="text-slate-300/90">Departamentos</p>
                                        <p className="mt-1 text-xs font-semibold text-slate-50">
                                            08 organizados
                                        </p>
                                    </div>
                                    <div className="flex-1 rounded-2xl bg-slate-800/80 p-3 text-[11px]">
                                        <p className="text-slate-300/90">Cálculos</p>
                                        <p className="mt-1 text-xs font-semibold text-slate-50">
                                            Automatizados
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-3 text-[11px] leading-relaxed text-slate-100/70">
                                Pensado para donos de empresas e times de RH que precisam de
                                clareza e agilidade no dia a dia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTEÚDO PRINCIPAL */}
            <section className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:px-8">
                <div className="grid gap-8 lg:grid-cols-[1.7fr,1.3fr]">
                    {/* Lado esquerdo */}
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                            Conecte pessoas, dados e decisões em um único lugar.
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                            Com o ConectaRH, sua empresa ganha um painel único para acompanhar
                            colaboradores, setores e rotina de folha, reduzindo erros manuais
                            e aumentando a produtividade do time.
                        </p>

                        <div className="mt-5 rounded-2xl border border-blue-100 bg-white p-5">
                            <h3 className="text-sm font-semibold text-slate-900">
                                O que você pode fazer com o ConectaRH
                            </h3>
                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#c97240]" />
                                    <span>Organizar colaboradores por departamentos e cargos.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#c97240]" />
                                    <span>
                                        Centralizar informações de salário, jornada e benefícios em um só sistema.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#c97240]" />
                                    <span>
                                        Padronizar o processo de cálculo de salários e proventos.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#c97240]" />
                                    <span>
                                        Obter uma visão clara da estrutura de RH da sua empresa.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Lado direito */}
                    <aside>
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                            <h3 className="text-sm font-semibold text-slate-900">
                                Por que criamos essa plataforma?
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                A rotina de RH é cheia de detalhes e responsabilidades críticas.
                                O ConectaRH nasceu para ser um sistema leve, visualmente limpo e
                                focado naquilo que realmente importa: pessoas, dados organizados
                                e decisões rápidas.
                            </p>

                            <div className="mt-4 space-y-3 text-sm">
                                <div className="flex gap-3">
                                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#c97240]" />
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            Interface minimalista
                                        </p>
                                        <p className="text-slate-600">
                                            Layout claro, alinhado às demais páginas do sistema
                                            (Início, Colaboradores, Departamentos e Cálculo de Salário).
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#c97240]" />
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            Cores suaves e profissionais
                                        </p>
                                        <p className="text-slate-600">
                                            Predominância de branco, cinza claro e azul, garantindo
                                            conforto visual no uso diário.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="mt-[6px] h-2 w-2 rounded-full bg-[#c97240]" />
                                    <div>
                                        <p className="font-semibold text-slate-900">
                                            Pensado para crescer
                                        </p>
                                        <p className="text-slate-600">
                                            Estrutura preparada para receber novos módulos, relatórios
                                            e integrações sem perder a leveza do design.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Linha de features */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <h4 className="text-sm font-semibold text-slate-900">
                            Foco em produtividade
                        </h4>
                        <p className="mt-2 text-sm text-slate-600">
                            Menos planilhas soltas e informações espalhadas. Tudo centralizado
                            no mesmo ambiente.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <h4 className="text-sm font-semibold text-slate-900">
                            Experiência consistente
                        </h4>
                        <p className="mt-2 text-sm text-slate-600">
                            Mesma identidade visual em todas as páginas, garantindo fluidez na
                            navegação do usuário.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                        <h4 className="text-sm font-semibold text-slate-900">
                            Pronto para evoluir
                        </h4>
                        <p className="mt-2 text-sm text-slate-600">
                            Pensado para acompanhar o crescimento da sua empresa e das demandas
                            do RH moderno.
                        </p>
                    </div>
                </div>

                {/* Equipe */}
                <section className="mt-16">
                    <h2 className="text-xl font-semibold text-slate-900 md:text-2xl text-center">
                        Nossa equipe
                    </h2>
                    <p className="mt-2 text-sm md:text-[15px] text-slate-600 text-center max-w-2xl mx-auto">
                        Conheça as pessoas por trás do ConectaRH, responsáveis por unir
                        tecnologia e gestão de pessoas em um só lugar.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col items-center text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                            >
                                <img
                                    src={member.photo}
                                    alt={`Foto de ${member.name}`}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-3"
                                />
                                <h3 className="text-sm font-semibold text-slate-900">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-slate-600 mb-3">
                                    {member.role}
                                </p>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs font-medium text-[#c97240] hover:underline"
                                >
                                    Ver perfil no LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Sobre;
