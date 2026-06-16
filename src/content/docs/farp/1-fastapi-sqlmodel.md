---
title: FARP Stack - 1. FastAPI and SQLModel
description: How to create a CRUD app with a SQLite database.
---

Example project: [https://github.com/buckldav/web/tree/main/farp/step1](https://github.com/buckldav/web/tree/main/farp/step1)

## Introduction

Any significant enterprise software application uses several languages and technologies because each language has a job that they are optimal for. For example, a woodworking project would utilize different saws, hammers, drills, and other tools. In our application, here are descriptions of each technology and their role as tools in your ecosystem.

- FastAPI: A Python backend API framework for enabling access to logic and data on a web server.
- React: A frontend JavaScript framework for writing dynamic applications.
- PostgreSQL: A database management server that allows secure access to data.
- Alembic: A Python database migration tool that syncs your application models to your database schema.

We will start with the database and FastAPI app on the backend.

## Backend Setup

For each step in this guide, I recommend having a new directory. Run this in your bash terminal in your empty git repository.

```bash
# add gitignore
npx gitignore python
# create directories step1-step6
python -c "import os; [os.mkdir(os.getcwd() + f'/step{i}') for i in range(1,7)]"
```

In the base directory of your project, [create a Python virtual environment](https://sqlmodel.tiangolo.com/virtual-environments/#check-the-virtual-environment-is-active). This will allow you to install the Python package requirements scoped for your project, without having to install them globally on the whole computer, which can cause problems if you have multiple projects.

```bash
# windows
source .venv/Scripts/activate
# mac, linux
source .venv/bin/activate
```

With the virtual environment active, you can continue all development for this part of the guide (FastAPI and SQLModel) in the `step1` directory.

```bash
# change directory to step1
cd step1
```

## SQLModel

### What is SQL?

SQL stands for "Structured Query Language" and is the most popular database language. It allows developers to create tables (like spreadsheets), relate tables to one another (e.g. students have classes in a school database), and operate on this data (e.g. add a new student, query their address, etc.).

### What is SQLModel?

SQLModel allows a developer to easily have their Python application interface with a SQL database by mapping database records to Python objects.

Go through the [full user guide of SQLModel](https://sqlmodel.tiangolo.com/tutorial/). Make sure you understanding the following:
- Create a Table
- INSERT, SELECT, WHERE, LIMIT and OFFSET, UPDATE, DELETE
- JOIN and Relationships
    - Foreign Keys
    - One to many, many to one, many to many
- Indexes

## FastAPI with SQLModel

Visit [https://sqlmodel.tiangolo.com/tutorial/fastapi/](https://sqlmodel.tiangolo.com/tutorial/fastapi/) and follow their simple hero API. An API (Application Programming Interface) is a way to assign operations for a client to interact with application logic on a server. FastAPI is a REST (Representational State Transfer) API framework, which is the most common web API format. It uses HTTP methods like GET and POST on endpoints like `/users` to Create, Read, Update, and Delete resource data (in this case, users).

For whatever resource you are managing (e.g. Pokemon, see [https://pokeapi.co/](https://pokeapi.co/) for an example Pokemon API), you'll have the endpoint (the end part of the URL) be named after the resource. In the tutorial, they use `/heroes`, but perhaps you would use `/pokemon` instead. Adjust it for your project.

## Assessment

Did you create a FastAPI application that allows you to create, read, update, and delete database records from your SQLite database? If so, move on.
