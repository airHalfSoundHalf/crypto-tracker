import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { LoadingSpinner } from "./Coins";

const Container = styled.div`
  padding: 0 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 34px;
  color: ${(props) => props.theme.accentColor};
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  isNew: boolean;
  isActive: boolean;
  type: string;
  logo: string;
  tags: object;
  team: object;
  description: string;
  message: string;
  openSource: boolean;
  startedAt: string;
  developmentStatus: string;
  hardwareWallet: boolean;
  proofType: string;
  orgStructure: string;
  hashAlgorithm: string;
  links: object;
  linksExtended: object;
  whitepaper: object;
  firstDataAt: string;
  lastDataAt: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  betaValue: number;
  firstDataAt: string;
  lastUpdated: string;
  quotes: {
    USD: {
      athDate: string;
      athPrice: number;
      marketCap: number;
      marketCapChange24h: number;
      percentChange1h: number;
      percentChange1y: number;
      percentChange6h: number;
      percentChange7d: number;
      percentChange12h: number;
      percentChange15m: number;
      percentChange24h: number;
      percentChange30d: number;
      percentChange30m: number;
      percentCrompriceAth: number;
      price: number;
      volume24h: number;
      volume24hChange24h: number;
    };
  };
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
