FROM node:16 AS build-env
WORKDIR /samadhiyogaidaho.client
RUN npm run build
WORKDIR /app
COPY ./package*.json ./
RUN npm install 
RUN ls
COPY ./ ./

ENV PORT=80
EXPOSE 80

CMD [ "npm", "start" ]
# hi