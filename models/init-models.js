import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _ArticleRevisions from  "./ArticleRevisions.js";
import _ArticleVersions from  "./ArticleVersions.js";
import _Articles from  "./Articles.js";
import _Categories from  "./Categories.js";
import _CategoryRevisions from  "./CategoryRevisions.js";
import _CategoryVersions from  "./CategoryVersions.js";
import _Media from  "./Media.js";
import _MediaFiles from  "./MediaFiles.js";
import _MediaRevision from  "./MediaRevision.js";
import _MediaVersions from  "./MediaVersions.js";
import _Roles from  "./Roles.js";
import _Status from  "./Status.js";
import _Users from  "./Users.js";

export default function initModels(sequelize) {
    const ArticleRevisions = _ArticleRevisions.init(sequelize, DataTypes);
    const ArticleVersions = _ArticleVersions.init(sequelize, DataTypes);
    const Articles = _Articles.init(sequelize, DataTypes);
    const Categories = _Categories.init(sequelize, DataTypes);
    const CategoryRevisions = _CategoryRevisions.init(sequelize, DataTypes);
    const CategoryVersions = _CategoryVersions.init(sequelize, DataTypes);
    const Media = _Media.init(sequelize, DataTypes);
    const MediaFiles = _MediaFiles.init(sequelize, DataTypes);
    const MediaRevision = _MediaRevision.init(sequelize, DataTypes);
    const MediaVersions = _MediaVersions.init(sequelize, DataTypes);
    const Roles = _Roles.init(sequelize, DataTypes);
    const Status = _Status.init(sequelize, DataTypes);
    const Users = _Users.init(sequelize, DataTypes);

    ArticleVersions.belongsTo(ArticleRevisions, { as: "article_revision", foreignKey: "article_revision_id"});
    ArticleRevisions.hasMany(ArticleVersions, { as: "ArticleVersions", foreignKey: "article_revision_id"});
    ArticleVersions.belongsTo(Articles, { as: "article", foreignKey: "article_id"});
    Articles.hasMany(ArticleVersions, { as: "ArticleVersions", foreignKey: "article_id"});
    ArticleRevisions.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
    Categories.hasMany(ArticleRevisions, { as: "ArticleRevisions", foreignKey: "category_id"});
    Articles.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
    Categories.hasMany(Articles, { as: "Articles", foreignKey: "category_id"});
    Categories.belongsTo(Categories, { as: "parent", foreignKey: "parent_id"});
    Categories.hasMany(Categories, { as: "Categories", foreignKey: "parent_id"});
    CategoryRevisions.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
    Categories.hasMany(CategoryRevisions, { as: "CategoryRevisions", foreignKey: "category_id"});
    CategoryVersions.belongsTo(Categories, { as: "category", foreignKey: "category_id"});
    Categories.hasMany(CategoryVersions, { as: "CategoryVersions", foreignKey: "category_id"});
    CategoryVersions.belongsTo(CategoryRevisions, { as: "category_revision", foreignKey: "category_revision_id"});
    CategoryRevisions.hasMany(CategoryVersions, { as: "CategoryVersions", foreignKey: "category_revision_id"});
    MediaVersions.belongsTo(Media, { as: "medium", foreignKey: "media_id"});
    Media.hasMany(MediaVersions, { as: "MediaVersions", foreignKey: "media_id"});
    Media.belongsTo(MediaFiles, { as: "mediafile", foreignKey: "mediafile_id"});
    MediaFiles.hasMany(Media, { as: "Media", foreignKey: "mediafile_id"});
    MediaVersions.belongsTo(MediaRevision, { as: "media_revision", foreignKey: "media_revision_id"});
    MediaRevision.hasMany(MediaVersions, { as: "MediaVersions", foreignKey: "media_revision_id"});
    Users.belongsTo(Roles, { as: "role", foreignKey: "role_id"});
    Roles.hasMany(Users, { as: "Users", foreignKey: "role_id"});
    Articles.belongsTo(Status, { as: "status", foreignKey: "status_id"});
    Status.hasMany(Articles, { as: "Articles", foreignKey: "status_id"});
    ArticleRevisions.belongsTo(Users, { as: "author", foreignKey: "author_id"});
    Users.hasMany(ArticleRevisions, { as: "ArticleRevisions", foreignKey: "author_id"});
    Articles.belongsTo(Users, { as: "author", foreignKey: "author_id"});
    Users.hasMany(Articles, { as: "Articles", foreignKey: "author_id"});

    return {
        ArticleRevisions,
        ArticleVersions,
        Articles,
        Categories,
        CategoryRevisions,
        CategoryVersions,
        Media,
        MediaFiles,
        MediaRevision,
        MediaVersions,
        Roles,
        Status,
        Users,
    };
}
