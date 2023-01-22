/**
 * 코인 API
 *
 * async/await 방식을 쓸 수 있으나,
 * 더 직관적인 코드이기 위해 고전적인 promise 방식을 사용
 *
 */

// export async function fetchCoins() {
//   const response = await fetch("https://api.coinpaprika.com/v1/coins");
//     return await response.json();
// }

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfos(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
