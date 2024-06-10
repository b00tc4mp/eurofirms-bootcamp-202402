# Sertux

## Intro

It is a social network to share the searches we do on Google, Bing etc...
We can share searches and comment on them.
We can see new searches in a queue and also in lists ordered by the tags: best, popular, new, top, rising
There is a part where moderators can block harmful or spam content. They can also block users and comments.

![](https://media.giphy.com/media/ymKIz3zBieFNK/giphy.gif?cid=790b7611e5bg2l5npew54ffh4dx5ems6dvz2hdsn21rrkl8q&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional Description

### Use Cases

user

- share search
- comment search
- list searches
- vote searches
- vote comments
- report harmful search
- report user
- report comment
- report tag

moderator

- ban search
- ban user
- ban comment
- ban tag, but not category NoTagged

admin

- list users
- change role to user

### UI Design

[Figma](https://www.figma.com/design/4zRvqCcST4FT44aOK5cU9V/SertuxWeb?node-id=0%3A1&t=0EgxrWKmhd1HSG7N-1)


## Technical Description

### Technologies

- JavaScript
- React
- Node
- Express
- Mongo
- Tailwindcss
- Mongoose
- JSON Web Token

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
- code (string, required, unique)
- name (string, required)
- language (Language.id)
- country (Country.id)
- isActive (boolean, required)

Country

- id (auto)
- code (string, required, unique)
- nativeName (string, required)

Language

- id (auto)
- code (string, required, unique)
- languageNative (string, required)

MenuSearchTag

- id (auto)
- name (string, required)
- edition (Edition.id)
- searchType (SearchType.id)
- tag (Tag.id)
- index (number, required)

MenuSearchType

- id (auto)
- name (string, required)
- index (number, required)
- searchType (SearchType.id, required)
- searcher (Searcher.id)
- edition (Edition.id)

SearchType

- id (auto)
- name (string, required)

Searcher

- id (auto)
- name (string, required, unique)
- alias (string, required)
- displayName (string, required)
- isActive (boolean, required)
- index (number, required)
- searchTypes[] (SearchType.id)
- searcherType (SearcherType.id)

SearcherUrls

- id (auto)
- url (string, required)
- urlExample (string, required)
- searcher (Searcher.id)
- edition (Edition.id)
- searcherType (SearcherType.id)
- seachrType (SearchType.id)

Tag

- id (auto)
- name (string, required)
- description (string, required)
- isBanned (boolean)
- editionModel (Edition.id)

TagAgregatorUrl

- id (auto)
- service (string, required)
- url (string, required)
- tag (Tag.id)
- edition (Edition.id)
- searchType (SearchType.id)

## Model new on database

User

- id (auto)
- username (string, required)
- email (string, required, unique)
- password (string, required)
- birthdate (date, required)
- edition (Edtition.id, required)

Role

- id (auto)
- name (string required) -> 'user', 'admin', 'moderator'

Search

- id (auto)
- url (string, required)
- query (string, required)
- user (User.id, required)
- edition (Edition.id, required)
- tag (Tag.id, required)
- searcher (Searcher.id, required) "google", "bing", "youtube", "x", "giphy",
- searchType (SearchType.id, required) "web", "image", "video", "news", "maps", "socialGlobal", "person", "image-video", "gifs"
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
- searchType (SearchType.id, required) "web", "image", "video", "news", "maps", "socialGlobal", "person", "image-video", "gifs"
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
- isBanned (boolean)
- dateBanned (date)
- ownerBan (User.id)
- createdAt (Date, by default is added in all models)

VoteComment

- id (auto)
- comment (Comment.id, required)
- edition (Edition.id, required)
- tag (tag.id, required)
- searcher (Searcher.id, required)
- searchType (searchType.id, required)
- search (Search.id, required)
- user (User.id, required)
- isvoteUp (boolean, required)
- ip (string) - V2
- createdAt (Date, by default is added in all models)

VoteSearch

- id (auto)
- edition (Edition.id, required)
- tag (tag.id, required)
- searcher (tag.id, required)
- searchType (searchType.id, required)
- search (Search.id, required)
- user (User.id, required)
- isvoteUp (boolean, required)
- ip (string) - V2
- createdAt (Date, by default is added in all models)

ReportSearch

- id (auto)
- edition (Edition.id, required)
- search (Search.id, required)
- userOwnerReport (User.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)

ReportUser

- id (auto)
- edition (Edition.id, required)
- user (User.id, required)
- userOwnerReport (User.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)

-ReportTag

- id(auto)
- edition (Edition.id, required)
- tag (Tag.id, required)
- userOwnerReport (User.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)

ReportComment

- id (auto)
- edition (Edition.id, required)
- search (Search.id, required)
- comment (Comment.id, required)
- userOwnerReport (User.id, required)
- status (string, required, enum: "pending", "discarded", "accepted")
- createdAt (Date, by default is added in all models)
