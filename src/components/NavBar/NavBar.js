import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <CartWidget />

            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Nuevos Ingresos</a></li>
                <li><a href="">Catalogo</a></li>
                <li><a href="">Outfits</a></li>
                <li><a href="">Packs</a></li>
            </ul>
        </nav>
    )
}

export default NavBar