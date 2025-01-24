# Utiliser une image Node.js
FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# ÉExposer le port sur lequel le backend écoute
EXPOSE 3001

# Commande pour démarrer le serveur
CMD ["npm", "start"]
