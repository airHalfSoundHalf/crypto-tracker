import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api/domain/api";
import { LoadingSpinner } from "../Loading";
import { Coin, CoinsList, Container, Header, Img, Title } from "./Styled";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { data, isLoading = {} } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>{`코인`}</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => {
            return (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            );
          })}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
