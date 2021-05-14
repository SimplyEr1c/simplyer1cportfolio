import Me from './components/me';
import Navbar from "./components/navbar";
import './app.css';
import Buttons from './components/buttons';
import BottomBar from './components/bottombar';

function App() {
  return (

    <div className="App h-screen bg-gradient-to-br from-purple-500 to-blue-500 text-white">

      <Navbar />

      <div className="flex flex-col justify-center gap-16  h-5/6 my-auto">
        <Me />
        <Buttons />
      </div>

    <BottomBar />
      
    </div>
  );
}

export default App;
