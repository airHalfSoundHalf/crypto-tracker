import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { InfoData, PriceData } from "../api/types/coin/coin";
import { LoadingSpinner } from "../Loading";
import { Container, Header, Title } from "./Styled";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();

  useEffect(() => {
    (async () => {
      const infoData: InfoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();

      const priceData: PriceData = await (
        await fetch(`http://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);

      /**
       *
       * api 프로퍼티 타입 콘솔 디버깅 팁
       * Object.keys()
       * Object.values()
       * Object.values().map(v => typeof v).join()
       *
       */
      // console.log("info:", priceData.quotes);
      // console.log(
      //   "infoData:",
      //   Object.values(priceData.quotes)
      //     .map((v: any) => typeof v)
      //     .join()
      // );
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || <LoadingSpinner />}</Title>
      </Header>
      {loading ? <LoadingSpinner /> : null}
    </Container>
  );
};

export default Coin;
