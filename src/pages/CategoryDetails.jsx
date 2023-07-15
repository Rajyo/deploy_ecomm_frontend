import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";
import CommonSection from "../components/UI/CommonSection";

const CategoryDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [cate, setCate] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${id}`)
      .then((res) => {
        console.log(res.data);
        setCate(res.data);
      });
  }, [id]);

  return (
    <>
      <CommonSection title={"CategoryDetails"} />

      <section className="pt-0 mt-5">
        <Container>
          <Row>
            {cate.length === 0 ? (
              <h1 className="text-center fs-4">No products found!</h1>
            ) : (
              <ProductsList data={cate} />
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default CategoryDetails;
