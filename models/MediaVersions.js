import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MediaVersions extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        media_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Media',
                key: 'id'
            }
        },
        media_revision_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'MediaRevision',
                key: 'id'
            }
        }
    }, {
        sequelize,
        tableName: 'MediaVersions',
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
                name: "media_id",
                using: "BTREE",
                fields: [
                    { name: "media_id" },
                ]
            },
            {
                name: "media_revision_id",
                using: "BTREE",
                fields: [
                    { name: "media_revision_id" },
                ]
            },
        ]
    });
    }
}
