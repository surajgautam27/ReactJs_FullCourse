import { useState, useRef, useEffect } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
const [enteredNameIsValid,setEnterNameIsValid]=useState(true)
  const [enteredNameTouched,setEnteredNameTouched]=useState(false)
useEffect(()=>{
  if(enteredNameIsValid)
  {
    console.log('Entered name is valid')

  }
},[enteredNameIsValid])

const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {

    event.preventDefault();
    setEnteredNameTouched(true)
    if(enteredName.trim()===''){
        setEnterNameIsValid(false)
             return
    }
    setEnterNameIsValid(true)
    console.log(enteredName);

    const enterdValue = nameInputRef.current.value;
    console.log(enterdValue);
    // nameInputRef.current.value=""
    setEnteredName("");
  };
  const nameInputIsInvalid =!enteredNameIsValid && enteredNameTouched
const nameInputClasses = nameInputIsInvalid ? 'form-control invalid':'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid &&<p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
