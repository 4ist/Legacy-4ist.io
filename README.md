# 4ist.net

[4ist.net](https://4ist.net)

This site will serve as my personal development site. The purpose is for me to be able to share my projects in one place, as GitHub can be intimidating for inexperienced and/or non-technical folks.

The following components make up this project:
- Front-end: Angular
  - Splash page - A personal overview.
  - Dev Blogs - Logged entries to track my side development work.
- Back-end: NodeJS
  - Exposes an API that makes database requests.
  - Written in typescript.
- Database: MongoDB
  - Data storage. Currently development blogs are being stored here so the entries can be dynamically populated without code changes.

The front and back ends are being hosted on my virtual private server, and the database in the MongoDB Atlas cloud database.

The front and back ends are currently in separate repositories, they will be merged in the near future.

## Feature Goals
- Admin page - Site management controls that don't require code changes, ex: adding a dev blog.
  - This will require the implementation of an authentication protocol or framework, as only I should be able to make site changes.

- Projects pages - Similar to dev blogs, I would like to list the projects I work on in one place. This feature is lower priority thatn the admin page.

