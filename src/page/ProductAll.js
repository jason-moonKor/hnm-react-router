import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { browserHistory } from "react-router";
const ProductAll = () => {
  let [products, setProducts] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let keyword = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {products.length > 0 &&
          products.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
