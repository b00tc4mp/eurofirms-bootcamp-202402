# Sertux

## Intro

It is a social network to share the searches we do on Google, Bing etc...
We can share searches and comment on them.
We can see new searches in a queue and also in lists ordered by the tags: best, popular, new, top, rising
There is a part where moderators can block harmful or spam content. They can also block users and comments.

![](https://media.giphy.com/media/ymKIz3zBieFNK/giphy.gif?cid=790b7611e5bg2l5npew54ffh4dx5ems6dvz2hdsn21rrkl8q&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

regular
- share search
- comment search
- list searches
- report harmful search
- report user
- report comment

moderator
- ban search
- ban user
- ban comment

root
- list users
- change role to user

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

### Model of predefined database from JSON files

Edition
- id (auto)
- alias (string, required)
- name (string, required)
- languageNative (string, required)
- codeLanguage (string, required)
- countryNameNative (string, required)
- codeCountry (string, required)
- isActive (boolean, required)

Country
- id (auto)
- code (string, required)
- nativeName (string, required)

Language
- id (auto)
- code (string, required)
- languageNative (string, required)

MenuSearchTag
- id (auto)
- name (string, required)
- tagName (string, required)
- editionAlias (string, required)
- searchType (string, required)
- index (number, required)

MenuSearchType
- id (auto)
- searcherName (string, required)
- editionAlias (string, required)
- index (number, required)
- menuName (string, required)
- searchType (string, required) Enumerable

SearchType
- id (auto)
- name (string, required)

Searcher
- id (auto)
- name
- alias (string, required)
- displayName (string, required)
- searcherType (string, required)
- isActive (boolean, required)
- index (number, required)

SearcherUrls
- id (auto)
- searcherAlias (string, required)
- searcher (string, required)
- editionAlias (string, required)
- searcherType (string, required)
- searchType (string, required)
- url (string, required)
- urlExample (string, required)

Tag
- id (auto)
- name (string, required)
- editionAlias (string, required)
- description (string, required)

TagAgregatorUrl
- id (auto)
- tagName (string, required)
- editionAlias (string, required)
- searchType (string, required)
- service (string, required)
- url (string, required)

### Model from JSON to entities

Edition
- id (auto)
- alias (string, required)
- name (string, required)
- languageNative (string, required)
- codeLanguage (string, required)
- countryNameNative (string, required)
- codeCountry (string, required)
- languageModel (Language.id)
- countryModel (Country.id)
- isActive (boolean, required)

Country
- id (auto)
- code (string, required)
- nativeName (string, required)

Language
- id (auto)
- code (string, required)
- languageNative (string, required)

MenuSearchTag
- id (auto)
- name (string, required)
- tagName (string, required)
- editionAlias (string, required)
- searchType (string, required)
- editionModel (Edition.id)
- searchTypeModel (SearchType.id)
- tagModel (Tag.id)
- index (number, required)

MenuSearchType
- id (auto)
- searcherName (string, required)
- editionAlias (string, required)
- index (number, required)
- menuName (string, required)
- searchType (string, required) Enumerable
- searcherModel (Searcher.id)
- editionModel (Edition.id)
- searchTypeModel (SearchType.id)

SearchType
- id (auto)
- name (string, required)

Searcher
- id (auto)
- name
- alias (string, required)
- displayName (string, required)
- searcherType (string, required)
- isActive (boolean, required)
- index (number, required)
- searcherTypeModel (SearcherType.id)

SearcherUrls
- id (auto)
- searcherAlias (string, required)
- searcher (string, required)
- editionAlias (string, required)
- searcherType (string, required)
- searchType (string, required)
- url (string, required)
- urlExample (string, required)
- searcherModel (Searcher.id)
- editionModel (Edition.id)
- searcherTypeModel (SearcherType.id)
- seachrTypeModel (SearchType.id)

Tag
- id (auto)
- name (string, required)
- editionAlias (string, required)
- description (string, required)
- editionModel (Edition.id)

TagAgregatorUrl
- id (auto)
- tagName (string, required)
- editionAlias (string, required)
- searchType (string, required)
- service (string, required)
- url (string, required)
- tagModel (Tag.id)
- editionModel (Edition.id)
- searchTypeModel (SearchType.id)

## Model new on database

User
- id (auto)
- username (string, required)
- email (string, required, unique)
- password (string, required)
- birthdate (date, required)
- edition (Edtition.id, required)
- role (string, enumerable: "regular", "moderator", "root")


Search
- id (auto)
- url (string, required)
- query (string, required)
- user (User.id, required)
- edition (Edition.id, required)
- tag (Tag.id, required)
- searcher (Searcher.id, required) "google", "bing", "youtube", "x", "giphy",
- searchType (SearchType.id, required) "web", "image", "video", "news", "maps", "socialGlobal", "person", "image/video", "gifs"
- isBanned (boolean)
- dateBanned (date)
- ownerBan (User.id)
- createdAt (Date, by default is added in all models)

Analysis V2
- id (auto)
- edition (Edition.id, required)
- listType (string, enum: "best", "popular", "top", "rising")
- tag (Tag.id, required)
- searcher (Searcher.id, required) "google", "bing", "youtube", "x", "giphy",
- searchType (SearchType.id, required) "web", "image", "video", "news", "maps", "socialGlobal", "person", "image/video", "gifs"
- counterSearchesAdded (number, required)
- startDate (Date)
- endDate (Date)

SearchList V2
- id (auto)
- analysis (Analysis.id, required)
- search (Search.id, required)
- dateCreationList (Date, required)

Comment
- id (auto)
- search (Search.id, required)
- user (User.id, required)
- text (string, required)
- createdAt (Date, by default is added in all models)

ReportedSearch
- id (auto)
- edition (Edition.id, required)
- search (Search.id, required)
- user (User.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)

ReportedUser
- id (auto)
- edition (Edition.id, required)
- user (User.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)

ReportedComment
- id (auto)
- edition (Edition.id, required)
- comment (Comment.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)