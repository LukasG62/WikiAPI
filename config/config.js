// Export a configuration object with the following properties:
const config =  {
    env: process.env.NODE_ENV || 'dev',

    express: {
        port: process.env.WIKIAPI_PORT || 3000
    },

    jwt: {
        secret: process.env.WIKIAPI_JWT_SECRET || 'WikiAPI'
    },

    mysql: {
        host: process.env.WIKIAPI_MYSQL_HOST || 'localhost',
        user: process.env.WIKIAPI_MYSQL_USER || 'WikiAPI',
        password: process.env.WIKIAPI_MYSQL_PASSWORD || 'NKgVmDXCQOQWwTPO',
        database: process.env.WIKIAPI_MYSQL_DATABASE || 'WikiAPI',
        charset: 'utf8mb4'
    }
};

export default config;
