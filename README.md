
# Koywe Challenge

This project is a REST API built with NestJS that handles users, authentication, and quotes. It uses MongoDB to store data and focuses on creating, updating, and managing quotes, as well as authenticating users. Additionally, this project includes a frontend built with React to interact with the API.

## Project Structure

The project is organized as follows:

```
koywe-challenge/
├── src/
│   ├── common/               # Contains common  filters, guards, interceptors
│   ├── config/                # Database configuration and environment variables
│   ├── facades/               # Facades to interact with business logic and data layers
│   ├── modules/               # Main modules like authentication, user, and quote
│   ├── bll/ (Business Logic Layer) # Business logic for each module
│   └── dal/ (Data Access Layer)    # Data access layer, models, and repositories
├── frontend/                  # Frontend React application
│   ├── src/                   # Frontend source code
│   ├── public/                # Static files (HTML, images, etc.)
│   ├── package.json           # Frontend dependencies and scripts
│   └── tsconfig.json          # TypeScript configuration for frontend
├── test/                      # Unit and integration tests
├── .env                       # Project environment variables
├── nest-cli.json              # NestJS CLI configuration
├── package.json               # Project dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## Requirements

### Backend

- Node.js: Version 16 or higher.
- MongoDB: Make sure to have a running MongoDB database or use Docker to spin one up.
- NestJS: The project is built with NestJS.

### Frontend

- Node.js: Version 16 or higher.
- React: The frontend is built with React and uses styled-components for styling.
- API Integration: The frontend communicates with the backend API to manage users and quotes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/koywe-challenge.git
   cd koywe-challenge
   ```

2. Install the dependencies for both backend and frontend:

   - Backend:
     ```bash
     npm install
     ```

   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. Configure environment variables for the backend:
   Copy the `.env.example` file and rename it to `.env`. Then configure the values according to your environment. Example of the environment variables:

   ```env
   MONGODB_URI=mongodb://localhost:27017/quotes
   JWT_SECRET=quotes
   JWT_EXPIRES_IN=1h
   PORT=4000
   ```

4. Spin up the database and the application using Docker Compose:

   If you want to use Docker and Docker Compose to spin up MongoDB and the application, use the following command:

   ```bash
   docker-compose up --build
   ```

   This will spin up two containers:

   - MongoDB: Will be available on port 27017 (you can customize the configuration in the docker-compose.yml file).
   - NestJS Application: Will be available on port 4000.
   - Frontend Application: Will be available on port 3000.

5. To stop the containers, use:

   ```bash
   docker-compose down
   ```

6. Spin up the backend and frontend applications separately without Docker:

   - Backend:
     ```bash
     npm run start:dev
     ```

     The backend application will be available at http://localhost:4000.

   - Frontend:
     ```bash
     cd frontend
     npm run start
     ```

     The frontend application will be available at http://localhost:3000.

## API Endpoints

### Authentication
- `POST /auth/login`: Login with an existing user.
- `POST /auth/register`: Register a new user.

### Users
- `GET /user`: Get all users. (not implemented yet)
- `POST /user`: Create a new user.
- `PUT /user/:id`: Update an existing user. (not implemented yet)
- `DELETE /user/:id`: Delete a user. (not implemented yet)

### Quotes
- `POST /quote`: Create a new quote.
- `GET /quote/:id`: Get id quotes.
- `GET /quote/`: Get all quotes. (not implemented yet)
- `PUT /quote/:id`: Update a quote. (not implemented yet)
- `DELETE /quote/:id`: Delete a quote. (not implemented yet)

## Frontend Structure

The frontend is built with React and communicates with the backend API. It includes components for managing users and quotes.

### Components

- `LoginForm`: Handles user login.
- `RegistrationForm`: Handles new user registration.
- `QuoteList`: Displays a list of quotes.
- `QuoteForm`: Allows the user to create new quotes.

### API Integration

The frontend communicates with the backend using the Fetch API to handle authentication, user registration, and quote management.

### Styling

The frontend uses `styled-components` for styling, ensuring modular and reusable styles across the application.

## Application Structure

### Controller Layer
Each main module has a controller that defines routes and handles HTTP requests. Controllers interact with business services to perform the required operations.

### Service Layer
Each module has its corresponding service, which contains the business logic and interactions with the database.

### Facade Layer
Facades provide abstraction over services and repositories, making it easier to interact with each module's functionalities.

### Business Logic Layer (BLL)
The BLL is responsible for the complex logic and business rules of the project.

### Data Access Layer (DAL)
The DAL interacts with MongoDB using models and repositories. Repositories provide an interface for data access.

## Testing

The project includes unit examples tests located in the `test` folder. You can run the tests with:

```bash
npm run test
```

## Docker

To run the application, MongoDB, and the frontend using Docker, you can use Docker Compose:

```bash
docker-compose up --build
```

This will start three containers:

- MongoDB: On port 27017.
- NestJS Application: On port 4000.
- Frontend Application: On port 3000.

```bash
docker-compose down
```

This will stop the containers.

