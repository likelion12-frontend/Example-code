import logo from '../images/logo.png';

function Header(){

    const headerStyle={
        display:"flex",
        width:"100vw",
        flexDirection:"column",
        alignItems:"center",
    
    }

    const logoStyle={
        width: "250px",
        height: "fit-content",
    }

    return(
        <div style={headerStyle}>
            <img src={logo} alt='logo' style={logoStyle}/>
        </div>
    );
}

export default Header;