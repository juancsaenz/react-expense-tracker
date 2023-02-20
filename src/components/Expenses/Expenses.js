import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        yearSelected={filteredYear}
      />
      {data.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

export default Expenses;
