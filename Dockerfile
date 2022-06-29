FROM node:18-alpine

WORKDIR /usr/home/app

COPY package*.json ./

USER node

COPY . .

CMD ["sh", "-c", "npm install --force && npm run dev"]

