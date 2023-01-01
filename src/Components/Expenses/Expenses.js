import  Card from '../UI/Card.js';

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import React,{useState} from "react";
import ExpenseFilter from './ExpenseFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

function Expenses(props) {

  const [filteredYear,setFilteredYear] = useState('2020');
  
  const changeFilterHandler = (selectedYear)=>{
   
        setFilteredYear(selectedYear);

  };

  const filteredExpenses = props.items.filter(expense=>{
    if (filteredYear === "ALL")
    return expense;
    else
    return expense.date.getFullYear().toString() === filteredYear;
 });


      // The basic way but it is not clean...  we should make a new component
  //  let expensesContent = <p>No Expenses Found </p>

  //  if (filteredExpenses.length > 0 ) {
    
  //   expensesContent = filteredExpenses.map((expense) => (

  //     <ExpenseItem
  //     key = {expense.id}
  //     title =  {expense.title}
  //     amount = {expense.amount}
  //     date  = {expense.date}
  //     />
  //   ));
  // }

                                                                                           

  return(

    <div>
    <Card className="expenses">

       <ExpenseFilter
        selected = {filteredYear} 
        onChangeFilter = {changeFilterHandler}
        />
        <ExpensesChart  expenses = {filteredExpenses}/>
         <ExpensesList items = {filteredExpenses}/>
       {/*  // follow up the basic way   {expensesContent} */}

       {/* ========> this is the hard code and static way  */}
    
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Expenses;
