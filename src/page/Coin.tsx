import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import {
  useLocation,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { fetchCoinInfos, fetchCoinTickers } from "../api/domain/api";
import { IInfo, IPrice } from "../api/types/coin/coin";
import Loading from "../Loading";
import Chart from "./Chart";
import Price from "./Price";
import {
  Container,
  Description,
  Header,
  Overview,
  OverviewItem,
  Tab,
  Tabs,
  Title,
} from "./Styled";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch(`/${coinId}/price`);
  const chartMatch = useRouteMatch(`/${coinId}/chart`);

  const { data: infosData, isLoading: infosLoading = {} } = useQuery<IInfo>(
    ["info", coinId],
    () => fetchCoinInfos(coinId)
  );

  const { data: tickersData, isLoading: tickersLoading = {} } =
    useQuery<IPrice>(["tickers", coinId], () => fetchCoinTickers(coinId), {
      refetchInterval: 5000,
    });

  const loading = infosLoading || tickersLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {`${
            state?.name ? state.name : loading ? <Loading /> : infosData?.name
          }`}
        </title>
      </Helmet>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? <Loading /> : infosData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infosData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infosData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price: </span>
              <span>{tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infosData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/${coinId}/price`}>
              <Price />
            </Route>
            <Route path={`/${coinId}/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
};
export default Coin;
