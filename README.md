# InvoPlate - MERN Stack Boilerplate

## Project Configuration Instructions
- Type `npm run setup` to install all packages for client, server, and admin
- Type `npm run client` to start client side in development mode @ localhost:3000
- Type `npm run server` to start server side in development mode @ localhost:8000

## Enviornment Variables
Initialise `.envs` in the respective directories and make sure to copy `.env.example` for all the required variables. If you add a new variable at any time, make sure to add it in the `.env.example` with a dummy value.

### React .env
> Please ensure not to include any sort of private keys or database passwords in client `.env` as those are bundled and deployed with the project itself. 

See Example 
![React_APP_EXPOSED](<./images/react-app.env.png>) 


React .envs are always prefixed with `REACT_APP_VAR_NAME`

## Git Practices
To Initialize Custom Commit and Branch checks. Please Run the following commands while in the current directory

- `git config commit.template ./.github/templates/gitmessage`
- `git config core.hooksPath .github/hooks`
