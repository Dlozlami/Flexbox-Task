export default function Circle({side,marginSpacing}){
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;

    const myStyles = {
        backgroundColor:newColor,
        width:side,
        height:side,
        marginLeft:marginSpacing,
        marginRight:marginSpacing,
        alignSelf:'center',
        borderRadius:'50%'
    }

    return(<div style={myStyles}></div>);
}
