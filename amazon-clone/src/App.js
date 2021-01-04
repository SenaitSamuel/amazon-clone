
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import CheckOut from './Components/CheckOut/CheckOut';

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path ="/checkout" >            
            <CheckOut />
           </Route>
          <Route path ="/" >
            <Home/>
           </Route>         
       </Switch>  
    </div>
   </Router>
  );
}

export default App;
