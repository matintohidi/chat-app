FROM node:18-alpine

WORKDIR /chat-app-server
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000

CMD [ "npm" , "run" , "start" ]