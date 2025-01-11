# Aufgaben zu Docker

# Verwenden Sie das Node.js-Image in der Version 22.12.0 mit Alpine Linux als Basisimage
# Images sind auf https://hub.docker.com/ verfügbar

# 1. Wählen Sie das Node.js-Image in der Version 22.12.0-alpine
FROM node:22.12.0-alpine

# 2. Setzen Sie das Arbeitsverzeichnis im Container auf /app
WORKDIR /app

# 3. Kopieren Sie den Anwendungscode in das Arbeitsverzeichnis
COPY . .

# 4. Installieren Sie die Abhängigkeiten mit dem Befehl "npm install --legacy-peer-deps"
RUN npm install --legacy-peer-deps

# 5. Öffnen Sie Port 3000 für den Container
EXPOSE 3000

# 6. Bauen Sie die Anwendung mit dem Befehl "npm run build"
RUN npm run build

# 7. Starten Sie die Anwendung mit dem Befehl "npm start"
CMD ["npm", "start"]