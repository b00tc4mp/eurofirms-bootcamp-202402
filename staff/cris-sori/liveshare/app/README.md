# LiveShare

A social application to share images with text.

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3RobG5lbW40cTRiYThqY2ZobWRpd3V1Nm5rZHRxbDNjdzZ5M2tjYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DkilfaIfvUockwnVVH/giphy.gif)

## Functional Description

### Functionalities

- add a post (image, text, geo, ...)
- view posts (from other users)
- view user profile (posts)
- search user
- edit profile (image, bio, ...)
- send message (to another user)
- view messages (received and send)
- comment a post
- toggle like a post
- toggle save a post
- follow a user
- block a user
- edit a post (text, geo, ...)
- delete a post
- change profile visibility (private / public)

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
| Post                  |
| Post                  |
| Post                  |
| Post                  |
| +                     |

## Technical Description

### Technologies

- HTML
- CSS
- JS

### Data Model

#### User
- id (string)
- name (string)
- birthdate (Date)
- username (string)
- email (string)
- password (string)
- saved (array of Post.id)

#### Post
- id (string)
- user (User.id)
- image (string)
- text (string)
- date (Date)
- likes (array of User.id)

#### Comment
- id (string)
- post (Post.id)
- user (User.id)
- text (string)
- date (Date)