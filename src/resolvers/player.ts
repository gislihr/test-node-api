import { type } from "os";
import {
  Ctx,
  Field,
  FieldResolver,
  ID,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { ContextWithDataSources } from "../datasources/context";
import { Player } from "../models/player";

@Resolver((of) => Player)
class PlayerResolver {
  @Query((returns) => Player)
  playerById(@Ctx() ctx: ContextWithDataSources) {
    return ctx.playerDatasource.playerById("the id");
  }
}

export { PlayerResolver };
