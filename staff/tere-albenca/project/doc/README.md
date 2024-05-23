# Alalluna


## Intro

Alalluna app allows you to teach and learn arts comfortably from your home, it also serves as a complement to a traditional arts academy. Interact, share, enjoy and learn art with us

![](./logo.png)

## Functional Description

Alalluna  app is a responsive application for studying arts, where teachers can share lessons and documentation about arts, look and correct their students' works. The students can share their works and learn basic concepts of drawing, painting, composition and other concepts. It also includes a group chat to ask questions and you can share the necessary links to the theory, documentation and links of interest. Finally this app includes a materials section so that students have within reach all the necessary tools for each exercise.

![](./logo2.jpg)

### Use Cases

#### For teacher

- view users works (list of teacher and student)
- publish work
- edit work (only title and description)
- delete work
- add comment to work
- delete comment from work
- edit comment from work

#### For students

- view users works (list of teacher and student)
- publish work
- edit work (only title and description)
- delete work
- view work
- view comments (from work)

### UI Design

Figma

https://www.figma.com/file/YyrvzJn83JTceVI1BzmkaF/Alalluna-projects?type=whiteboard&node-id=0-1&t=GGbOo1Tcr5NZLiHu-0

## Technical Description

### Technologies

- JavaScript
- React
- Node
- Express
- Mongo
- Tailwind
- JWT

## Modules

- API (server)
- App (client)
- Com (utils common)
- Doc (Readme)

### Data Model

User
- id (string, required)
- name (string, required)
- surname (string, required)
- email (string, required, unique)
- password (string, required)
- rol (string, required, enum: student|teacher)

Work (student)
- id (string, required)
- userId(string,required)
- title (string, required)
- image (string, required)
- description (string)
- date (date, required)

Version two: Lesson (teacher)
- id (string, required)
- userId(string,required)
- title (string, required)
- image (string, required)
- description (string, required)
- url(string, required)
- date (date, required)

Comment
- id (auto)
- teacher (User.id)
- work (Work.id)
- text (string, required)
- date (date, required)