import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MediaFiles extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        uploader_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        filename: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        filetype: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'MediaFiles',
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
        ]
    });
    }
}
