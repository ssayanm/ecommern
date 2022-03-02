import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Meta from "../components/Meta";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

export default function Home({ match }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <section className="py-20 lg:py-32 bg-brown-50">
      <Meta
        title="Home"
        description="Welcome To ZoroShop - One Stop Solution"
      />
      <div
        className="container px-4 mx-auto "
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="flex flex-wrap justify-center text-center">
          <h1>Latest Products</h1>
        </div>
        <div>
          {/*products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))*/}
          {console.log(products)}
        </div>
      </div>
    </section>
  );
}
