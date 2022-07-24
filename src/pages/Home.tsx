import React, { useEffect, useState } from "react";
import { Header } from "../components";
import styled from "styled-components";

const HomeCont = styled.div`
  max-width: 768px;
  height: 100vh;
  background-color: #fff;
  margin: 0 auto;
`;

const Button = styled.button`
  display: block;
  width: 50%;
  height: 50%;
  transform: translateY(50%);
  margin: 0 auto;
  border: none;
  border-radius: 50%;
  background-color: tomato;
  font-size: 5rem;
  color: #fff;
  cursor: pointer;
`;

const Home = () => {
  const [point, setPoint] = useState<number>(0);
  const [trapPoint, setTrapPoint] = useState<number>(30);

  const clickPoint = () => {
    if (point < 50) {
      setPoint(point + 1);
    } else {
      setPoint(0);
    }
  };

  useEffect(() => {
    if (point === trapPoint) {
      window.confirm("함정");
    }
  }, [point]);

  return (
    <HomeCont>
      <Header />
      <ul>
        <li>point: {point}</li>
        <li>trap: {trapPoint}</li>
      </ul>
      <Button onClick={clickPoint}>Click</Button>
    </HomeCont>
  );
};

export default Home;
