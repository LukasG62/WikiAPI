import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ArticleRevisions extends Model {
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
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        revision_description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        content_diff: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        summary_diff: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status_diff: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'ArticleRevisions',
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
                name: "author_id",
                using: "BTREE",
                fields: [
                    { name: "author_id" },
                ]
            },
        ]
    });
    }
}
