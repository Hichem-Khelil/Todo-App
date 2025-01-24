# Construire l'application avec Node.js
FROM node:16 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Construire l'application
RUN npm run build

# Servir le frontend avec Nginx
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port de Nginx
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
