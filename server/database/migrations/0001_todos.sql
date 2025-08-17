-- Migration number: 0001 	 2025-08-17T23:34:45.283Z
CREATE TABLE `todos` (
  `id` integer PRIMARY KEY NOT NULL,
  `title` text NOT NULL,
  `completed` integer DEFAULT 0 NOT NULL
);