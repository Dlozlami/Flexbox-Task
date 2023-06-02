import './App.css';
import Rectangle from './Components/Rectangle';

function App() {
  return (
    <div className="App">
      <div className="FlexContainer" style={{height:'20vh'}}>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={'0vw'}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={10}  round={'0vw'}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={'0vw'}/>
      </div>

      <div className="FlexContainer" style={{height:'60vh'}}>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={'0vw'}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={10}  round={'100vw'}/>
        <Rectangle boxWidth={'33.33vw'} marginSpacing={0}  round={'0vw'}/>
      </div>

      <div className="FlexContainer" style={{height:'20vh'}}>
        <Rectangle boxWidth={'100vw'} marginSpacing={0}  round={'0vw'}/>
      </div>
    </div>
  );
}

export default App;
