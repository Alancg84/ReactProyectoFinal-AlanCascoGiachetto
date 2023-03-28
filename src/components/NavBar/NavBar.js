import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {

    return (

        <nav>
            <h3>La Pelota No Se Mancha</h3>
            <div>
                <button>Mundiales</button>
                <button>Copa Libertadores</button>
                <button>Champions League</button>
            </div>

            <CartWidget />
        </nav>
    )

}

export default NavBar