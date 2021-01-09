FROM node:13 AS builder
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["yarn","run-radio-v2"]
