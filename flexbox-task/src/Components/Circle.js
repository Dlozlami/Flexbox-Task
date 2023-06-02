export default function Rectangle({sides}){

    let radius = (sides/2)+'px';
    let sidesStr = sides+'px';

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let newColor = "#" + randomColor;

    const myStyles = {
        backgroundColor:newColor,
        borderRadius:radius,
        height:sidesStr,
        width:sidesStr,
        alignSelf:"center"
    }
    return(
        <div className="Flexbox-circle" style={myStyles}>

        </div>
    );
}