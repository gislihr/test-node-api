import { Player } from "../models/player";

export interface ContextWithDataSources {
  playerDatasource: PlayerDatasource;
}

export class PlayerDatasource {
  playerById(id: string): Player {
    return { id, name: "John Woo" };
  }
}
