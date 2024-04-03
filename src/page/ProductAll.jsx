import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducer/productSlice';

const ProductAll = () => {
    const productList = useSelector(state => state.product.productList);
    // eslint-disable-next-line
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = async () => {
        let searchQuery = query.get('q') || "";

        // dispatch(productAction.getProducts(searchQuery));
        dispatch(fetchProducts(searchQuery));

    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu, index) => (
                        <Col lg={3} key={index}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll