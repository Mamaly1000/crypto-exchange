import Landing from "./Component/Landing";
import {Route, Switch,Redirect} from "react-router-dom";
import CoinTable from "./Component/CoinTable";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/landing/1" component={Landing} />
        <Route path="/landing/:id" component={CoinTable} />
        <Route exact path="/landing/" component={Landing} />
        <Redirect from="/" to="/landing" /> 
        <Redirect to="/landing" /> 
      </Switch>
    </div>
  );
}

export default App;
