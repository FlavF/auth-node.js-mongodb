# Authentification MongoDB (in progress)
## Table of Contents
1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Installation](#installation)
4. [Pages](#pages)
5. [Database](#database)
6. [Use](#use)
7. [TODO](#todo)
8. [FAQs](#faqs)

<br/>

### General Info
---
Sign in, log in and log out with MongoDB database.
In english.

<br/>

### Stacks
---
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

Modules/librairies : 
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ejs-lint](https://www.npmjs.com/package/ejs-lint)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [validator](https://www.npmjs.com/package/validator)
- [bcrypt](https://www.npmjs.com/package/bcryptjs)
- [jwt](https://www.npmjs.com/package/jsonwebtoken)


<br/>

### Installation
---
- Need Node.js

If not install, check : https://nodejs.org/en/

- Clone :

```
$ git clone https://github.com/FlavF/auth-node.js-mongodb
```

or

- Installation without clone :

```
$ cd ../path/to/the/file
$ npm init
$ npm install express --save
$ npm i body-parser
$ npm i cors
// view engine : 
$ npm i ejs-lint
// to not restart your node.js src/index.js everytime your changing your code : (add code in package.json to instead just write command  npm start)
$ npm install --save-dev nodemon  
//For .env : 
$ npm i dotenv
//To manage your mongoDB database
npm i mongoose
// For authentification
npm i validator
npm i bcryptjs
npm i jsonwebtoken
```
- Create and Update your .env 

=> look at Pages - Folders to Update for datas

- To start the app and check it

```
$ nodemon src/app.js
```


<br/>

### Pages
---
- Nav : Sign in / Log in / Log out buttons

=> send to page 1, 2, 3

- HomePage : Authentification - Log in

=> show by default log in page

- Page 1 - Sign in

=> user, password, sing in button
=> Restrict password ?

- Page 2 - Log in

=> user, password Log in button

- Page 3 - Log out

=> if log out sent to a page with writing Log out


#### *Folders to update*
- .env : (/.env)

#PAGE src/index.js

PORT = 

#database MongoDB src/db/db.js

MONGODB_URL=

#Token src/models/user.js & src/middelware/auth.js

JWT_SECRET=


<br/>

### Database
---
MongoDB inside the collection an user as :

user : email, password, token


<br/>

### Use
---
To sign in, log in , log out 

<br/>

### TODO
---

- [X] Create pages and routers
- [X] Create database mongoDB
- [X] Function for sign in
- [X] Function for log in
- [X] Function for log out
- [ ] Made one page for logg in and sign in
- [ ] CSS

 
<br/>

### FAQs




