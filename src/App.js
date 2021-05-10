
import Me from './components/me'
import Navbar from "./components/navbar"
import './app.css'



function App() {
  return (
    <div className="App h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
        <Navbar />
        <Me />
    </div>
  );
}

export default App;
