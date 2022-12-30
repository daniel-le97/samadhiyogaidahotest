FROM node:16 AS build-env
WORKDIR /app
RUN cd /samadhiyogaidaho.client && npm run build && cd..
RUN cd /samadhiyogaidaho
COPY ./package*.json ./
RUN npm install 
RUN ls
COPY ./ ./

ENV PORT=80
EXPOSE 80

CMD [ "npm", "start" ]