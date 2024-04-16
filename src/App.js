
import './App.css';
import SearchBar from './searchBar/searchBar';
import NavBar from './navBar/navBar';
import WeatherResult from './weatherResult/WeatherResult';
import { Provider } from 'react-redux';
import { store } from './app/store';
function App() {
  return (
    <>
    <Provider store={store}>
        <NavBar/>
        <SearchBar/>
        <WeatherResult/>
    </Provider>

    
    </>
   
  );
}

export default App;
