import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-indigo-700 p-6">
            <div className="flex items-center flex-shrink-0 text-white ">
                <span className="font-semibold text-3xl tracking-tight">Bahia Import</span>                
            </div> 
            <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="Button" className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-white hover:text-indigo-400 hover:bg-white">
                    PRODUCTOS
                </a>
                <a href="Button" className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-white hover:text-indigo-400 hover:bg-white">
                    NOSOTROS
                </a>
                <a href="Button" className="block leading-none border rounded px-4 py-2 text-xl mt-4 lg:inline-block mr-4 lg:mt-0 text-white hover:text-indigo-400 hover:bg-white">
                    CONTACTO
                </a>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
    }

export default NavBar

