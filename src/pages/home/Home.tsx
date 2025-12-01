import Sobre from "../../components/sobre/Sobre";
import bgsobre from "../../assets/bg-sobre.jpeg"; // → 


function Home() {
	return (
		<>
			<div
				className="w-full min-h-[calc(100vh-9rem)] bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${bgsobre})` }}
			>
			</div>



			{/* Adicionando o Sobre aqui */}
			<Sobre />

			{/* Footer viria abaixo se existir */}
		</>
	);
}

export default Home;
