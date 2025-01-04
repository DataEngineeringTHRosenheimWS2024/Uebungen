# Verwenden Sie das Node.js-Image in der Version 22.12.0 mit Alpine Linux als Basisimage
# Images sind auf https://hub.docker.com/ verfügbar
FROM node:22.12.0-alpine

# Setzen Sie das Arbeitsverzeichnis im Container auf /app
WORKDIR /app

# Kopieren Sie den Rest des Anwendungscodes in das Arbeitsverzeichnis
COPY . .

# Installieren Sie die Abhängigkeiten, wobei legacy-peer-deps verwendet wird
RUN npm install --legacy-peer-deps

# Öffnen Sie Port 3000 für den Container
EXPOSE 3000

# Bauen Sie die Anwendung
RUN npm run build

# Starten Sie die Anwendung
CMD ["npm", "start"]