FROM node:16 AS build-env

WORKDIR /app
# replace with your projects name
COPY ./samadhiyogaidaho/package*.json ./
RUN npm install  && npm audit fix
RUN ls
COPY ./samadhiyogaidaho ./

ENV PORT=80
EXPOSE 80

CMD [ "npm", "start" ]