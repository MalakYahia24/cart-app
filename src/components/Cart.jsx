import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart ,clear } from '../rtk/slices/cart-slice';

function Cart() {
    const cart = useSelector(state => state.cart)
  console.log(cart)
  const dispatch=useDispatch();
  const totalPrice = cart.reduce((acc,product) => {
     return acc += product.price * product.quantity;
  },0);
  console.log(totalPrice)
  return (
    <>
    <h1>Welcom To Cart</h1>
    <Button variant='primary' onClick={()=>dispatch(clear())}>Clear Cart</Button>
    <h5>Total Price : {totalPrice.toFixed(2)}</h5>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Img</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>{
            return(
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img src={product.image} alt={product.title} style={{width:"100px" , height:"100px"}}/></td>
          <td>{product.price} $</td>
          <td>{product.quantity}</td>
          <td><Button variant='danger' onClick={()=> dispatch(deleteFromCart(product))}>Delete</Button></td>
        </tr>)
        })}
      </tbody>
    </Table>
    </>
  );
}

export default Cart;