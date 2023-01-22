import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: #fff;
  font-size: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
  transition: all 100ms;
  animation: ${rotate} 1s linear infinite;
`;

const Loading = () => {
  return (
    <Wrapper>
      <LoadingSpinner />
    </Wrapper>
  );
};

export default Loading;
