import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import {AiFillDelete} from "react-icons";
import { removeUser } from "../store/slices/UserSlice";
const DisplayUsers = () => {
const dispatch = useDispatch()
  const data = useSelector((state)=>{
    return state.users

  })
  const deleteUser = (id)=>{
dispatch(removeUser(id))
  }
  console.log(data)
  return (
   <Wrapper>
   { data.map((user,id)=>{
      return <li key={id}>
        <h3>{user}</h3>
        <button className="btn  btn-delete" onClick={()=>{deleteUser(id)}}>
     Delete
        </button>
        </li>
    })}
   </Wrapper>
    
  )
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`
export default DisplayUsers
