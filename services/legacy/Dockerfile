FROM node:16 as builder
WORKDIR /app

COPY package.json yarn.lock .env ./
COPY public/  ./public/
COPY src/  ./src/

ENV NODE_ENV=development
ENV PORT=3000
ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000
CMD yarn install --mutex file:/usr/local/share/.cache/yarn/.yarn-mutex && yarn start