import React from "react";

function ExpenseTable({expenses }) {//function that takes expenses as a prop for destructuring
  return (//table header
    <table>
      <thead>
        <tr>
          <th>Expenses</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        
        {expenses.map((expense, index) => (//loops through each item in the expenses arrray and creates a row for each expense
          //each td displays properties from the expense object
          <tr key={index}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;