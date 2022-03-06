FROM node:14.17-alpine

RUN apk update

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /app

COPY /backend/package*.json /app/

RUN npm i
CMD [ "npm", "run", "start:dev"]
