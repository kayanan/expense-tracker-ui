import { useState } from "react";
import Card from "../components/UI/Card";
import style from "./Login.module.css";
const Login = (props) => {
  const [signupStatus, UpdateSignupStatus] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    if (event.nativeEvent.submitter.value == "signup") {
      localStorage.setItem(event.target[0].value, event.target[1].value);
      event.target[0].value = "";
      event.target[1].value = "";
      UpdateSignupStatus(true);
      return;
    }
    if (localStorage.getItem(event.target[0].value) == event.target[1].value) {
      props.loginStatus(true);
    } else {
      props.loginStatus(false);
    }
  };

  return (
    <Card className={style.card}>
      <form onSubmit={submitHandler}>
        <div className={style.login}>
          <label>USER NAME</label>
          <input type="text" required />
        </div>
        <div className={style.login}>
          <label>PASSWORD</label>
          <input type="password" required />
        </div>
        <button type="submit" value="login">
          LOGIN
        </button>

        {!signupStatus && [
          <h3 className={style.login} key="h3">
            {" "}
            Or Sigiup
          </h3>,
          <button key="buttion" type="submit" value="signup">
            SIGNUP
          </button>,
        ]}
        {signupStatus && <h2>Plese login using new username and password</h2>}
      </form>
    </Card>
  );
};

export default Login;
