import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./context/providers/ThemeContext";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";

function App() {

  let [theme, setTheme] = useState("light");
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
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
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
