FROM node:16 as builder

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --mutex file:/usr/local/share/.cache/yarn/.yarn-mutex

COPY . ./
CMD yarn dev