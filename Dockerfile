FROM node:18-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json ./pnpm-lock.yaml /app/
RUN npm i -g pnpm

RUN pnpm i && pnpm prune

COPY . .




