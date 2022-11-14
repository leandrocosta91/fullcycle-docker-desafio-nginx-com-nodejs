FROM node:18-alpine

WORKDIR /var/www

COPY package.json .

RUN npm install -y

COPY . .

CMD [ "npm", "start" ]