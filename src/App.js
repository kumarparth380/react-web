import { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

export const themeContext = createContext();
function App() {

  let [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <themeContext.Provider value={{ theme, setTheme }}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </themeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
