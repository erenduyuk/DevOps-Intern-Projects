FROM node:lts-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install express ejs

COPY . .

CMD ["node", "app.js"]