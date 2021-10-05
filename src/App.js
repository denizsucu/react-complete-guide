import Expenses from "./components/Expenses";
import "./components/Expenses/Expenses.css";
import "./App.css";
import React from "react";


function App() {

  const expenses = [
    {
      id: "e1",
      title: "Paper",
      amount: 15,
      date: new Date(2020, 1, 2)
    },
    {
      id: "e2",
      title: "Paperclip",
      amount: "$10",
      date: new Date(2020, 5, 2)
    }
  ];

  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'String'),
    React.createElement(Expenses, {items: expenses})
  );

  // return (
  //   <div className="expenses">
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses}/>
  //   </div>
  // );
}

export default App;
