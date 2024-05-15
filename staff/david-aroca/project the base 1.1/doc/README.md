# FitFuel

![](https://media.tenor.com/aD7y5Tg9BzwAAAAM/web-design-modern-web-gif.gif)


A application to make easyer thing at time to training,track your procces,and have fast access to your trainings and diets.

## Functional Description

### Use Cases

trainee

- add measures (height, arms, legs, ... date)
- filter measures (by date)
- delete measure
- edit measure

- filter exercises (by query)
- view exercise

- filter diets (by query)
- view diet

- follow trainer
- unfollow trainer

trainer

- filter exercises
- view exercise
- add exercise
- edit exercise
- delete exercise

- filter diets
- view diet
- add diet
- edit diet
- delete diet

- filter trainees
- follow trainee
- unfollow trainee
- view trainee (measures)

### UI Design


## Technical Description

### Technologies

- React
- Tailwind
- JavaScritpt
- Moongose
- Express


### Modules

- API (server)
- APP (client)

### Data Model

User
- id (auto)
- name (string, required)
- surname (string, required)
- email (string, required)
- password (string, required)
- role (string, required, enum: trainee|trainer)
- following (array of User.id, optional)

Exercise
- id (auto)
- title (string, required)
- description (string, required)
- image (string, optional)
- video (string, optional)

Diet
- id (auto)
- title (string, required)
- description (string, required)
- image (string, optional)
- video (string, optional)


