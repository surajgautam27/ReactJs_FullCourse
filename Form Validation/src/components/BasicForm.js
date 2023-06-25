import { useState } from "react";
const BasicForm = (props) => {
  const [enteredfName, setfEnteredName] = useState("");
  const [enteredlName, setlEnteredName] = useState("");
    const [enteredfNameIsTouched, setEnteredfNameIsTouched] = useState(false);
  const [enteredlNameIsTouched, setEnteredlNameIsTouched] = useState(false);
const [enteredEmail,setEnteredEmail]= useState('')
const [emailIsTouched,setEnteredEmailIsTouched]= useState(false)
  
const enteredEmailIsValid = enteredEmail.includes('@')
const enteredEmailIsInvalid= !enteredEmailIsValid && emailIsTouched
const enteredfnameIsValid = enteredfName.trim()!=='';
  const enteredlNameIsValid = enteredlName.trim()!=='';

  let formIsValid = false;

  if(enteredfnameIsValid && enteredlNameIsValid)
  {
    formIsValid = true;
  }
  const fnameInputChangeHandler = (e) => {
    setfEnteredName(e.target.value);
  };
  const lnameInputChangeHandler = (e) => {
    setlEnteredName(e.target.value);
  };
  const nameInputBlurHandler =()=>{
    setEnteredfNameIsTouched(true)
    setEnteredlNameIsTouched(true)
     }
     const emailInputChangeHandler=(e)=>{
      setEnteredEmail(e.target.value)
     }
     const emailInputBlurHandler=()=>{
      setEnteredEmailIsTouched(true)
     }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredfNameIsTouched(true);
    setEnteredlNameIsTouched(true);

    if (!enteredfnameIsValid && !enteredlNameIsValid) {
    
      return;
    }
    console.log(enteredfName,enteredlName,enteredEmail)
    setfEnteredName("");
    setlEnteredName("");
    setEnteredfNameIsTouched(false)
    setEnteredlNameIsTouched(false)
  };

  const nameInputIsInValid =
    !enteredfnameIsValid &&
    !enteredlNameIsValid &&
    enteredfNameIsTouched &&
    enteredlNameIsTouched;
  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";
    const emailInputClasses = enteredEmailIsInvalid 
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={fnameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredfName}
          />
        </div>
        <div className={nameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lnameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={enteredlName}
          />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input 
        type="text"
         id="name"
         onChange={emailInputChangeHandler} 
         onBlur={emailInputBlurHandler}
         value={enteredEmail}
         />
         
      </div>
      {nameInputIsInValid && (
        <p className="error-text">Name must not be Empty</p>
      )}
      <div className="form-actions">
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
