import './App.css';
import Rectangle from './Components/Rectangle';
import Circle from './Components/Circle';

function App() {
  return (
    <div className="App">
      <div className="FlexContainer">
        <Rectangle boxHeight={'150px'} boxWidth={'150px'} growth={0}  />
        <Rectangle boxHeight={'150px'} boxWidth={'150px'} growth={0}  />
        <Rectangle boxHeight={'150px'} boxWidth={'150px'} growth={0}  />
      </div>

      <div className="FlexContainer">
        <Rectangle boxHeight={'inherit'} boxWidth={'150px'} growth={0}  />
        <Circle sides={150}  />
        <Rectangle boxHeight={'inherit'} boxWidth={'150px'} growth={0}  />
      </div>

      <div className="FlexContainer">
        <Rectangle boxHeight={'150px'} boxWidth={'100%'} growth={0}  />
      </div>
    </div>
  );
}

export default App;
