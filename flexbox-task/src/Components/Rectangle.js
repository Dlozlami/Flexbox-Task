export default function Rectangle({boxWidth,marginSpacing,round}){
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;

    const myStyles = {
        backgroundColor:newColor,
        width:boxWidth,
        marginLeft:marginSpacing,
        marginRight:marginSpacing
    }

    if(round)
    {
        return(<div className="Circle" style={myStyles}></div>);
    }

    return(<div style={myStyles}></div>);
}
