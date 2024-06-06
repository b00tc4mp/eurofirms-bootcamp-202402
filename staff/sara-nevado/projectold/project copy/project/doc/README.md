# Martial Arts: Boxeo, MMA y BJJ

## Intro

introduction to the world or martial arts through multimedia content an documentation of interest

![](https://i.gifer.com/origin/bd/bd03512b7f1cedd1000266d849a61530_w200.gif)

## functional Description

### Use Cases

trainee
- view calendar (by month, next, previous)
- reserve training (by date and time, click on box)
- view event  (by date and time, click on box)
- subscribe to event
- unsubscribe from event

trainer
- view calendar (by month, next, previous)
- view training reservation (trainee, ...)
- cancel training reservation
- add event (by date and time, click on box)
- cancel event (by date and time, click on box)

### UI design

TODO: figma

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
- id (auto)
- name (string, required)
- surname (string, required)
- email (string, required)
- password (string, required)
- role (string, required, enum: trainee|trainer)

Event
- id (auto)
- type (string, enum: event|training)
- title (string, required)
- description (string, optional)
- date (date, required)
- duration (number, enum: 1|2|3, default: 1)
- address (string, optional)
- subscribers (array of User.id, optional)
- status (string, enum: active|cancelled)






