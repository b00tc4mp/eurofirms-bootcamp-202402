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

Version 0.1
- chat crud between seller-buyer
- view user profile
- search user

- block a user
- follow a user
- edit profile 

### UI Design

[figma](https://www.figma.com/design/Q4iQvRbLMlkkjz43Y7gMCo/Bonita-Fallera?node-id=1-3&t=ikXahD24AbVbfBka-1)

## Technical Description

### Technologies

- HTML
- CSS
- JS
- Mongodb
- Express
- Jason Web Token
- React Native

### Data Model

#### User
- id (auto)
- name (string,required)
- birthdate (Date,required)
- username (string,required)
- email (string,required)
- password (string,required)
- role (seller | buyer)
- saved (array of Post.id)

#### Product
- id (auto)
- user (User.id,required)
- images (string[],required)
- title (string,required)
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
