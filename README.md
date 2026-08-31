# ho-fame

## Database

This project requires a running instance of PostgreSQL.

### How to create a database

Connect to your PostgreSQL using `psql`:

```bash
psql -U <user> -d <existing_database>
```

Create the database for this app:

```psql
CREATE DATABASE <database name>;
```

Exit:

```psql
\q
```

### How to configure the backend

Create a `.env` file in the `backend` directory and configure the connection using the following variables:

```env
PORT=<port for the server>
DB_HOST=<hostname>
DB_PORT=<port>
DB_NAME=<name of the database you created>
DB_PASSWD=<password>
DB_USER=<user>
```

`DB_NAME` must match the name of the PostgreSQL database you created for the application.
