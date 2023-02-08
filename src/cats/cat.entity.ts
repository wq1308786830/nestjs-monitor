import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Cat {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
