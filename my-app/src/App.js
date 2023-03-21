import './App.css';
import { Route ,Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div >
     <Switch>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/signup' component={SignUp}/>
     
     </Switch>
    </div>
  );
}

export default App;
