# Sertux

## Intro

It is a social network to share the searches we do on Google, Bing etc...
We can share searches and comment on them.
We can see new searches in a queue and also in lists ordered by the tags: best, popular, new, top, rising
There is a part where moderators can block harmful or spam content. They can also block users and comments.

![](https://media.giphy.com/media/ymKIz3zBieFNK/giphy.gif?cid=790b7611e5bg2l5npew54ffh4dx5ems6dvz2hdsn21rrkl8q&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

- share searches
- comment searches
- list searches
- report harmful searches
- report users
- report comments

### UI Design with Figma

Search:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724906/sertuxBootcamp/searchAdvanced-2024-05-03_094257_w0fizy.png)


SearchesBy:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724908/sertuxBootcamp/searchesBy-2024-05-03_094532_tmjxo2.png)

Comentarios:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724903/sertuxBootcamp/comments-2024-05-03_094903_hipfdb.png)

Create Admin:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724903/sertuxBootcamp/createAdmin-2024-05-03_095402_uaomjj.png)

Create Moderator:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724905/sertuxBootcamp/createModerator-2024-05-03_095431_pho0s8.png)

BanBoardSearches:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724901/sertuxBootcamp/banBoardSearches-2024-05-03_094642_rhlmy2.png)

BanBoardComments:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724901/sertuxBootcamp/banBoardComments-2024-05-03_094820_avzb8v.png)

BanBoardUsers:

![](https://res.cloudinary.com/dgwllavpn/image/upload/v1714724901/sertuxBootcamp/banBoardUsers-2024-05-03_094736_zsl5b2.png)

## Technical Description

### Technologies

- JavaScript
- React
- Node
- Express
- Mongo

## Modules

- Api (server)
- App (client)

## Data Model

### Model of predefined database

Edition
- id (string, required)
- alias (string, required)
- name (string, required)
- languageNative (string, required)
- codeLanguage (string, required)
- countryNameNative (string, required)
- codeCountry (string, required)
- isActive (boolean, required)

Country
- id (string, required)
- code (string, required)
- nativeName (string, required)

Language
- id (string, required)
- code (string, required)
- languageNative (string, required)

MenuSearchTag
- id (string, required)
- name (string, required)
- editionAlias (string, required)
- searchType (string, required)
- index (number, required)

MenuSearchType
- id (string, required)
- searcherName (string, required)
- editionAlias (string, required)
- index (number, required)
- menuName (string, required)
- searchType (string, required)

SearchType
- id (string, required)
- name (string, required)

Searcher
- id (string, required)
- alias (string, required)
- displayName (string, required)
- searcherType (string, required)
- isActive (boolean, required)
- index (number, required)

SearcherUrls
- id (string, required)
- searcherAlias (string, required)
- editionAlias (string, required)
- searcherType (string, required)
- searchType (string, required)
- url (string, required)
- urlExample (string, required)

Tag
- id (string, required)
- name (string, required)
- editionAlias (string, required)
- description (string, required)

TagAgregatorUrl
- id (string, required)
- tagName (string, required)
- editionAlias (string, required)
- searchType (string, required)
- service (string, required)
- url (string, required)

## Model new on database

User
- id (string, required)
- username (string, required)
- email (string, required, unique)
- password (string, required)
- birthdate (date, required)
- edition (objectid, required)

Role (user, moderator, admin)
- id (string, required)
- name (string, required)


Search
- id (string, required)
- url (string, required)
- query (string, required)
- user (objectid, required)
- edition (objectid, required)
- tag (objectid, required)
- searcher (objectid, required) "google", "bing", "youtube", "x", "giphy",
- searchType (objectid, required) "web", "image", "video", "news", "maps", "socialGlobal", "person", "image/video", "gifs"
- isBanned (boolean)
- dateBanned (date)
- ownerBan (objectid)
- createdAt (Date, by default is added in all models)

SearchList
- id (string, required)
- search (objectid, required)
- listType (string, required) "best", "popular", "top", "rising", "new(goes into search, not necesary here)"
- edition (objectid, required)
- tag (objectid, required)
- searcher (objectid, required) "google", "bing", "youtube", "x", "giphy",
- searchType (objectid, required) "web", "image", "video", "news", "maps", "socialGlobal", "person", "image/video", "gifs"
- dateCreationList (Date, required)

