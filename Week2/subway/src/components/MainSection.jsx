import background from '../images/main.png';

function MainSection(){

    const imgStyle={
        display:"flex",
        width:"100vw",
        height:"45vh",
    }

    return(
        <>
        <div>
            <img src={background} style={imgStyle}/>
        </div>
            
        </>
    );
}

export default MainSection;