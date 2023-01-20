import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 34px;
  color: ${(props) => props.theme.accentColor};
`;

export const CoinsList = styled.ul``;

export const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
