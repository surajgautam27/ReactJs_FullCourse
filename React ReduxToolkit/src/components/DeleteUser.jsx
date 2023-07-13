import { useDispatch } from "react-redux"
import  styled  from "styled-components"
import { clearAllUser } from "../store/slices/UserSlice"
const DeleteUser = () => {
  const dispatch = useDispatch()
  const deleteAllUsers =()=>{
dispatch(clearAllUser())
  }
  return (
  <Wrapper>
    <button className="btn clear-btn" onClick={deleteAllUsers}> clear users</button>
  </Wrapper>
  )
}

const Wrapper = styled.section `
.clear-btn {
  text-transform:capatalize;
  background-color:#db338a;
  margin-top:2rem;
}`
export default DeleteUser
