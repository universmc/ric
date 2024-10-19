const { exec } = require('child_process');
const fs = require('fs');
const Groq = require('groq-sdk');

// Initialise le SDK Groq avec la clé API
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

/**
 * Fonction pour gérer l'exécution asynchrone des étapes du plan de travail
 * @param {Object} task - La tâche actuelle à exécuter
 * @param {number} taskIndex - L'index de la tâche dans le plan de travail
 * @param {Object} workPlan - Le plan de travail complet
 */
async function executeTask(task, taskIndex, workPlan) {
  console.log(`Démarrage de la tâche: ${task.phase}`);
  console.log(`Description: ${task.description}`);

  const completedSteps = [];

  // Exécution des étapes de la tâche
  for (const step of task.steps) {
    if (!completedSteps.includes(step)) { // Exécuter uniquement les étapes non complétées
      console.log(`Exécution de l'étape: ${step}`);
      
      // Vérification si l'étape nécessite un appel à l'API Groq
      if (step.toLowerCase().includes('groq')) {
        await executeGroqStep(step);
      } else {
        await executeStep(step);
      }
      
      completedSteps.push(step); // Enregistrer l'étape complétée
    }
  }

  console.log(`Tâche terminée: ${task.phase}`);
  console.log('--------------------------------------');
  
  // Sauvegarder la progression après chaque tâche avec les étapes complétées
  saveProgress(taskIndex, workPlan, completedSteps);
}

/**
 * Simule l'exécution asynchrone d'une étape classique
 * @param {string} step - L'étape à exécuter
 */
async function executeStep(step) {
  return new Promise((resolve) => {
    // Simuler un délai pour chaque étape (par exemple 1 seconde)
    setTimeout(() => {
      console.log(`Étape terminée: ${step}`);
      resolve();
    }, 1000); // Délai simulé de 1 seconde pour chaque étape
  });
}

/**
 * Simule l'exécution d'une étape nécessitant un appel à l'API Groq
 * @param {string} step - L'étape nécessitant Groq
 */
async function executeGroqStep(step) {
  return new Promise(async (resolve, reject) => {
    console.log(`Exécution de l'étape avec Groq: ${step}`);

    try {
      // Exemple de prompt à envoyer à l'API Groq
      const prompt = `Génère une réponse pour l'étape : ${step}`;
      const response = await groq.chat.completions.create({
        model: 'gemma2-9b-it',
        messages: [{ role: 'user', content: prompt }]
      });

      console.log(`Réponse de Groq pour l'étape "${step}": ${response.choices[0].message.content}`);
      resolve();
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API Groq :', error);
      reject(error);
    }
  });
}

/**
 * Fonction pour exécuter toutes les tâches dans le plan de travail
 * @param {Object} workPlan - Le plan de travail contenant les tâches
 * @param {number} startIndex - L'index de la première tâche à exécuter
 */
async function executeWorkPlan(workPlan, startIndex = 0) {
  for (let i = startIndex; i < workPlan.tasks.length; i++) {
    await executeTask(workPlan.tasks[i], i, workPlan);
  }
  console.log('Toutes les tâches du plan de travail sont terminées.');
}

/**
 * Fonction pour sauvegarder la progression dans un fichier JSON
 * @param {number} taskIndex - L'index de la tâche en cours
 * @param {Object} workPlan - Le plan de travail complet
 * @param {Array} completedSteps - Les étapes complétées
 */
function saveProgress(taskIndex, workPlan, completedSteps) {
  const progress = {
    currentTaskIndex: taskIndex,
    completedSteps: completedSteps, // Ajouter les étapes complétées
    timestamp: new Date().toISOString(),
    status: workPlan.tasks[taskIndex].status, // Statut de la tâche (en cours, terminé, etc.)
    progress: workPlan.tasks[taskIndex].progress // Progression en pourcentage
  };

  // Enregistrer les données de progression dans 'progress.json'
  fs.writeFileSync('progress.json', JSON.stringify(progress, null, 2));
  console.log(`Progression sauvegardée: Tâche ${taskIndex}`);
}

/**
 * Fonction pour reprendre le travail à partir de la dernière tâche inachevée
 * @param {Object} workPlan - Le plan de travail complet
 */
function resumeWorkPlan(workPlan) {
  let startIndex = 0;
  let completedSteps = [];

  // Vérifier s'il existe un fichier de progression
  if (fs.existsSync('progress.json')) {
    const progress = JSON.parse(fs.readFileSync('progress.json', 'utf-8'));
    startIndex = progress.currentTaskIndex;
    completedSteps = progress.completedSteps || [];
    console.log(`Reprise du plan à partir de la tâche ${startIndex}, avec ${completedSteps.length} étapes déjà complétées.`);
  } else {
    console.log('Aucune progression trouvée. Démarrage du plan depuis le début.');
  }

  // Lancer le plan de travail à partir de la tâche sauvegardée
  executeWorkPlan(workPlan, startIndex);
}

/**
 * Charge dynamiquement le plan de travail à partir d'un fichier JSON
 * @param {string} filePath - Chemin vers le fichier JSON contenant le plan de travail
 * @returns {Object} - Plan de travail chargé
 */
function loadWorkPlan(filePath) {
  if (fs.existsSync(filePath)) {
    const workPlanData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log('Plan de travail chargé avec succès.');
    return workPlanData;
  } else {
    throw new Error(`Fichier introuvable: ${filePath}`);
  }
}

// Exemple d'utilisation
const workPlan = loadWorkPlan('workplan.json');
resumeWorkPlan(workPlan);