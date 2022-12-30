FROM node:16 AS build-env
WORKDIR /app
RUN ls && cd samadhiyogaidaho.client && npm run build
COPY ./package*.json ./
RUN npm install 
RUN ls
COPY ./ ./

ENV PORT=80
EXPOSE 80

CMD [ "npm", "start" ]
# hi