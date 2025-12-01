import { BuildingsIcon, CalculatorIcon, ListIcon, UsersIcon, XIcon } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

type MenuState = 'closed' | 'open';

interface NavbarProps {
    menuState: MenuState;
    onMenuToggle: () => void;
    onMenuClose: () => void;
}

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {

    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path
            ? "text-blue-600 relative px-3 py-2 after:content-[''] after:absolute after:inset-0 after:bg-blue-500/10 after:rounded-xl after:-z-10"
            : "text-gray-700";

    return (
        <>
            <div className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200/70 shadow-sm">
                <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-10">
                    <Link to="/home" className="flex items-center gap-2">

                        <span className="text-xl tracking-tight text-teal-700">ConectaRH</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10 text-[15px]">
                        <Link to="/home" className={`hover:text-teal-700 transition ${isActive("/home")}`}>
                            Ínicio
                        </Link>
                        <Link to="/colaboradores" className={`hover:text-teal-700 transition flex items-center gap-1 ${isActive("/colaboradores")}`}>
                            <UsersIcon size={18} />
                            Colaboradores
                        </Link>
                        <Link to="/departamentos" className={`hover:text-teal-700 transition flex items-center gap-1 ${isActive("/departamentos")}`}>
                            <BuildingsIcon size={18} />
                            Departamentos
                        </Link>
                        <Link to="/calculadora" className={`hover:text-teal-700 transition flex items-center gap-1 ${isActive("/calculadora")}`}>
                            <CalculatorIcon size={18} />
                            Cálculo de Salário
                        </Link>
                    </div>

                    {menuState === "closed" && (
                        <button
                            onClick={onMenuToggle}
                            className="md:hidden text-gray-700"
                        >
                            <ListIcon size={30} weight="bold" />
                        </button>
                    )}

                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden
                ${menuState === "open" ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
                onClick={onMenuClose}
            ></div>
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-6 text-lg transform transition-transform duration-300 md:hidden
                ${menuState === "open" ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <button
                    className="self-end text-gray-600 mb-4"
                    onClick={onMenuClose}
                >
                    <XIcon size={28} weight="bold" />
                </button>

                <Link onClick={onMenuClose} to="/home" className={isActive("/home")}>
                    Ínicio
                </Link>
                <Link onClick={onMenuClose} to="/colaboradores" className={`flex items-center gap-2 ${isActive("/colaboradores")}`}>
                    <UsersIcon size={20} /> Colaboradores
                </Link>
                <Link onClick={onMenuClose} to="/departamentos" className={`flex items-center gap-2 ${isActive("/departamentos")}`}>
                    <BuildingsIcon size={20} /> Departamentos
                </Link>
                <Link onClick={onMenuClose} to="/calculadora" className={`flex items-center gap-2 ${isActive("/calculadora")}`}>
                    <CalculatorIcon size={20} /> Cálculo de Salário
                </Link>
            </div>
        </>
    );
}

export default Navbar;