import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
export default Categories;
