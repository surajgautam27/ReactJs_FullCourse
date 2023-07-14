import {  useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';

let isInitial = true;
function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.ui.cartIsVisible);
const cart = useSelector((state)=>state.cart)
const notification = useSelector(state=>state.ui.notification)
useEffect(()=>{

  const sendCartData= async ()=>{
    dispatch(
      uiActions.showNotification({
        status:'pending',
        title:'sending',
        message:'Sending Cart Data'
      })
    )
    const response= await fetch(
      'https://react-http-b46cd-default-rtdb.firebaseio.com/cart.json',{
    method:'PUT',
    body:JSON.stringify(cart)
    })
    if(!response.ok)
    {
      throw new Error('Sending Cart Data failed')
    }

  dispatch(
    uiActions.showNotification({
      status:'success',
      title:'success',
      message:'sent card Data successfully'
    })
  )

}
if(isInitial)
{
  isInitial= false;
  return
}
sendCartData().catch(error =>{
  dispatch(
    uiActions.showNotification({
      status:'error',
      title:'Error',
      message:'Sending cart Data Failed'
    })
  )
})
},[cart,dispatch])
  return (
    <Fragment>
      {notification && <Notification
      status={notification.status}
      title={notification.title} 
      message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
   

}

export default App;