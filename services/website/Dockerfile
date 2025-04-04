FROM node:22-alpine as builder
WORKDIR /app
COPY . /app

RUN yarn install && yarn cache clean
