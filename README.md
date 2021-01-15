# Deploy Locally

- Install mongo
- Start mongodb with default everything
  - `sudo mongod`
- Clone the repo
  - `git clone https://github.com/thatdevguy1/letsplay`
- Insert .env files in root and /client/
  - Server .env -> `DB_HOST=mongodb://localhost:27017/letsplay.git`
  - Client .env -> `REACT_APP_BASE_API=http://localhost:8080/api`
- Install modules for both server and client
  - In root folder -> `npm install`
  - In client folder -> `npm install`
- Start the server in development mode
  - In the root folder -> `npm run start:dev`
- Start the client in development mode
  - In the client folder -> `npm run start` or `npm start`

# Happy Hacking
