# Projet MERN Stack - Todo App

Ce projet est une application **Todo-App** basée sur la stack **MERN** (MongoDB, Express, React, Node.js) avec une forte intégration des pratiques **DevOps**. L'accent est mis sur l'automatisation des processus CI/CD, la conteneurisation avec Docker, et le déploiement sur Kubernetes.

---

## 📂 Structure du Projet

Le projet se compose des éléments suivants :
1. **Backend (Node.js)** : Fournit les API pour gérer les tâches.
2. **Frontend (React)** : L'interface utilisateur pour l'application.
3. **DevOps** :
   - Pipelines CI/CD configurées avec **GitHub Actions**.
   - Conteneurisation avec Docker.
   - Déploiement sur Kubernetes (Minikube).

### Répertoires
- `./Server` : Code du backend.
- `./todo-app` : Code du frontend.
- `./kubernetes` : Fichiers de configuration Kubernetes (`Deployment` et `Service`).
- `README.md` : Documentation complète.

---

## 🚀 Fonctionnalités DevOps

### 1. **Conteneurisation avec Docker**

Les applications frontend et backend sont conteneurisées pour garantir la portabilité et la cohérence entre les environnements. Voici les commandes Docker utilisées dans le pipeline :
- **Backend** :
  docker build -t todo-backend .

- **Frontend** :
  docker build -t todo-frontend .

### 2. **Déploiement sur Kubernetes**
Le projet utilise Kubernetes pour orchestrer les conteneurs :

  - Les fichiers YAML dans le dossier **./kubernetes** définissent les déploiements et services.
  - L'application peut être déployée localement sur Minikube en appliquant les fichiers de configuration kubernetes:

     - kubectl apply -f kubernetes/backend-deployment.yaml
     - kubectl apply -f kubernetes/frontend-deployment.yaml
     - kubectl apply -f kubernetes/backend-service.yaml
     - kubectl apply -f kubernetes/frontend-service.yaml

### 3. **Visualisation des ressources Kubernetes**
Il faut appliquer les commandes suivantes:

     - kubectl get pods
     - kubectl get deployments
     - kubectl get services


# test commit

# test commit 2
