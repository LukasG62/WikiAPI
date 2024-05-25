import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Users extends Model {
    static init(sequelize, DataTypes) {
    return super.init({
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Roles',
                key: 'id'
            }
        },
        user_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: Sequelize.Sequelize.fn('current_timestamp')
        },
        last_connexion_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        auth_token: {
            type: DataTypes.DATE,
            allowNull: true
        },
        token_expiration_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'Users',
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
                name: "role_id",
                using: "BTREE",
                fields: [
                    { name: "role_id" },
                ]
            },
        ]
    });
    }
}
