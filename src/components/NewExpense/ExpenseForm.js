import React, { useState } from "react";

import style from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [status, setStatus] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim()  && enteredDate && enteredAmount>0) {
      setStatus(true);
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      return;
    }
    setStatus(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={style["new-expense__controls"]}>
          <div
            className={`${style["new-expense__control"]} ${
              enteredTitle.length < 1 ? style["invalide"] : ""
            }`}
          >
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div
            className={`${style["new-expense__control"]} ${
              enteredAmount.length < 1 ? style["invalide"] : ""
            }`}
          >
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>

          <div
            className={`${style["new-expense__control"]} ${
              enteredDate.length < 1 ? style["invalide"] : ""
            }`}
          >
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max={`${new Date().getFullYear()}-${(new Date().getMonth() + 1)
                .toString()
                .padStart(2, "0")}-${new Date()
                .getDate()
                .toString()
                .padStart(2, "0")}`}
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={style["new-expense__actions"]}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
      <div>{status ? "" : <h1>Field Can't be blank</h1>}</div>
    </div>
  );
};

export default ExpenseForm;
