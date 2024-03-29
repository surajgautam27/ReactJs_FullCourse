import useInput from "../hooks/use-Input";

const isNotEmpty = value=>value.trim()!=='';
const isEmail = value=>value.includes('@')
const BasicForm = (props) => {
  const {
    value:firstNameValue,
    isValid:firstNameIsValid,
    hasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset:resetFirstName,
  }=useInput(isNotEmpty)
  const {
    value:lastNameValue,
    isValid:lastNameIsValid,
    hasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastName,
  }=useInput(isNotEmpty)
  const {
    value:emailValue,
    isValid:emailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmail,
  }=useInput(isEmail)

  let formIsValid =false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid)
  {
    formIsValid = true;
  }

  const submitHandler = event =>{
    event.preventDefault();
    if(!formIsValid)
    {
      return;
    }
    console.log("submitted")
    console.log(firstNameValue,lastNameValue,emailValue)

    resetFirstName();
    resetLastName();
    resetEmail()
  }
  const firstNameClasses= firstNameHasError ? 'form-control invalid':'form-control'
  const lastNameClasses= lastNameHasError ? 'form-control invalid':'form-control'
  const emailClasses= emailHasError ? 'form-control invalid':'form-control'
    return (
      <form onSubmit={submitHandler}>
        <div className='control-group'>
          <div className={firstNameClasses}>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' 
            value={firstNameValue} 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} />
            {firstNameHasError && <p className="error-text">Please Enter  FirstName</p>}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name'
            value={lastNameValue} 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
           />
           {lastNameHasError && <p>please Enter LastName</p>}
          </div>
        </div>
        <div className={emailClasses}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='text' id='name'
          value={emailValue} 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}/>
          {emailHasError && <p>Please Enter Vaild Email</p>}
        </div>
        <div className='form-actions'>
          <button disabled = {!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;