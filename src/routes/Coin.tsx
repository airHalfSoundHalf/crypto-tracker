import React from "react";
import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  console.log("coinId:", coinId);

  return <h1>coin: {coinId}</h1>;
};

export default Coin;
