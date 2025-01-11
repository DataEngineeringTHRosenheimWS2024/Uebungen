# Docker und Kubernetes Next.js Blog
## Aufgaben zu Docker und Kubernetes

Dieses Projekt dient dazu, Docker und Kubernetes vorzustellen. Im Repository befindet sich ein Node-Server mit einem Next.js-Blog über Kubernetes und Docker.

## Voraussetzungen

   - Docker Desktop muss installiert sein: [Docker Installation](https://docs.docker.com/get-docker/)

## Aufgabenstellung

### Docker

1. **Repository klonen**: Klone das Repository auf deinen Computer.

   ```bash
   git clone https://github.com/iamhagen/docker-demo-data-engineering.git
   cd docker-demo-data-engineering
   ```

2. **Docker-Kommandos implementieren**: Implementiere die in den Kommentaren beschriebenen Docker-Kommandos im [Dockerfile](Dockerfile).

   Wenn Sie nicht weiterkommen, finden Sie die Lösung in [solutions/docker/Dockerfile](solutions/docker/Dockerfile).

3. **Docker-Image erstellen**: Erstelle ein Docker-Image für den Blog.

   ```bash
   docker build -t docker-demo-data-engineering .
   ```

4. **Docker-Container erstellen**: Erstelle einen Docker-Container und leite den Port 3000 weiter.

   ```bash
   docker run -p 3000:3000 docker-demo-data-engineering
   ```

5. **Blog öffnen**: Öffne den Blog auf deinem Rechner unter [http://localhost:3000](http://localhost:3000).



### Kubernetes

**Kubernetes Cluster mit Docker**: Führe den Blog als Kubernetes-Cluster auf deinem Computer aus.

   - Starte Docker Desktop und aktiviere Kubernetes in den Einstellungen.
   - Erstelle ein Kubernetes-Deployment für den Blog. Die Datei befindet sich unter `solutions/kubernetes/deployment.yaml`.
   - Erstelle das Deployment:
     ```bash
     kubectl apply -f solutions/kubernetes/deployment.yaml
     ```
   - Erstelle einen Service, um den Blog zugänglich zu machen. Die Datei befindet sich unter `solutions/kubernetes/service.yaml`.
   - Erstelle den Service:
     ```bash
     kubectl apply -f solutions/kubernetes/service.yaml
     ```
   - Öffne den Blog im Browser:
     ```bash
     kubectl port-forward service/blog-service 3000:3000
     ```

## Hinweise

Dieses Projekt verwendet [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
