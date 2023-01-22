import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api/domain/api";
import ApexChart from "react-apexcharts";
import Loading from "../Loading";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = ({ coinId }: ChartProps) => {
  const { data, isLoading } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "sales",
              data: data?.map((price) => price.close) as [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              width: 500,
              height: 500,
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
