import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { Models } from '../models';

export class Image extends Model {
  public id!: number;
  public name!: string;
  public url!: string;
  public userId!: number;

  static associate(models: typeof Models): void {
    Image.belongsTo(models.User);
  }
}
Image.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'User',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
    underscored: true,
  }
);
