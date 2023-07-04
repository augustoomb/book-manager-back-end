FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# DUAS LINHAS ABAIXO SÃO NECESSÁRIAS, POIS O railway (DEPLOY) NÃO ACEITA DOCKER COMPOSE
COPY . .

RUN npm start

ARG EnvironmentVariable

