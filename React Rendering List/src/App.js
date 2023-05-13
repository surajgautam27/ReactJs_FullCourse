import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App=()=> {
  const expenses =[
  { id:'e1',
   title:'Exam Paper',
   amount:'45.45',
   date:new Date(2020,7,14),
  },
  { id:'e2',
  title:'Car Insurance',
  amount:'45.45',
  date:new Date(2020,7,14),
 },
 { id:'e3',
 title:'Desktop',
 amount:'45.45',
 date:new Date(2020,7,14),
},
{ id:'e4',
title:'Books',
amount:'45.45',
date:new Date(2020,7,14),
}
  ]
  const addExpenseHandler=(expense)=>{
    console.log("in app")
    console.log(expense)

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
   <Expenses items={expenses}/>

    </div>
  );
}

export default App;
