import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MediaRevision extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        description_diff: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        media_file_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'MediaRevision',
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
