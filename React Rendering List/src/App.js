import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES=
  [
    { id:'e1',
     title:'Exam Paper',
     amount:'45.45',
     date:new Date(2021,7,14),
    },
    { id:'e2',
    title:'Car Insurance',
    amount:'45.45',
    date:new Date(2020,3,14),
   },
   { id:'e3',
   title:'Desktop',
   amount:'45.45',
   date:new Date(2020,1,14),
  },
  { id:'e4',
  title:'Books',
  amount:'45.45',
  date:new Date(2020,2,14),
  }
    ]

const App=()=> {
const [expenses,setExpenses] =useState(DUMMY_EXPENSES)
   const addExpenseHandler=(expense)=>{
   setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses]
   })

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
   <Expenses items={expenses}/>

    </div>
  );
}

export default App;
