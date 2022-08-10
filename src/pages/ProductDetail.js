import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    // calling useParams() gives us a 'params' object with a key-value pair where key is dynamic segment leading to that page i.e '/product-detail/:productId' (productId is a dynamic segment hence is a key for a params object). 
    // Note: we can have multiple dynamic segments :- '/product-detail/:productId/: anotherId'.
    const params = useParams();
    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;