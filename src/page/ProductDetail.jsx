import React, { useEffect } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetailAction } from '../redux/actions/productDetailAction';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const [product, setProduct] = useState([]);
    const product = useSelector(state => state.productDetail.productDetail);

    const getProduct = async () => {
        dispatch(productDetailAction.getProductDetail(id));
        console.log(product);
    }

    useEffect(() => {
        getProduct();
        // eslint-disable-next-line
    }, []);

    return (
        <Container style={{ width: "50%" }}>
            <Row>
                <Col lg={6} className="product-img-wrap">
                    <img className="product-img" src={product?.img} alt="product img" />
                </Col>
                <Col lg={6}>
                    <h4>{product?.title}</h4>
                    <h5>
                        \ {product?.price}
                    </h5>

                    <div className='product-option-wrap'>
                        <div className='choice-text'>
                            {product?.choice === true ? "Conscious choice" : ""}
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                사이즈 선택
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {product?.size?.map((item, index) => (
                                    <Dropdown.Item key={index} eventKey={item}>{item}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Button style={{ width: "100%" }} variant="dark">
                            추가
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail