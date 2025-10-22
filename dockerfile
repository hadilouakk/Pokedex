# -------- DEVELOPMENT --------
FROM node:20 AS development
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]


# -------- PRODUCTION --------
FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
