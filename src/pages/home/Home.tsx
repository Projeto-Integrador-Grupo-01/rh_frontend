<<<<<<< Updated upstream
﻿function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-[calc(100vh-9rem)] bg-[#e0a98a]">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center px-6 py-10 md:py-0 gap-10">
        
        {/* Texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
        
          <h2 className="text-5xl md:text-7xl font-extrabold text-teal-700 tracking-tight drop-shadow-sm">
            ConectaRH
          </h2>
=======
﻿import ListarColaboradores from "../../components/colaboradores/listarcolaboradores/ListarColaboradores"
import ModalColaborador from "../../components/colaboradores/modalcolaboradores/ModalColaborador"
import Sobre from "../../components/sobre/Sobre"
>>>>>>> Stashed changes

          <p className="text-lg md:text-2xl text-stone-700/90 max-w-md">
            Mais do que RH, somos conexão humana!
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 text-lg text-stone-700 border-2 border-stone-700 rounded-lg font-semibold hover:bg-teal-700 hover:text-white transition-all">
              Novo Colaborador
            </button>
          </div>
        </div>
        
        {/* Imagem */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://ik.imagekit.io/5qjemq96e/conectaRH/agencia-de-marketing-autentica-pequena-e-jovem_23-2150167428.avif"
            alt="Imagem Página Home"
            className="w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-xl shadow-xl"
          />
        </div>

      </div>
    
    </div>

<<<<<<< Updated upstream
    
  )
=======
					<div className="flex items-center justify-center">
						<img
							src="https://ik.imagekit.io/vzr6ryejm/games/home.png"
							alt="Imagem Página Home"
							className="w-2/3 max-w-xs md:max-w-md lg:max-w-lg"
						/>
					</div>
				</div>
			</div>

			<div className="py-2 md:py-0 md:mb-4">
				<ListarColaboradores />
			</div>

		</>
	)
>>>>>>> Stashed changes
}

export default Home
