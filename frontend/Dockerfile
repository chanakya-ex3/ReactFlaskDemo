FROM node:latest

WORKDIR /app/frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT [ "npm","run","dev" ]