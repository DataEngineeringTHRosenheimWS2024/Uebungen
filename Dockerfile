FROM node:22.12.0-alpine3.20
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Set environment variable to listen on all interfaces
ENV HOST=0.0.0.0
ENV PORT=3000

RUN npm run build

CMD ["npm", "start"]

