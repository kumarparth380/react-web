import { useContext, useState } from "react";
import { useHistory } from "react-router";
import {
  GlobalThemeType,
  ThemeContext,
} from "../context/providers/ThemeContextProvider";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const { theme, setTheme } = useContext<GlobalThemeType>(ThemeContext);

  const changeTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const onLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (email == "" || password == "") {
      return;
    }
    let a = JSON.parse(localStorage.getItem("users") || "");

    interface User {
      email: string;
      password: string;
    }

    let user: User = { email: "sgasgasg", password: "gsagu sjbfk" };

    for (let i = 0; i < a.length; i++) {
      if (a[i].email == email) {
        user = { email: a[i].email, password: a[i].password };
        break;
      }
    }
    user.email == email && user.password == password
      ? history.push("/home")
      : alert("Email or password are incorrect");
  };
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <form className="m-4">
            <div className="mb-3">
              <label
                className="form-label"
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
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>
            <div className="mb-3">
              <label
                className="form-label"
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
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onLogin}>
              Login
            </button>

            <br></br>
            <br></br>

            <button
              onClick={() => {
                history.push("/signup");
              }}
              className="btn btn-primary"
            >
              Go to Sign up!
            </button>
          </form>
        </div>
      </div>
      {/* <button
        onClick={changeTheme}
      >
        Change Theme
      </button> */}
    </div>
  );
};
