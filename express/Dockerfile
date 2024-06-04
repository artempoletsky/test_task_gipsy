# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=18.17.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app


################################################################################
# Create a stage for installing production dependecies.
FROM base as deps

COPY ./package.json .
COPY ./package-lock.json .

RUN --mount=type=cache,target=/root/.npm \
  npm i

FROM deps as final

ENV NODE_ENV production

# USER node
COPY . .

EXPOSE 3001

# Run the application.
CMD npx ts-node server.ts
