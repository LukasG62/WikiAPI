CREATE TABLE `Users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `role_id` integer,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `creation_date` datetime DEFAULT (now()),
  `last_connexion_date` datetime,
  `auth_token` datetime,
  `token_expiration_date` datetime
);

CREATE TABLE `Roles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `label` varchar(255) NOT NULL
);

CREATE TABLE `Status` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `label` varchar(255) NOT NULL
);

CREATE TABLE `Articles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `author_id` integer,
  `status_id` integer,
  `category_id` integer,
  `title` varchar(255) NOT NULL,
  `summary` text,
  `creation_date` datetime DEFAULT (now()),
  `last_revision_date` datetime,
  `content` text,
  `is_auto_generated` boolean DEFAULT false
);

CREATE TABLE `ArticleRevisions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `author_id` integer,
  `category_id` integer,
  `revision_description` text,
  `creation_date` datetime DEFAULT (now()),
  `content_diff` text,
  `summary_diff` text,
  `status_diff` text
);

CREATE TABLE `ArticleVersions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `article_id` integer,
  `article_revision_id` integer NOT NULL
);

CREATE TABLE `MediaFiles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `uploader_id` integer,
  `filename` varchar(255) NOT NULL,
  `filetype` varchar(255) NOT NULL
);

CREATE TABLE `Media` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `mediafile_id` integer,
  `description` varchar(255),
  `friendly_name` integer,
  `upload_date` datetime DEFAULT (now()),
  `last_revision_date` datetime
);

CREATE TABLE `MediaRevision` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `description_diff` varchar(255),
  `media_file_id` integer
);

CREATE TABLE `MediaVersions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `media_id` integer,
  `media_revision_id` integer
);

CREATE TABLE `Categories` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `parent_id` integer,
  `label` varchar(255),
  `description` text,
  `creation_date` datetime,
  `last_revision_date` datetime
);

CREATE TABLE `CategoryRevisions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer,
  `parent_id` integer,
  `name_diff` varchar(255),
  `description_diff` text,
  `revision_date` datetime
);

CREATE TABLE `CategoryVersions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer,
  `category_revision_id` integer
);

ALTER TABLE `Users` ADD FOREIGN KEY (`role_id`) REFERENCES `Roles` (`id`);

ALTER TABLE `ArticleVersions` ADD FOREIGN KEY (`article_id`) REFERENCES `Articles` (`id`);

ALTER TABLE `ArticleVersions` ADD FOREIGN KEY (`article_revision_id`) REFERENCES `ArticleRevisions` (`id`);

ALTER TABLE `ArticleRevisions` ADD FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`);

ALTER TABLE `Categories` ADD FOREIGN KEY (`parent_id`) REFERENCES `Categories` (`id`);

ALTER TABLE `Media` ADD FOREIGN KEY (`mediafile_id`) REFERENCES `MediaFiles` (`id`);

ALTER TABLE `MediaVersions` ADD FOREIGN KEY (`media_id`) REFERENCES `Media` (`id`);

ALTER TABLE `MediaVersions` ADD FOREIGN KEY (`media_revision_id`) REFERENCES `MediaRevision` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`status_id`) REFERENCES `Status` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`);

ALTER TABLE `ArticleRevisions` ADD FOREIGN KEY (`author_id`) REFERENCES `Users` (`id`);

ALTER TABLE `Articles` ADD FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`);

ALTER TABLE `CategoryRevisions` ADD FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`);

ALTER TABLE `CategoryVersions` ADD FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`);

ALTER TABLE `CategoryVersions` ADD FOREIGN KEY (`category_revision_id`) REFERENCES `CategoryRevisions` (`id`);
