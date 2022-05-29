import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <CartWidget />
            <ul>
            <div class="button-row">
            <div><a href="" title="Inicio"> </a></div>
            <div><a href="" title="Nuevos Ingresos"> </a></div>
            <div><a href="" title="Catálogo"> </a></div>
            <div><a href="" title="Outfits"> </a></div>
            <div><a href="" title="Packs"> </a></div>
            <div><a href="" title="Outlet"> </a></div>
            </div>
            </ul>
        </nav>
    )
}
export default NavBar