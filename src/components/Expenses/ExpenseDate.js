import React from 'react';

import style from './ExpenseDate.module.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={style['expense-date']}>
      <div className={style['expense-date__month']}>{month}</div>
      <div className={style['expense-date__year']}>{year}</div>
      <div className={style['expense-date__day']}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
