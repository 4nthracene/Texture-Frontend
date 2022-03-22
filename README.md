
# Texture Blog 🎶

This is my portfolio project with realtime chat, OAuth2.0 Markdown Blogs
and many other cool functionalities :) 🚀

## API Reference

#### Get all items

```http
  GET /auth/google
```
Redirects user to the google OAuth 🔏

#### Get item

```http
  GET /auth/logout
```
logs the user out if they are authenticated 🤳


```http
  GET /posts/all
```
fetched all the posts created by me only if the user requesting is authenticated 🤳

```http
  GET /posts?${id}
```
fetched the blog post with that specific id


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`,
`MODE`,
`URL`,
`LOG_PATH`,
`DB_URI`,
`GOOGLE_CLIENT_ID`,
`GOOGLE_CLIENT_SECRET`,
`COOKIE_NAME`,
`COOKIE_KEYS`(seperated by ",")
## Installation

Install Texture Blog with npm

```bash
  npm install
  npm run dev
```

Run only client

```bash
  npm run client
``` 

Run only server

```bash
  npm run server
``` 

Run both server and client in development mode

```bash
  npm run dev
``` 

Build a production bundle

```bash
  npm run build
``` 
## Tech Stack

**Client:** Next JS, Tailwind CSS

**Server:** Node, Express, MongoDB, Passport, Socket.io

**Deployment:** Docker, npm


## Features 💯

- Realtime Chat Functionality
- OAuth 2.0 Using Google
- Markdown Based Blogs
- Over engineered 🙄


## Support

For support ping me on discord `*My Username*#5953` and also why'd you even need support it's a literally just a blog app 😭

