FROM node:8.9
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
