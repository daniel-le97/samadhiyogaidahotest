FROM node:16 AS build-env

WORKDIR /app
# replace with your projects name
COPY ./example/package*.json ./
RUN npm install  && npm audit fix
RUN ls
COPY ./example ./


ENV PORT=80
EXPOSE 80


CMD [ "npm", "start" ]