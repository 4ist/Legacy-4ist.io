# 4ist.io

[4ist.io](https://4ist.io)

This site will serve as my personal development site. The purpose is to serve as a digital profile and share my projects in one place.

The following components make up this project:
- Front-end: Angular
  - Splash page - A personal overview.
  - Dev Blogs - Logged entries to track my side development work.
  - Self-hosted on my VPS.
- Back-end: NodeJS
  - Exposes an API that makes database requests.
  - Written in typescript.
  - Self-hosted on my VPS.
- Database: MongoDB
  - Data storage. Currently development blogs are being stored here so the entries can be dynamically populated without code changes.
  - Hosted in the MongoDB Atlas cloud database.

The front and back ends are currently in separate repositories, they will be merged in the near future.

## Feature Goals
- Authentication 
- Control of my self-hosted services
- Admin page - Site management controls that don't require code changes, ex: adding a dev blog.
  - This will require the implementation of an authentication protocol or framework, as only I should be able to make site changes.
- Projects pages - Similar to dev blogs, I would like to list the projects I work on in one place. This feature is lower priority thatn the admin page.

