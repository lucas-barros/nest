FROM node:alpine
LABEL maintainer="Lucas Araujo"

USER node

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . /home/node/app
RUN yarn

EXPOSE 3000
