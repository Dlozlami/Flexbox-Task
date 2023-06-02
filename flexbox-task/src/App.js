import './App.css';
import Rectangle from './Components/Rectangle';

function App() {
  return (
    <div className="App">
      <div className="FlexContainer" style={{height:'20vh'}}>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={false}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={10}  round={false}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={false}/>
      </div>

      <div className="FlexContainer" style={{height:'60vh'}}>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={false}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={10}  round={true}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={false}/>
      </div>

      <div className="FlexContainer" style={{height:'20vh'}}>
        <Rectangle boxWidth={'100vw'} marginSpacing={0}  round={false}/>
      </div>
    </div>
  );
}

export default App;
