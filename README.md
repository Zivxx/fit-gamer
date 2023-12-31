# Fit Gamer [![CircleCI](https://dl.circleci.com/status-badge/img/gh/wilkins88/fit-gamer/tree/main.svg?style=svg&circle-token=4ccd5a471bf344cd8e6e60df48e93d8d96f73c9a)](https://dl.circleci.com/status-badge/redirect/gh/wilkins88/fit-gamer/tree/main)

Health and Fitness application built by gamers for gamers. Read blogs, build diet and exercise plans, and connect with other likeminded people. Application currently deployed to
our [DEV environment](https://fit-gamer.onrender.com/)

## Getting Started with Development

This section documents recommended tooling for this project. Feel free to use whatever tooling best suits your development needs. It makes no assumption about skills or experience, so highlights everything that needs to be done to get started.

### Install Tools

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [VS Code](https://code.visualstudio.com/)
- [Hyper Terminal](https://hyper.is/)

### Tech Stack 

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Material UI](https://mui.com/material-ui/)
- [tRPC](https://trpc.io)
- [Jest](https://jestjs.io/docs/getting-started)
- [Playwright](https://playwright.dev/)
- [Trunk Based Development](https://trunkbaseddevelopment.com/)

### Initializing Local Development Environment

For convenience, a single script has been provided for initializing your local development environment. This is currently idempotent, so as
new features are added to the toolchain, re-running this script should have no negative consequences. If that changes, this documentation will
be updated to reflect that.

To initialize your local dev environment simply open a terminal and execute

```bash
npm run tooling:init
```

### Starting Local Dev 

To start local dev, execute the following npm command:

```bash
npm run dev
```

This will start a development app on localhost:3000, wait for that app to boostrap, and then also start the Prisma db explorer. 
A new tab should be opened in your window for both of these applications. Note that you can also execute each action individually via
```bash
npm run dev:start
```

and 

```bash
npm run db:explorer
```

### Working on Features

Working on features or bugs typically follows a fairly simple flow:

1. Checkout trunk (main)
2. Pull most recent changes from remote
3. Checkout feature
4. Do work
5. Push to remote branch and open pull request
6. Iterate on feedback/fixes
7. Upon approval, squash and merge

Branch naming generally falls into one of two buckets:

- {bug | feature | chore}/{short description}

For example, feature/setup-react-router

The Issues # should also be referenced in the commit. For example:

```
Fixes #9999, adds super awesome feature
```
