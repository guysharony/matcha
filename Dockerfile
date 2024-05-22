FROM node:alpine

RUN npm install -g npm@latest

WORKDIR /app

RUN npm config set fund false

ENTRYPOINT ["tail", "-f", "/dev/null"]
