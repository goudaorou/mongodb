# Task CRUD API avec MongoDB

Ce projet est une API REST permettant de gérer des tâches (CRUD) avec MongoDB.

## 📌 Prérequis

- [Node.js](https://nodejs.org/) installé
- [MongoDB](https://www.mongodb.com/) installé et en cours d'exécution
- [Postman](https://www.postman.com/) (ou un autre client API) pour tester

## 🚀 Installation

1. **Cloner le projet**
   ```sh
   git clone https://github.com/ton-repo/task-crud-mongodb.git
   cd task-crud-mongodb
   ```

2. **Installer les dépendances**
   ```sh
   npm install
   ```

3. **Créer un fichier `.env`** et ajouter :
   ```env
   PORT=6000
   MONGO_URI=mongodb://localhost:27017/taskDB
   ```

4. **Démarrer le serveur**
   ```sh
   node server.js
   ```

## 📌 Routes de l'API

| Méthode | Endpoint        | Description                        |
|---------|----------------|------------------------------------|
| GET     | `/tasks`        | Récupérer toutes les tâches       |
| POST    | `/tasks`        | Ajouter une nouvelle tâche        |
| PUT     | `/tasks/:id`    | Modifier une tâche existante      |
| DELETE  | `/tasks/:id`    | Supprimer une tâche               |

## 🔍 Tester avec Postman

1. **Lister les tâches**  
   - Méthode : `GET`  
   - URL : `http://localhost:6000/tasks`

2. **Ajouter une tâche**  
   - Méthode : `POST`  
   - URL : `http://localhost:6000/tasks`
   - Body (JSON) :  
     ```json
     {
       "description": "Nouvelle tâche"
     }
     ```

3. **Modifier une tâche**  
   - Méthode : `PUT`  
   - URL : `http://localhost:6000/tasks/{id}`
   - Body (JSON) :  
     ```json
     {
       "description": "Tâche mise à jour"
     }
     ```

4. **Supprimer une tâche**  
   - Méthode : `DELETE`  
   - URL : `http://localhost:6000/tasks/{id}`



