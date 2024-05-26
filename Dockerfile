FROM node:alpine

RUN npm install npm@latest -g \
	&& npm update -g \
	&& npm config set fund false

WORKDIR /app

ENTRYPOINT ["tail", "-f", "/dev/null"]
