import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector , useDispatch} from 'react-redux'
import { fetchProducts } from '../rtk/slices/product-slice';
import { addToCart } from '../rtk/slices/cart-slice';

function Products() {
    const products = useSelector(state => state.products) ;
    console.log(products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    } , []);
    console.log(products);
    return (
        <Container>
            <div className='row'>
               {products.map((product) => {
                return(
                    <div className='col' key={product.id}>
                <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={product.image} />
         <Card.Body>
           <Card.Title>{product.title}</Card.Title>
           <Card.Text>
             {product.description}
           </Card.Text>
           <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
         </Card.Body>
       </Card>
                </div>
                )
               })}
               </div>
        </Container>
    );
  }
  
  export default Products;