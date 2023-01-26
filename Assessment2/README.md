# Graduation Assessment: App


## Summary
This assessment will combine much of what you have encountered during the units at Codesmith. You will be building a simple store application. This application will include the ability to:

- log in to a protected page
- retrieve and display items for sale from a database
- add new items to the database
- update items in the database when purchased



## Important Notes for Us to Test Your Application
You are not given any code to test your application, but we will run tests on your Pull Request. In order for these tests to run properly, please adhere to the following:

- While you are free to add any additional files you want, **do not edit the file structure or delete existing files**
- Likewise you can add additional HTML elements, IDs, and classes, but **do not remove existing hardcoded HTML elements/attributes**
- If you are told to send or display a certain string or to name a file or function a certain name, copy-paste the string **exactly** as it is shown. Alternate text or differing capitalization will fail the tests
- Run your server and test out your application before submitting! Even if things are not working 100% correctly, you should be able to catch and remove any syntax or reference errors just by running your application
- Testing your database work requires somewhat odd syntax. **Pay careful attention to the notes regarding this below!**
- You are free to edit the stylesheet as you please!



## Serving the files
For this part you will be editing the `server/server.js` file.
- [ ] Create a Node.js HTTP server that listens on port 3333. (You may use Express if you'd like, but it is not necessary.)
- [ ] When you visit `http://localhost:3333/` in the browser, it should serve the `index.html` file from the `views` folder. This is the login page for the application.
- [ ] When you visit `http://localhost:3333/store` in the browser, you should render the `store.html` file from the `views` folder. This file will contain the store we are creating.
- [ ] You should also serve the CSS and JS that the html files are requesting. These are located in the `assets` folder. Make sure the `Content-Type` header is getting properly set in the HTTP response. (Some methods from some frameworks infer the content type from the file extension and set the header automatically.)
- [ ] Visiting any route that is not defined should respond to the client with a `404` status code and an error message `Page not found`.



## Item Database
Your store application would be useless without a database to hold onto items between sessions. To test your code, we will run it on a database we have created. This is why the `itemModel` file looks a little odd. Please put the URI of the database you will be using (local or cloud hosted) in the `myURI` variable. Then uncomment out either the line mentioning MONGO_URI (if you're using MongoDB/Mongoose) **OR** the line mentioning PG_URI (if you're using PostgresQL/Sequelize). If your personal URI contains sensitive information (the password), feel free to replace `myURI` when you are ready to commit. We will not be testing your personal database, so we do not need to connect to it.

#### Item Model
In the `server/models/itemModel.js` file, implement a database in either MongoDB or PostgresQL (Mongoose/Sequelize optional) as described below:
- [ ] We want to store our data in a collection/table called `Item`. (Remember, this may be created as the plural `Items` - that is fine.)
- [ ] All items in the database must have a property `description`, which is a string, and `price`, which is a number.
- [ ] Additionally, all items have a property called `purchased`. This be a boolean that defaults to `false`.

#### Item controllers
In the `server/models/itemController.js` file, add the following functionality to the exported controller. (These will be server middleware/final handler functions, so they should take the appropriate parameters and perform the necessary callback operations.):
- [ ] Function `postItem` should create a new item in the database.
- [ ] Function `getItems` should retrieve all items from the database and send it back to the client as JSON.
- [ ] Function `updateItem` should find items in the database based on an ID number and changed their `purchased` property to `true`. (You will later be asked to authenticate before updating items.)
- [ ] Errors in any of the controllers (such as those related to querying or updating the database) should trigger a **global error handler** rather than proceeding to the next function in the middleware chain. If you have not already created a global error handler, add one to the `server.js` file. When invoked, it should return a relevant error message to the client, along with a status code of `500`.



## Client-side JavaScript/DOM Manipulation
You are serving `index.js` to the client for use on the `store` page, but there is not much existing functionality. Add code to achieve the following:

- [ ] After the page has loaded, all items from the database should be displayed as separate `<div>` elements in the `#item-list` element, each with a class of `item`. These items should display `paragraph` tags with the item's description and price, followed by a `button` (inside the div) with a class of `purchase`. As an example, one item might look like
```
<div class="item">
  <p>Sofa</p>
  <p>$500</p>
  <button class="purchase">Purchase this item</button>
</div>
```
- [ ] Clicking on the button to list a new item for sale should take the text from the input fields (description and price) and create a new item in the database. This new item should be displayed immediately after adding, at the top of the list.
- [ ] Clicking on any item's `purchase` button should update its `purchased` property to `true` in the database, and immediately remove it from the page.
- [ ] Any items in the database for which `purchased` is set to `true` should *not* be visible on the page.



## Server Routing
By now, your server should serve the static assets, the login page, and the store page. Add additional routes to achieve the following
functionality:
- [ ] If you have not already done so in conjunction with the tasks above, create the routes to tie the client-side JavaScript events to the appropriate database functions
- [ ] When the sign in form is submitted, it should redirect to the store page route. This should **not** be done with AJAX. (This route will be authenticated in a later step.)



## Authentication
Modify your code to enforce the following authentication measures. (Use the `server/controllers/authController.js` file to add any middleware functions):
- [ ] You will need to authenticate two sets of credentials: one for a seller, and one for a buyer. The seller account will have a username of `seller` and a password of `ilovejavascript`. The buyer account will have a username of `buyer` and a password of `ilovetypescript`. These should be the only sets of successful login credentials - any others (or none at all) should send the string `unsuccessful login attempt`.
- [ ] Providing the correct login credentials should set a cookie on the client with a key of `token` and a value of either `buyer` or `seller`, depending on which set was used.
- [ ] Visiting the `http://localhost:3333/store` route directly should now check for the valid cookie before sending the store page. If the cookie is not valid (or does not exist), send back the string `You must be signed in to view this page`
- [ ] Add functionality to ensure that only the seller account can post new items, and only the buyer account can purchase items. Whenever a user tries to post or update an item, the server should check if the `token` cookie has a value of `seller` or `buyer`, respectively, before allowing the operation to continue. If the cookie does not have this value, nothing should happen.
