import './App.css';
import Expenses from './components/Expenses/Expenses';
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
  return (
    <div>
    <h1> Lets Get Started</h1>
   <Expenses items={expenses}/>
    </div>
  );
}

export default App;
