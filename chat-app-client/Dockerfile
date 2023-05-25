FROM node:18-alpine

WORKDIR /chat-app-client
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000

CMD [ "npm" , "start" ]