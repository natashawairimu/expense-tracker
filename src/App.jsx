import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm"; //imports my custom ExpenseForm component from components folder
import ExpenseTable from "./components/ExpenseTable"; //imports my ExpenseTable component
import SearchBar from "./components/SearchBar";//imports my searchBar component
import Header from "./components/Header";

import "./App.css"; //imports file for styling

function App() {
  const [expenses, setExpenses] = useState([]); //creating a state variable and setting it as an empty array

  const addExpense = (newExpense) => {
    //will be called when a new expense is added
    setExpenses((prev) => [...prev, newExpense]); //uses spread operator to add a new expense to the list of previous expenses
  };

  const [searchTerm, setSearchTerm] = useState(""); //used for the search bar,,sets it as an empty string
  const handleSearch = (e) => {
    //runs when the user types something
    setSearchTerm(e.target.value); //targets the value from the input list
  };
  const filteredExpenses = expenses.filter(
    (
      expense //filters the expenses array to include only those in the
    ) => expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="main">
      <Header className="header"/>
        <div className="form">
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="table">
          <div className="bar">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </main>
    )
  ;
}

export default App;

/*I can't add comments in my return so I'll do it here
Line 28 renders my expense form component and passes addExpense as a prop

Line 32 renders the search bar component and passes 2 props,searchTerm which is the current value
in the search input and onSearch which is a function that updates searchTerm

Line 34 renders my expense table and displays the full list of expense items*/