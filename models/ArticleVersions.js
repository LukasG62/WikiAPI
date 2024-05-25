import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ArticleVersions extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        article_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Articles',
                key: 'id'
            }
        },
        article_revision_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ArticleRevisions',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'ArticleVersions',
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
                name: "article_id",
                using: "BTREE",
                fields: [
                    { name: "article_id" },
                ]
            },
            {
                name: "article_revision_id",
                using: "BTREE",
                fields: [
                    { name: "article_revision_id" },
                ]
            },
        ]
    });
    }
}
