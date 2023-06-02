export default function Rectangle({boxHeight,boxWidth,growth,alignment}){
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;

    const myStyles = {
        backgroundColor:newColor,
        width:boxWidth,
        height:boxHeight,
        flexGrow:growth,
        alignContent:alignment
    }

    return(
        <div className="Flexbox-rectangle" style={myStyles}>

        </div>
    );
}
