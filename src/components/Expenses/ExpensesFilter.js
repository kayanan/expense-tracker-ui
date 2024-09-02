import React from 'react';
import Option from "./ExpensesFilterOption"
import style from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  

  return (
    <div className={style['expenses-filter']}>
      <div className={style['expenses-filter__control']}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <Option />
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
