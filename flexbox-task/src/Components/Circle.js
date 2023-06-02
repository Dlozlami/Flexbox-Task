export default function Rectangle({sides,marginSpacing}){

    let radius = (sides/2)+'vw';
    let sidesStr = sides+'vw';

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;

    const myStyles = {
        backgroundColor:newColor,
        borderRadius:radius,
        height:sidesStr,
        width:sidesStr,
        alignSelf:"center",
        marginLeft:marginSpacing,
        marginRight:marginSpacing
    }
    return(
        <div className="Flexbox-circle" style={myStyles}>

        </div>
    );
}