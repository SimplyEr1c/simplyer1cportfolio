import Me from './components/me'
import Navbar from "./components/navbar"
import './app.css'

function App() {
  return (
    
    <div className="App h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar className=""/>
        <div className="flex h-full flex-col justify-center">
        <Me />
        </div>
    </div>
  );
}

export default App;
