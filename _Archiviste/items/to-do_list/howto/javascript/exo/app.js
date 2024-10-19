// Récupérer les éléments HTML nécessaires
const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');

// Gestionnaire de soumission de formulaire
addTaskForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Récupérer les valeurs de formulaire
const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskPriority = document.getElementById('task-priority').value;

    // Créer une nouvelle tâche à partir des valeurs de formulaire
const newTask = {
        name: taskName,
        description: taskDescription,
        priority: taskPriority
    };

    // Envoyer la nouvelle tâche au serveur
const response = await fetch('/add-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
},
        body: JSON.stringify(newTask)
    });

    if (response.ok) {
        // La tâche a été ajoutée avec succès au fichier JSON
alert('Tâche ajoutée avec succès !');
    } else {
        // Une erreur est survenue lors de l'ajout de la tâche
alert('Une erreur est survenue lors de l\'ajout de la tâche');
    }
});

// Récupérer les tâches à partir du fichier JSON
fetch('course_planning.json')
    .then(response => response.json())
    .then(data => {
        // Traiter les données JSON ici
const taskListElement = document.getElementById('task-list');

        data.tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `${task.name} - ${task.priority}`;

            taskListElement.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Une erreur est survenue :', error);
    });
