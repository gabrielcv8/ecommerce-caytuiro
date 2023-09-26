const NavBar = () => {
    const listItemStyle = { marginRight: "10%", marginTop: "3%"};
    const aStyle = {color: "#FFFFFF", textDecoration: "none"};
    return (
        <header style={{backgroundColor: '#614344'}}>
            <nav style={{ display: "flex"}}>
                <div style={{ width: "5%" }}>
                    <a href="./index.html">
                        <img src="/images/Logotransparente.png" alt="Logo Navbar" style={{ width: "100%" }}/>
                    </a>
                </div>
                <ul style={{ listStyle: "none", display: "flex"}}>
                    <li style={listItemStyle}>
                        <a href="./index.html" style={aStyle}>Mens</a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="./index.html" style={aStyle}>Womens</a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="./index.html" style={aStyle}>Shops</a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="./index.html" style={aStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        </a>
                    </li>
                    <li style={listItemStyle}>
                        <a href="./index.html" style={aStyle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </a>
                    </li>
                    <li style={{marginLeft: "500%", marginTop: "3%"}}>
                        <a href="./index.html" style={aStyle}>
                            <span>3</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default NavBar;