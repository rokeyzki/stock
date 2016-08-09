FROM node:4.2.2
MAINTAINER Charles Lim <hi@oulve.com>
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN ../node_modules/.bin/webpack

EXPOSE 80

ENTRYPOINT node serve.js