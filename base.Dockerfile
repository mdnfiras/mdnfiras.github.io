FROM node:14 as node

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
