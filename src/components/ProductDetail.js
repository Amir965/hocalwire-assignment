import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.currentProduct);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id, dispatch]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col md:flex-row p-4 shadow-lg rounded">
            <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-64 object-contain" />
            <div className="md:ml-4 mt-2">
                <h1 className="text-xl font-bold">{product.title}</h1>
                <p className="mt-4">{product.description}</p>
                <p className=" mt-2 text-xl font-semibold">Rs. {product.price}</p>
                <button onClick={() => dispatch(addToCart(product))} className="bg-blue-500 text-white p-2 mt-4 rounded-lg hover:bg-pink-500 block mx-auto md:mx-0 md:ml-0">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;
