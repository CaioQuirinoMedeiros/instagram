# API

It's a simple "Instagram" application. The user can upload a photo with some infos, others users can see that post and like it as much as they want, all in real-time.

It uses socket.io to make it a real-time application

## Setting up

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
