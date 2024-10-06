# Base image
FROM node:20.17.0-alpine

# Create app directory
WORKDIR /usr/src/app


COPY ./package.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD [ "yarn", "start:prod" ]
