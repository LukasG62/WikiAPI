import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Articles extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Status',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        last_revision_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        is_auto_generated: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'Articles',
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
                name: "status_id",
                using: "BTREE",
                fields: [
                    { name: "status_id" },
                ]
            },
            {
                name: "author_id",
                using: "BTREE",
                fields: [
                    { name: "author_id" },
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
