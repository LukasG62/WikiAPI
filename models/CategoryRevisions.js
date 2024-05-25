import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CategoryRevisions extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name_diff: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        description_diff: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        revision_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'CategoryRevisions',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "category_id",
                using: "BTREE",
                fields: [
                    { name: "category_id" },
                ]
            },
        ]
    });
    }
}
