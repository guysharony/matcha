FROM node:alpine

RUN npm install -g npm@latest

USER node
WORKDIR /app

RUN npm config set fund false

ENTRYPOINT ["tail", "-f", "/dev/null"]
