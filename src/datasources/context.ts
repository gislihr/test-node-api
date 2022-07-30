import { v4 as uuidv4 } from "uuid";
import { Player } from "../models/player";

export interface ContextWithDataSources {
  playerDatasource: PlayerDatasource;
}

const players: Player[] = [];

export class PlayerDatasource {
  playerById(id: string): Player {
    const player = players.find((p) => p.id === id);
    if (!player) {
      throw new Error(`player with id ${id} not found`);
    }

    return player;
  }

  players(): Player[] {
    return players;
  }

  addPlayer(playerInput: { name: string }) {
    const player = { id: uuidv4(), ...playerInput };
    players.push(player);
    return player;
  }
}
