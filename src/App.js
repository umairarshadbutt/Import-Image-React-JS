import logo from './logo.svg';
import './App.css';
import import_image from './images/import_image.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={import_image} className="App-logo" alt="logo" />
        <p>
          Image is imported
        </p>
        </header>
    </div>
  );
}

export default App;
