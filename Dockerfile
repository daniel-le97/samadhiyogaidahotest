FROM node:19.0.0-alpine3.16 AS build-env
WORKDIR /app/samadhiyogaidaho.client
RUN npm install && npm run build
WORKDIR /app/samadhiyogaidaho
ENV NODE_ENV=production
COPY ./package*.json ./
RUN npm install 
RUN ls
COPY ./ ./
ENV PORT=80
EXPOSE 80
CMD [ "npm", "start" ]