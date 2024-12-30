FROM node:20.10.0-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

# Set environment variable to listen on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

RUN npm run build

CMD ["npm", "start"]

