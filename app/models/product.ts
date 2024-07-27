import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

interface ProductProps {
  id?: number;
  brand: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  price: number;
  image: string
}

@Table({ timestamps: true })
class Product extends Model<ProductProps> implements ProductProps {
  @Column(DataType.STRING)
  brand!: string;
  @Column(DataType.STRING)
  name!: string;
  @Column(DataType.TEXT)
  description!: string;
  @Column(DataType.FLOAT)
  price!: number;
  @AllowNull(true)
  @Column(DataType.STRING)
  image!: string;
}

export default Product;
