import  {useParams} from 'react-router-dom';
import useAxios from '../utils/useAxios';
import {useState, useEffect} from 'react';
import Item from '../components/Item';
import {PRODUCTS_PATH} from '../utils/constants';

const EditProduct = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const http = useAxios();

    useEffect(() => {
        const getProduct = async () => {
            try{
                const response = await http.get(`${PRODUCTS_PATH}/${id}`);
                console.log(response);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [id]);

    if (!product) {
        return <p>Loading product...</p>
    }

    return (
        <>
        <h2>Edit</h2>
        <Item {...product} />
        </>
    )
}

export default EditProduct
