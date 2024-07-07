import { DataTypes, Model } from "sequelize";
import util from "util";
import connectToDB from "./db.js";
import { type } from "os";

const db = await connectToDB("postgres://josep:admin@localhost:5432/animals");

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
    return `${human.fname} ${human.lname}`;
  }
}

Human.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "humans",
    sequelize: db,
  }
);

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthYear: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "animals",
    sequelize: db,
  }
);

Human.hasMany(Animal, { foreignKey: "humanId" });
Animal.belongsTo(Human, { foreignKey: "humanId" });

export default db;
