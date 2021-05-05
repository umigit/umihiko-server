import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { Models } from '../models';

export class User extends Model {
  public id!: number;
  public cognitoUserId!: string;
  public name!: string;
  public email!: string;
  public summary?: string;
  public introduction?: string;
  public profileImageId?: number;

  static associate(models: typeof Models): void {
    User.hasMany(models.Image);
    User.belongsTo(models.Image, {
      as: 'profileImage',
      constraints: false,
    });
  }
}
User.init(
  {
    cognitoUserId: {
      type: DataTypes.STRING,
      field: 'cognito_user_id',
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    introduction: {
      type: DataTypes.TEXT,
    },
    profileImageId: {
      type: DataTypes.INTEGER,
      field: 'profile_image_id',
      references: {
        model: 'Image',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
  }
);
