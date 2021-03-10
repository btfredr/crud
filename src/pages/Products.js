import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';

export const Products = () => {
    const [auth] = useContext(AuthContext);
    const history = useHistory();
    const [products, setProducts] = useState(null);
    const http = useAxios();

    if (!auth) {
        history.push('/login');
    }


    return (
        <>
            <h1>Products</h1>
        </>
    );
};

export default Products;