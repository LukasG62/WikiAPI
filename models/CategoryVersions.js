import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CategoryVersions extends Model {
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
        category_revision_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'CategoryRevisions',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'CategoryVersions',
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
            {
                name: "category_revision_id",
                using: "BTREE",
                fields: [
                    { name: "category_revision_id" },
                ]
            },
        ]
    });
    }
}
