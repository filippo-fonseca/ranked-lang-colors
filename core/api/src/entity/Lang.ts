import { Field, Int } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hex: string;

  @Field(() => Int)
  @Column()
  rank: number;
}
