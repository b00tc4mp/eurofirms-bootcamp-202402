# FitFuel

![FitFuel](https://media.tenor.com/aD7y5Tg9BzwAAAAM/web-design-modern-web-gif.gif)

Welcome to FitFuel, your ultimate companion for achieving a healthier lifestyle. Our application is designed to simplify your fitness journey by providing tools for training, progress tracking, and easy access to workout routines and diet plans.

## Functional Description

### Use Cases

#### Trainee

- **Add Measures:** Record measurements such as height, arms, legs, etc., along with the date.
- **Filter Measures:** Filter measurements by date for easy tracking.
- **Delete Measure:** Remove unwanted measurements from your records.
- **Edit Measure:** Modify existing measurements as needed.

- **Filter Exercises:** Search and filter exercises by query.
- **View Exercise:** Access detailed information about specific exercises.

- **Filter Diets:** Search and filter diets by query.
- **View Diet:** Explore detailed information about different diet plans.
<!-- 
- **Follow Trainer:** Follow your preferred trainer for personalized guidance.
- **Unfollow Trainer:** Unfollow trainers when necessary. -->

#### Trainer

- **Filter Exercises:** Easily search and filter exercises.
- **View Exercise:** Access detailed information about each exercise.
- **Add Exercise:** Add new exercises to the database.
- **Edit Exercise:** Modify existing exercises as needed.
- **Delete Exercise:** Remove exercises from the database.

- **Filter Diets:** Search and filter diets.
- **View Diet:** Access detailed information about each diet plan.
- **Add Diet:** Add new diet plans to the database.
- **Edit Diet:** Modify existing diet plans as needed.
- **Delete Diet:** Remove diet plans from the database.

- **Filter Trainees:** Search and filter trainees.
- **Remove Trainee:** Remove trainees when necessary.
- **View Trainee (Measures):** Access measurements recorded by trainees.

### UI Design

Check out the UI design on [Figma](https://www.figma.com/design/krCU3FV6lX2u5QBdp7hon5/FUELFIT?node-id=0-1&t=hk0u2kq0cmTILBV8-0).


## Technical Description

### Technologies

- JavaScript
- React
- Node
- Express
- MongoDB
- Tailwind CSS
- Mongoose
- JSON Web Token
- React Charts

### Modules

- API (Server)
- APP (Client)

### Data Model

#### User
- id (auto-generated)
- name (string, required)
- surname (string, required)
- email (string, required)
- password (string, required)
- role (string, required, enum: trainee|trainer)
<!-- - following (array of User.id, optional) -->

#### Measurement
- id (auto-generated)
- user (User.id, required)
- date (date, required)
- weight (number, required)
- torso (number, required)
- legs (number, required)

#### Exercise
- id (auto-generated)
- title (string, required)
- description (string, required)
- image (string, optional)
- video (string, optional)

#### Diet
- id (auto-generated)
- title (string, required)
- description (string, required)
- image (string, optional)
- video (string, optional)

With FitFuel, achieving your fitness goals has never been easier. Start your journey today and transform your life with our comprehensive fitness platform!
