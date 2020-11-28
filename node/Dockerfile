FROM node:14-alpine

WORKDIR /var/www

COPY ./src/package.json .
COPY ./src/yarn.lock .

RUN yarn install

COPY ./src .
