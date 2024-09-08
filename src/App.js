import React, { useState } from "react";
import ReactDom from "react-dom";
import Login from "./Login/Login";
import Logout from "./Login/Logout";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import generateDummyData from "./model/expenseData";

const DUMMY_EXPENSES = generateDummyData(3000);
const App = () => {
  let message = false;
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [loginStatusState, loginStatusStateUpdate] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const login_Status = (status) => {
    if (status) {
      loginStatusStateUpdate(true);
      message = false;
    } else {
      loginStatusStateUpdate(false);
      message = true;
    }
  };

  const logout_Status = () => {
    loginStatusStateUpdate(false);
  };
  return (
    <React.Fragment>
      {!loginStatusState
        ? ReactDom.createPortal(
            [
              <Login key="1" loginStatus={login_Status} />,
              message && <h1>incorrect user name & password</h1>,
            ],
            document.getElementById("bodyDiv")
          )
        : ReactDom.createPortal(
            <React.Fragment>
              <Logout logoutStatus={logout_Status} />
              <NewExpense onAddExpense={addExpenseHandler} />
              <Expenses items={expenses} />
            </React.Fragment>,

            document.getElementById("bodyDiv")
          )}
    </React.Fragment>
  );
};

export default App;
