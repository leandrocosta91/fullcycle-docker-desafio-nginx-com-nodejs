FROM node:18-alpine

WORKDIR /var/www

COPY . .

RUN pwd

RUN npm init -y

RUN npm install express --save && \
    npm install body-parser --save

CMD [ "node", "src/server.js" ]