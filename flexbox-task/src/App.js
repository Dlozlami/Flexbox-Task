import './App.css';
import Rectangle from './Components/Rectangle';
import Circle from './Components/Circle';

function App() {
  return (
    <div className="App">
      <div className="FlexContainer" style={{height:'20vh'}}>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0} />
        <Rectangle boxWidth={'33.33vw'} marginSpacing={70} />
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0} />
      </div>

      <div className="FlexContainer" style={{height:'60vh',justifyContent:'space-between'}}>
        <Rectangle boxWidth={'20vw'} marginSpacing={0} />
        <Circle side={'20vw'} marginSpacing={0}/>
        <Rectangle boxWidth={'20vw'} marginSpacing={0} />
      </div>

      <div className="FlexContainer" style={{height:'20vh'}}>
        <Rectangle boxWidth={'100vw'} marginSpacing={0} />
      </div>
    </div>
  );
}

export default App;
