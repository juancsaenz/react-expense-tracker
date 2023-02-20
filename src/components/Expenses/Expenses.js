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

  const dataFiltered = data.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (dataFiltered.length > 0) {
    expensesContent = dataFiltered.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={changeYearHandler}
        yearSelected={filteredYear}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
