import { ArrowRightIcon } from '@phosphor-icons/react'

function About() {
  return (
    <div className="w-full bg-[#F2F4F6] py-14 px-6 rounded-2xl max-w-6xl mx-auto mt-10 text-center mb-8">
      <h2 className="text-2xl font-semibold mb-4">Sobre Este Sistema</h2>
      <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
        Este Sistema de Gestão de Recursos Humanos oferece uma interface simplificada
        para administrar todos os aspectos relacionados aos recursos humanos da
        organização. Desde o acompanhamento das informações dos colaboradores e da
        estrutura de departamentos até o cálculo de salários, tudo o que você precisa está a apenas um clique.
      </p>

      <a
        href="/sobre-nos"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
      >
        Sobre nós
        <ArrowRightIcon size={20} />
      </a>
    </div>
  )
}

export default About