import {
  Column,
  DataType,
  Default,
  Model,
  Table,
  Unique,
} from "sequelize-typescript";

interface UserProps {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({ timestamps: true })
export class User extends Model<UserProps> implements UserProps {
  @Column(DataType.STRING)
  firstName!: string;

  @Column(DataType.STRING)
  lastName!: string;

  @Unique
  @Column(DataType.STRING)
  email!: string;

  @Default("USER")
  @Column(DataType.STRING)
  role!: "ADMIN" | "USER";
}

export default User;
