import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class Player {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;
}

export { Player };
