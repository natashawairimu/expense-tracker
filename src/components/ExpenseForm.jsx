import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  //takes a prop that will be called when the form is submitted
  const [formData, setFormData] = useState({
    //creates state for the form inputs which will hold the values,,setFormData will update the values
    name: "", //lines define initial values and sets them to empty strings
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    //a function that will be called when any input field changes
    const { name, value } = e.target; //uses destructuring to get name and value from the input
    setFormData((prevData) => ({
      //updates formData
      ...prevData, //uses spread operator to copy key value pairs from prevData
      [name]: value, //dynamically updates a field in formdata using the name,,the squarebrackets mean it uses the variable name as a key
    }));
  };

  const handleSubmit = (e) => {
    //declares a function called handle submit which will be called when the user submits the form
    e.preventDefault(); //prevents default reloading
    console.log("Submit", formData); //debugging
    onAddExpense(formData); //calls the onAddExpense function passsed in App.jsx and sends the object to the parent to add a new expense
    setFormData({
      //clears all input fields after submission by setting them to empty strings
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    //what will show on the page
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="h3">Add Expense</h3>
      <p className="text">Enter your expense details below</p>
      
      <input 
        className="input"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
        autoComplete="name"//I added an autocomplete feature just to see how it works
      />
      
      <textarea  //I had addded <label htmlFor> in my input fields but the console told me I was using it incorrectly,,code was still working though
        className="input"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      

      <input
        className="input"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
     
      <input
        className="input"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      

      <input
        className="input"
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleChange}
      />

      <button type="submit" className="button">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;

//**COMMENTS
//Line 41 connects a submit button to the handleSubmit function

//The input fields are for entering different names and values of the expenses

//formData."" connects the inputs to the states
//onChange updates as the user types

//Line 84 renders a button labeled Add Expense and type="submit" triggers the onSubmit handler which calls handleSubmit
//  */