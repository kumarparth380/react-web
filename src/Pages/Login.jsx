import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { ThemeContext } from "../context/providers/ThemeContextProvider";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { theme, setTheme } = useContext(ThemeContext);


  const changeTheme=() => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <form className="m-4">
            <div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label"
                // className={theme}
              >
                Email address
              </label>
              <input
                // className={theme}
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label
                for="exampleInputPassword1"
                class="form-label"
                // className={theme}
              >
                Password
              </label>
              <input
                // className={theme}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
                value={password}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Login
            </button>

            <br></br>
            <br></br>

            <button
              onClick={() => {
                history.push("/signup");
              }}
              class="btn btn-primary"
            >
              Go to Sign up!
            </button>
          </form>
        </div>
      </div>
      <button
        onClick={changeTheme}
      >
        Change Theme
      </button>
    </div>
  );
};
