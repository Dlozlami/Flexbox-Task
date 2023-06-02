import './App.css';
import Rectangle from './Components/Rectangle';
import Circle from './Components/Circle';

function App() {
  return (
    <div className="App">
      <div className="FlexContainer">
        <Rectangle boxHeight={'100px'} growth={1}  />
        <Rectangle boxHeight={'100px'} growth={1}  />
        <Rectangle boxHeight={'100px'} growth={1}  />
      </div>

      <div className="FlexContainer">
        <Rectangle boxHeight={'400px'} growth={0}  />
        <Circle sides={200}  />
        <Rectangle boxHeight={'400px'} growth={0}  />
      </div>

      <div className="FlexContainer">
        <Rectangle boxHeight={'100px'} growth={1} alignment={'flex-end'}/>
      </div>
      
    </div>
  );
}

export default App;
