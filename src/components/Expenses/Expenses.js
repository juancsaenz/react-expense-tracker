import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  const dataFiltered = data.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={changeYearHandler}
          yearSelected={filteredYear}
        />
        <ExpensesChart expenses={dataFiltered}/>
        <ExpensesList items={dataFiltered} />
      </Card>
    </li>
  );
};

export default Expenses;
