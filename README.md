<h1 align="center">
   Instagram Web Clone
</h1>

<br></br>
<img src="./web_instagram/public/instagram_thumb.png" width="100%">
<br></br>

## Features

- MongoDB as database
- Real-time with Socket.io
- Image upload with multer

## API

It's a simple "Instagram" application. The user can upload a photo with some infos, others users can see that post and like it as much as they want, all in real-time.

It uses socket.io to make it a real-time application

### Setting up

1.

1. Setup a mongoDB instance. You can do this on your own, but here are the steps to do it with docker:

   - ```shell
      docker pull mongo
     ```

   - ```shell
      docker run -d -p 27017:27017 -p 28017:28017 mongo
     ```

1. Enter project directory:

```sh
  cd web_instagram
```

3. Set the Mongo connection URL as an environment variable (use .env.example to create a .env file)

4. Run server in development:

```shell
  yarn dev
```

## WEB

This project is the a instagram's like web app. Users can post a photo with location, description and hashtags. They can leave as many likes as they want!

### Setting up

1. Enter project directory:

```sh
  cd web_instagram
```

2. Create a `.env` file based on the `.env.example` file and fill in the REACT_APP_API_URL environment variable (it should be `http://localhost:3000`)

3. Install the dependencies:

```sh
  yarn install
```

4. Run in development mode:

```sh
  yarn start
```

> This is a ReactJS project, bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
