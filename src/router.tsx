import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./page/Coin";
import Coins from "./page/Coins";

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/:coinId"}>
          <Coin />
        </Route>
        <Route path={"/"}>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default router;
