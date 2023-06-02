export default function Rectangle({boxWidth,marginSpacing,round}){
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;

    const myStyles = {
        backgroundColor:newColor,
        width:boxWidth,
        marginLeft:marginSpacing,
        marginRight:marginSpacing,
        borderRadius:round
    }

    return(
        <div className="Flexbox-rectangle" style={myStyles}>

        </div>
    );
}
