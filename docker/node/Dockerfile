# 一旦不使用
FROM node:12-alpine

WORKDIR /var/www

COPY ./src ./

RUN yarn install

EXPOSE 8080
CMD [ "node", "server.js" ]
