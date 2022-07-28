import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import "reflect-metadata";

import { PlayerResolver } from "./resolvers/player";
import {
  ContextWithDataSources,
  PlayerDatasource,
} from "./datasources/context";

async function startServer() {
  const schema = await buildSchema({
    resolvers: [PlayerResolver],
  });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    context: (): ContextWithDataSources => {
      return {
        playerDatasource: new PlayerDatasource(),
      };
    },
  });

  server.listen().then(({ url }) => {
    console.log(`server running on ${url}`);
  });
}

startServer().catch((e) => {
  console.error(e);
  process.exit(1);
});
