import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <CartWidget />
            <ul>
            <div className="button-row">
            <div><a href="http://localhost:3000/" title="Inicio"> </a></div>
            <div><a href="http://localhost:3000/" title="Catálogo"> </a></div>
            <div><a href="http://localhost:3000/" title="Outfits"> </a></div>
            <div><a href="http://localhost:3000/" title="Packs"> </a></div>
            <div><a href="http://localhost:3000/" title="Maxicombos"> </a></div>
            <div><a href="http://localhost:3000/" title="Contacto"> </a></div>
            </div>
            </ul>
        </nav>
    )
}
export default NavBar