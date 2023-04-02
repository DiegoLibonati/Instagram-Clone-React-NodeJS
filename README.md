# Instagram-Clone-App-Page

## Getting Started

### Without Docker

1. Go to the `ig-api` folder and run `npm install`.
2. Set the environment variables using a .env file:

```
PORT="NUMBER"
TOKEN_SECRET="tokensecretword"
API_BACK_URL="http://111.111.1.1:${PORT}/api/v1/"
CORS_ORIGIN=["http://localhost:PORTOFFRONTEND", "http://111.111.1.11:PORTOFFRONTEND", "http://client:PORTOFFRONTEND"]
MONGO_INITDB_ROOT_USERNAME="die"
MONGO_INITDB_ROOT_PASSWORD="12345"
MONGO_INITDB_DATABASE="instagram"
MONGO_URL="mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongodb:27017/${MONGO_INITDB_DATABASE}"
```

3. Run the command `npm run dev` to start the backend.
4. Go to the `ig-client` folder and run `npm install`.
5. Set the environment variables using a .env file.

```
REACT_APP_API_URL="http://localhost:PORTOFBACKEND" # "http://111.111.1.11:PORTOFBACKEND"
```

6. Run the command `npm start` to start the frontend.
7. Enjoy your Instagram clone!

### With Docker

1. `Install Docker Desktop`
2. Navigate to the directory where you cloned the GitHub repository.
3. Set the environment variables for the backend and frontend. You can find them above.
4. Run the command `docker-compose up`.
5. Enjoy your Instagram clone!

## Description

Welcome to my Instagram clone! After 2 months of working on it in my free time, I have completed a quite comprehensive version of an Instagram clone. In this clone, you will be able to:

- Create an account
- See user suggestions
- Follow and unfollow other users
- Search for users using a search bar
- Explore random posts using the explore page
- See notifications for likes, comments, and follows
- Create posts
- Like and comment on posts
- View your profile with your posts, description, username, etc.
- Edit your user information, which will change throughout the platform
- See your post feed on the home page
- And many more features

It's important to note that this version is developed with a mobile-first approach, meaning that it is 100% responsive.

## Technologies used

1. React JS
2. Tailwind CSS
3. Typescript
4. Post CSS
5. CSS
6. Node JS
7. Mongo DB

## Libraries used

1. Bcrypt
2. Cors
3. Dotenv
4. Express
5. JsonWebToken
6. Mongoose
7. Multer
8. Swiper
9. Axios

## Portfolio Link

https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Instagram%20Clone%20App%20Page

## Galery

![INSTAGRAM](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/instagram-react-0.jpg)

![INSTAGRAM](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/instagram-react-1.jpg)

![INSTAGRAM](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/instagram-react-2.jpg)

![INSTAGRAM](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/instagram-react-3.jpg)

![INSTAGRAM](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/React/Imagenes/instagram-react-4.jpg)

## Video

https://www.youtube.com/watch?v=SyefayN37m0&ab_channel=DiegoLibonati

## Documentation

### BACKEND - IG-API

![API](https://raw.githubusercontent.com/DiegoLibonati/Instagram-Clone-App-Page/87637c8b9c9662a2a1808c6d729ec4e0ac09c395/ig-client/src/assets/Documentation/api.png)

The `backend` of my Instagram clone is organized as follows:

- `Models` are responsible for communicating with the database in the `controllers`. These `controllers` are called in the `routes`, and finally, the `routes` are initialized in `app.ts`. This way, when you hit the desired `route`, it will execute the desired `controller` with the chosen method and obtain information through the `models`. If the `route` does not require token verification, it won't enter the `middleware`.

- The app contains two `middlewares`:

1. `verifyToken.ts`: It's responsible for verifying if the token coming from the cookies is valid. If it's valid, it will go to the controller. If not, it will log out on the front-end.

2. `uploadImage.ts`: It's responsible for uploading images from the front-end to the server.

- The `mongo.ts` file is responsible for connecting to the database.

- The `config.ts` file is responsible for configuring and obtaining environment variables in the project.

- Images will be stored in the `images folder`.

- The `utils folder` uses TypeScript functions to execute them in the project, saving code and time.

### FRONTEND - CLIENT-API

![CLIENT](https://raw.githubusercontent.com/DiegoLibonati/Instagram-Clone-App-Page/b649b895f669116d1d72f04e1f0442edc84bf2cd/ig-client/src/assets/Documentation/client.png)

The `frontend` of my Instagram clone is organized as follows:

- The application contains an `API folder` where functions responsible for communicating with the backend are executed. Axios is used in these files. Additionally, `instagramApi.ts` contains the predefined backend route, and the `JWT` is passed with each call through an `interceptor` in the request headers.

- The `assets folder` contains all the image files used throughout the application.

- The `components folder` contains all the application components. If a component contains more than one file, it is separated into folders to facilitate its modularity and readability.

- The `contexts folder` is responsible for containing the application's states. In some cases, decentralized states are used, meaning useStates in unit components, but overall the application manages states through `useContext` to facilitate the accessibility of the states throughout the `APP`.

- The `helpers folder` is responsible for executing TypeScript functions that allow for the reduction of repetitive code and easy and simple access to the same functionality multiple times.

- The `hooks folder` contains custom functions that are used to handle states, effects, and events in your components. These functions are created to reuse code and simplify the logic of components, especially in those that require a large amount of complex logic.

- The `layouts folder` will contain reusable components that define the structure and appearance of your pages or views. These components can be used across multiple pages or views, allowing for a consistent layout and design throughout the project.

- The `pages folder` will contain components that represent the main pages of your application. Each file in this folder will correspond to a specific page of your application and contain the necessary components to build that particular page. The "pages" folder will be responsible for defining the structure and content of each of the pages, allowing for clear organization and separation of responsibilities in the project.

- The `router folder` contains the main routing of the application, divided into Auth (Public) and Instagram (Private) routes. If you are not logged in, you will only be able to access the public routes and won't have access to the private ones. This folder is responsible for managing the navigation of the application, ensuring that users are directed to the correct pages based on their authentication status. By separating public and private routes, the "router" folder helps maintain the security and privacy of the application.

- The `types folder` contains all the typing for the application. This folder is responsible for defining and exporting all the custom types used throughout the project. By centralizing the typing in one folder, the `types folder` helps ensure consistency and accuracy in the type definitions, making it easier to maintain and update the project.
