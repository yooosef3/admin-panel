import "./styles/index.scss";
import "./styles/fonts.scss";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cl8x0hxnb0t3j01t788f2gt87/master",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
