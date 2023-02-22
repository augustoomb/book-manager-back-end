FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# OS PASSOS ABAIXO NÃO NECESSÁRIOS PARA USAR LOCALMENTE,
# MAS SÃO NECESSÁRIOS PARA DEPLOY NO railway 
COPY . .

RUN npm start

ARG EnvironmentVariable
