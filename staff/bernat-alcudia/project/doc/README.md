# Bonit@ Faller@

## Intro

A social application to share products with title.


In this application, products will be published and then sold until the stock runs out, informing the user that they are out of stock.

![](https://giphy.com/gifs/for91days-valencia-virgin-FlqAA0VU1VUaI)

## Functional Description

### Use cases

- product CRUD (seller)
- view products
- toggle like a product
- toggle save a product (buyer)

- chat crud between seller-buyer
- view user profile
- search user

- block a user
- follow a user
- edit profile 

### UI Design

| **Register** |
|--------------|
| Name         |
| Birthdate    |
| Username     |
| E-mail       |
| Password     |
| [Register]   |
| _Login_      |

| **Login**         |
|-------------------|
| E-mail            |
| Password          |
| [Login]           |
| _Forgot password_ |
| _Register_        |

| **Home**              |
|-----------------------|
| Logo Messages Profile |
| Product                  |
| Product                  |
| Product                 |
| Product                  |
| +                     |

## Technical Description

### Technologies

- HTML
- CSS
- JS
- Mongodb
- Express
- React Native

### Data Model

#### User
- id (auto)
- name (string,required)
- birthdate (Date,required)
- username (string,required)
- email (string,required)
- password (string,required)
- saved (array of Post.id)
- rol (seller | buyer)

#### Product
- id (auto)
- user (User.id,required)
- images (string[],required)
- tittle (string,required)
- description(string)
- brand(string,required)
- price(number,required)
- state(enum used | new, required)
- stock(number,required)
- date (Date)
- likes (array of User.id)

#### Message
-id (auto)
-from (user.id)
-to (user.id)
-text (string)

#### Chat
- id (string)
- userFrom (User.id)
- userTo (user.id)
- messages (message[])
- date (Date)

<!-- #### Methods
- createUser(id,name,birthdate,username,email,password,saved)
- createProduct(id,user,images,tittle,description,brand,price,state,stock,date,likes)
- editProduct(User.id,Product.id)
- setsStock(false)
- retrieveProducts()
- resetPassword() -->