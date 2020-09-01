# 4ist.net

This site will serve as my personal development site. The purpose is for me to be able to share my projects in one place, as GitHub can be intimidating for inexperienced and/or non-technical folks.

Currently there is a "summary list" page (which was intended to be a list of project summaries), but the current implementation looks more like a dev blog so I'll convert it into that.

---

## Site Feature Goals
- ViewProject page - A page to show an overview/writeup for a project 
  - One page in code that populates a writeup for any project based on data pulled from the DB. Would markdown be the easiest format to implement?
- Projects page - A page that lists all relevant projects, perhaps a screenshot for each

## Other Goals
- Add detail/summary/blog entries to database (mongo) such that the site contents can be updated without code changes. The current stubs are in a stubbed datareader service. This will require the implementation of a Node.js backend API.

