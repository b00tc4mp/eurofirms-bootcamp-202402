# Pepito App

## Intro

blah blah ...

![](https://media.giphy.com/media/l0IyhjkozSEjMPBXq/giphy.gif?cid=ecf05e47hbea8uizspfe2h405xb7c7tb4j6py88nips4za6r&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- search bikes
- book bikes
- list book history
- report an issue
- add review

### UI Design

TODO Figma

## Technical Description

### Technologies

- JavaScript
- React
- Node
- Express
- Mongo

## Modules

- API (server)
- App (client)

### Data Model

User
- id (string, required)
- name (string, required)
- email (string, required)
- username (string, required)
- password (string, required)

Bike
- id (string, required)
- brand (string, required)
- model (string, required)
- type (string, required, enum: urban|mountain|beach)
- color (string, optional)
- reserved (boolean, required)

Booking
- id (string, required)
- user (User.id)
- bike (Bike.id)
- from (date, required)
- to (date, required)

Issue
- id (string, required)
- user (User.id)
- bike (Bike.id)
- subject (string, required)
- body (string, optional)
- date (date, required)
- status (string, required, enum: open|closed)

Review
- id (string, required)
- user (User.id)
- bike (Bike.id)
- subject (string, required)
- body (string, optional)
- rate (number, required, enum: 1|2|3|4|5)

