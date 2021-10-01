import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContextProvider } from "./context/providers/ThemeContextProvider";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";

function App() {

  return (
    <Router>
      <ThemeContextProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
        </Switch>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
