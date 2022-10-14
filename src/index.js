import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { App } from "./App.js";

const client = new ApolloClient({
  uri: "https://petgram-server-jjbnr8k2u-juan-alvarz.vercel.app/graphql",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
