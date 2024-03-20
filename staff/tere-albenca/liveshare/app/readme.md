# LIVESHARE

A social application to share content.

## Functional description

### Functionalities
- Add a post (various: image,text,geo)
- view post
- View user profile(her o his post)
- Search user in
- Edit profile
- Send a message ( to another user)
- View messages (recieveded and sendt)
- Comment a post 
- Toggle like a post
- Toggle save a post
- Follow a user
- Block a user
- Edit a post(text, design, geo...)
- delete post
- Change profile visibility( private/public)

### UIDesign

- Register ( Name, Lastname, Birthdate, Username, Email and Password) <a>Login
- Login ( Username and Password) <a>Reset Password <a>Register 
- Home (Logo messages profile, posts) <button> Logout

### Technical description

### Technologies

- html
- css
- javascript

### Data Model

### User

- id (string)
- name (string)
- lastname (date)
- birthdate (string)
- username (string)
- email (string)
- password (password)
- saved (array of post.id)

### Post
- id (string)
- user (user.id)
- image (string)
- text (string)
- date (date)
- likes (array of user.id)

### Comment

- id (string)
- post (post.id)
- user (user.id)
- text (string)
- date (date)
