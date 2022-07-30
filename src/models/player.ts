import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
class Player {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;
}

@InputType()
class PlayerInput {
  @Field((type) => String)
  name: string;
}

export { Player, PlayerInput };
