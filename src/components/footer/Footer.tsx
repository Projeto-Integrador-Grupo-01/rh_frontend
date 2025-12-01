function Footer() {

    let year = new Date().getFullYear()

    return (
        <div className="w-full border-t border-gray-200 bg-white py-6">
            <div className="container mx-auto text-center text-teal-700 flex flex-col gap-1">
                <p className="text-sm md:text-base">
                    © {year} ConectaRH. Todos direitos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer