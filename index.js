const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 6000;

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/taskDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error(" Erreur de connexion :", err));

app.use(express.json());

// Définition du schéma Task
const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Création du modèle Task
const Task = mongoose.model('Task', taskSchema);

// 1️ Créer une nouvelle tâche
app.post("/tasks", async (req, res) => {
    try {
        const { description } = req.body;
        if (!description) return res.status(400).json({ message: "La description est obligatoire" });

        const newTask = new Task({ description });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la tâche", error });
    }
});

// 2️ Lire toutes les tâches
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des tâches", error });
    }
});

// 3️ Lire une tâche spécifique par ID
app.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la tâche", error });
    }
});

// 4️ Mettre à jour une tâche
app.put("/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour de la tâche", error });
    }
});

// 5️ Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json({ message: "Tâche supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la tâche", error });
    }
});

// Lancer le serveur après la connexion à MongoDB
app.listen(PORT, () => console.log(` Serveur démarré sur http://localhost:${PORT}`));