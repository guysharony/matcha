FROM node:alpine

COPY start.sh .

RUN npm config set fund false \
	&& npm install npm@latest -g \
	&& npm update -g

WORKDIR /app

ENTRYPOINT ["sh", "/start.sh"]
