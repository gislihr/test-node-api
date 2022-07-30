import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ContextWithDataSources } from "../datasources/context";
import { Player, PlayerInput } from "../models/player";

@Resolver((of) => Player)
class PlayerResolver {
  @Query((returns) => Player)
  playerById(
    @Ctx() ctx: ContextWithDataSources,
    @Arg("id", (type) => String) id: string
  ) {
    return ctx.playerDatasource.playerById(id);
  }

  @Query((returns) => [Player])
  players(@Ctx() ctx: ContextWithDataSources): Player[] {
    return ctx.playerDatasource.players();
  }

  @Mutation((returns) => Player)
  addPlayer(
    @Ctx() ctx: ContextWithDataSources,
    @Arg("data", (type) => PlayerInput) playerInput: PlayerInput
  ) {
    return ctx.playerDatasource.addPlayer(playerInput);
  }
}

export { PlayerResolver };
