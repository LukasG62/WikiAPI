import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Media extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        mediafile_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'MediaFiles',
                key: 'id'
            }
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        friendly_name: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        upload_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        last_revision_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'Media',
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
                name: "mediafile_id",
                using: "BTREE",
                fields: [
                    { name: "mediafile_id" },
                ]
            },
        ]
    });
    }
}
