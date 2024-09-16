# T-shirt e-commerce

# Intro

You can shop several football T-shirts , the web will have a home , login , register and checkout pages. To buy , the client will had to register and them login. Once the user has an account he can put several T-shirts in the shopping cart.
When the user is ready to buy , the checkout page will shown the sum of the prices of the T-shirt and the options to pay
and to delivery.

## Use Cases

- filter products (by price, by team)
- add product to cart
- remove product from cart
- view cart
- checkout cart

## UI Design

TODO Figma

## Technologies

- Javascript
- React
- Node
- Express
- Mongo

## Modules

- API (server)
- APP (client)
- COM (shared files)

## Data Model

User

- id (auto)
- name (string , required)
- email (string, required)
- password (string, required)
- address (string, required)
- country (string, required)

Product

- id (auto)
- brand (string, required)
- model (string, required)
- type (string, required, enum: t-shirt|polo)
- color (string, required)
- price (number, required)
- size (string, required, enum: xs|s|m|l|xl|2xl|3xl)

Order

- id (auto)
- user (User.id, required)
- products (array of Product.id, required)
- paymentMethod (string, required, enum: card|paypal|crypto)
- deliveryCompany (string, required, enum: seur|dhl|correos)
- status (string, required, enum: open|closed)
- date (date, optional)
