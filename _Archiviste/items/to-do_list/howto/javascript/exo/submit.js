// app.js
const addTaskForm = document.getElementById('add-task-form');
addTaskForm.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    // Récupérer les valeurs des champs de formulaire
const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskPriority = document.getElementById('task-priority').value;

    // Créer une nouvelle tâche à partir des valeurs de formulaire
const newTask = {
        name: taskName,
        description: taskDescription,
        priority: taskPriority
    };

    // Envoyer la nouvelle tâche au serveur pour être ajoutée au fichier JSON
}
