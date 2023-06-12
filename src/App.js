import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import background from './images/FondoCancha1.jpeg'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }} >

      <BrowserRouter>
        <NavBar /> 
          <Routes>
            <Route path='/' element = {<ItemListContainer />}/>
            <Route path='/category/:categoryId' element = {<ItemListContainer />}/>
            <Route path='/item/:itemId' element = {<ItemDetailContainer />}/>
            <Route path='*' element = {<h1>404 NOT FOUND</h1>}/>
          </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;





