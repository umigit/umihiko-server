import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { Models } from '../models';

export class Framework extends Model {
  public id!: number;
  public name!: string;
  public experiencePeriod?: string;
  public skilled!: boolean;
  public like!: boolean;

  static associate(models: typeof Models): void {
    models;
  }
}
Framework.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experiencePeriod: {
      type: DataTypes.STRING,
      field: 'experience_period',
    },
    skilled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Framework',
    tableName: 'frameworks',
    underscored: true,
  }
);
