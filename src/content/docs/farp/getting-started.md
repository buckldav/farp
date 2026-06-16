---
title: FARP Stack - Getting Started
description: How to set up a modern web development stack with FastAPI, Alembic, React, and PostgreSQL.
---

*Prerequisites*: This guide assumes that the reader has a basic understanding of HTML and HTTP, including Forms and GET and POST request methods. For a refresher on those concepts, you may check [w3schools HTML](https://www.w3schools.com/html/default.asp) and [mdn HTTP Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods). Also, this guide has been used with students that already know a bit of another programming language (e.g. JavaScript or Java) so it might gloss over some of the minutia of how to program.

## What is the FARP Stack?

The FARP Stack is a modern web development stack with FastAPI, Alembic, React, and PostgreSQL. This guide will break down the process of composing a web application with these technologies through the following curriculum:

### Plan of Work

As you go along, you'll be making mini-projects that build up to something YOU want to make (with these technologies). The type of app that we'll be making are called **CRUD app**. CRUD stands for "Create, Read, Update, and Delete" which is the basic functionality for any application that contains persistent (long-term) data. Examples include creating your own Pokedex, to-do list, sports statistics tracker, anything that can store and manipulate data.

1. Learn FastAPI, SQLModel, and SQLite by creating an CRUD application.
2. Learn Docker and PostgreSQL. Containerize your FastAPI app and connect to PostgreSQL via a Docker network.
3. Learn Alembic to apply data migrations to your PostgreSQL database.
4. Learn React in isolation, including a package called React Admin for dashboards.
5. Connect React to your backend so your app has a dashboard.
6. Learn to add third-party authentication with Casdoor.

### Diagram

<img src="/farp.drawio.svg" alt="FARP Diagram" width="500">

## Set Up Your Environment

Make sure to install the following:

- [Git (including the Git Bash shell if on Windows)](https://git-scm.com/install/)
- [Python (3.10 or above, latest is recommended)](https://www.python.org/downloads/)
- [Node.js for JavaScript development (v22 or above)](https://nodejs.org/en/download)
- [PNPM for JavaScript package and environment management](https://pnpm.io/installation)
- [Docker Desktop](https://docs.docker.com/desktop/)
- [VSCode for your IDE](https://code.visualstudio.com/download)

I know that can seem like a lot. We won't use everything immediately, we'll work into it and explain why each tool is used when the time comes.

### Start with a Git repository

If you don't have a [GitHub account](https://github.com/signup) already, set one up. Git is used for version control (creating save points in your code) and GitHub is an example of git cloud storage that you can sync your code to. You can create a repository at [https://github.com/new" and then use 

At some point, I would recommend learning the at least following git terminal commands, but for brevity, I will skip them in this guide and show you the git operations via the VSCode integration.

- `add`, `commit`, `push`, `pull`, `checkout`, `merge`, `remote`
