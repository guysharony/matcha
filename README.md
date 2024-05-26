# Matcha

## Prerequisites

In order to run the project, you need to have Docker installed on your machine. If you don't have it, you can download it [here](https://www.docker.com/products/docker-desktop).

## Usage
### Setup the environment variables

First, you need to create a `.env` file in the root of the project. This file is used to set up the environment variables for the project.
The file should look like this:

```sh
NODE_ENV=development

DB_PORT=5432
DB_NAME=YOUR_DATABASE_NAME
DB_USER=YOUR_DATABASE_USER
DB_PASSWORD=YOUR_DATABASE_PASSWORD

BACKEND_PORT=3000
BCRYPT_SALT_ROUNDS=12
JWT_ACTIVATION_EXPIRATION=1d
JWT_ACTIVATION_SECRET=YOUR_ACTIVATION_SECRET
JWT_AUTH_EXPIRATION=1d
JWT_AUTH_SECRET=YOUR_AUTH_SECRET

FRONTEND_PORT=4000
```
⚠️ **Note**: Replace `YOUR_*` with your own values.

### Run the project

To run the project in development mode, you need to run the following command:

```sh
docker compose up -d --build
```

This command setup the database, install the dependencies, and start the backend and frontend servers in background.

⚠️ **Note**: To run the project in production mode, you have to set the `NODE_ENV` environment variable to `production` in the `.env` file.

### Show logs

Logs can be seen by running the following command:

```sh
docker compose logs -f
```
