import logo from './logo.svg';
import './App.css';
import OpacityView from './components/OpacityView';

function App() {
  return (
    <div className="App">
      <div style={{
        width: '50%',
      }}>
        <OpacityView />
      </div>
    </div>
  );
}

export default App;
