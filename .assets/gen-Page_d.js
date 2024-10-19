const { exec } = require('child_process');
const fs = require('fs');
const OpenAI = require('openai');
const axios = require('axios');
const Groq = require('groq-sdk');
const openai = new OpenAI();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Charger le plan de travail à partir d'un fichier JSON
const workPlan = require('./workplan.json');

// Fonction pour gérer l'exécution asynchrone des étapes du plan de travail
async function executeTask(task, taskIndex, workPlan) {
    console.log('╔════════════════════════════════════════════════════╗');
  console.log(`   ✨ Démarrage de la tâche: ${task.phase}`);
  console.log(`      >  Description: ${task.description}`);

  const completedSteps = [];

  for (const step of task.steps) {
    if (!completedSteps.includes(step)) {
      console.log(`Exécution de l'étape: ${step}`);
      await executeStep(step);
      completedSteps.push(step);
    }
  }

  console.log(`.════════{ ✨ Tâche terminée: ${task.phase}}═══════.`);
  console.log('╚══════════════════════════════════════════════════╝');
  saveProgress(taskIndex, workPlan, completedSteps);
}

// Simule l'exécution asynchrone d'une étape
async function executeStep(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(` ⚡️ Étape terminée: ${step}`);
      resolve();
    }, 1000);
  });
}

// Fonction pour sauvegarder la progression dans un fichier JSON
function saveProgress(taskIndex, workPlan, completedSteps) {
  const progress = {
    currentTaskIndex: taskIndex,
    completedSteps: completedSteps,
    timestamp: new Date().toISOString(),
    status: workPlan.tasks[taskIndex].status,
    progress: workPlan.tasks[taskIndex].progress
  };

  fs.writeFileSync('progress.json', JSON.stringify(progress, null, 2));
  console.log(`Progression sauvegardée: Tâche ${taskIndex}`);
}

// Fonction pour reprendre le plan de travail
function resumeWorkPlan(workPlan) {
  let startIndex = 0;
  let completedSteps = [];

  if (fs.existsSync('progress.json')) {
    const progress = JSON.parse(fs.readFileSync('progress.json', 'utf-8'));
    startIndex = progress.currentTaskIndex;
    completedSteps = progress.completedSteps || [];
    console.log(`Reprise du plan à partir de la tâche ${startIndex}, avec ${completedSteps.length} étapes déjà complétées.`);
  } else {
    console.log('Aucune progression trouvée. Démarrage du plan depuis le début.');
  }

  executeWorkPlan(workPlan, startIndex);
}

// Fonction pour exécuter toutes les tâches dans le plan de travail
async function executeWorkPlan(workPlan, startIndex = 0) {
  for (let i = startIndex; i < workPlan.tasks.length; i++) {
    await executeTask(workPlan.tasks[i], i, workPlan);
  }
  console.log('Toutes les tâches du plan de travail sont terminées.');
}

// Fonction principale pour générer la page web pour chaque phase du projet
async function generateWebPagesForPhases() {
  for (const task of workPlan.tasks) {
    try {
      console.log(`Démarrage de la génération de la page Web pour la phase : ${task.phase}`);
      const content = await generateContent(task.phase);
      await generateStructure(content, task.phase);
      console.log(`Page Web générée avec succès pour la phase : ${task.phase}`);
    } catch (error) {
      console.error(`Erreur lors de la génération de la page pour la phase ${task.phase} :`, error);
    }
  }
}

// Fonction pour générer le contenu texte et image
async function generateContent(phase) {
  console.log("Génération du contenu pour la phase :", phase);

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: "user", content: `Génère un contenu détaillé pour une page Web sur la phase : ${phase}` }],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 2048
    });

    const contentText = chatCompletion.choices[0]?.message?.content || 'Contenu indisponible';
    const imageUrl = await generateImage(phase);
    return { text: contentText, image: imageUrl };
  } catch (error) {
    console.error("Erreur lors de la génération du contenu :", error);
    throw error;
  }
}

// Fonction pour générer une image
async function generateImage(phase) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Une image descriptive pour la phase : ${phase}`,
      n: 1,
      size: "1792x1024"
    });

    const imageUrl = response.data[0].url;
    const imageFile = `src/img/image_${phase}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.webp`;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(imageFile, imageResponse.data);

    console.log(`Image générée et sauvegardée sous ${imageFile}`);
    return imageFile;
  } catch (error) {
    console.error("Erreur lors de la génération de l'image :", error);
    throw error;
  }
}

// Fonction pour générer la structure HTML/CSS/JS
async function generateStructure(content, phase) {
  try {
    console.log("Génération de la structure HTML/CSS/JS pour la phase :", phase);

    const html = generateHTML(content, phase);
    const htmlFile = `page_${phase}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.html`;
    fs.writeFileSync(htmlFile, html);

    const css = generateCSS();
    const cssFile = `src/css/style_${phase}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.css`;
    fs.writeFileSync(cssFile, css);

    const js = generateJavaScript(phase);
    const jsFile = `src/js/pipeline_${phase}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.js`;
    fs.writeFileSync(jsFile, js);

    const json = generatePipelineJSON(phase);
    const jsonFile = `src/json/pipeline_${phase}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.json`;
    fs.writeFileSync(jsonFile, json);

    console.log("Structure HTML/CSS/JS générée avec succès !");
  } catch (error) {
    console.error("Erreur lors de la génération de la structure :", error);
    throw error;
  }
}

// Fonctions pour générer HTML, CSS, JavaScript et JSON
function generateHTML(content, phase) {
  return `<!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page sur ${phase}</title>
    <link href="src/css/style_${phase}.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1 class="title">${phase}</h1>
      <div class="image">
        <img src="${content.image}" alt="Image descriptive de ${phase}">
      </div>
      <div class="content">
        ${content.text}
      </div>
      <div id="sommaire"></div>
      <div id="content"></div>
    </div>
    <script src="src/js/pipeline_${phase}.js"></script>
  </body>
  </html>`;
}

function generateCSS() {
  return `body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }
  .title {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 20px;
  }
  .image {
    margin-bottom: 20px;
    text-align: center;
  }
  .image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .content {
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
  }`;
}

function generateJavaScript(phase) {
  return `document.addEventListener('DOMContentLoaded', function() {
    fetch('src/json/pipeline_${phase}.json')
        .then(response => response.json())
        .then(cours => {
            const sommaire = document.getElementById('sommaire');
            const contenuCours = document.getElementById('content');

            cours.forEach((section, index) => {
                let sommaireItem = document.createElement('a');
                sommaireItem.href = \`#section\${index}\`;
                sommaireItem.textContent = section.titre;
                sommaireItem.classList.add('sommaire-link');
                sommaire.appendChild(sommaireItem);

                let sectionDiv = document.createElement('div');
                sectionDiv.id = \`section\${index}\`;
                sectionDiv.classList.add('section');

                let titreSection = document.createElement('h2');
                titreSection.textContent = section.titre;
                sectionDiv.appendChild(titreSection);

                section.sousSections.forEach(sousSection => {
                    let sousSectionDiv = document.createElement('div');
                    sousSectionDiv.classList.add('sous-section');

                    let sousTitre = document.createElement('h3');
                    sousTitre.textContent = sousSection.sousTitre;
                    sousSectionDiv.appendChild(sousTitre);

                    if (sousSection.contenuMarkdown) {
                        fetch(sousSection.contenuMarkdown)
                            .then(responseMd => responseMd.text())
                            .then(markdown => {
                                let contenu = document.createElement('div');
                                contenu.className = 'markdown-contenu';
                                contenu.innerHTML = marked.parse(markdown);
                                sousSectionDiv.appendChild(contenu);
                            });
                    } else {
                        let contenu = document.createElement('p');
                        contenu.innerHTML = sousSection.contenu;
                        sousSectionDiv.appendChild(contenu);
                    }

                    sectionDiv.appendChild(sousSectionDiv);
                });

                contenuCours.appendChild(sectionDiv);
            });
        });
  });`;
}

function generatePipelineJSON(phase) {
  const pipeline = [
    {
      titre: "Introduction",
      sousSections: [
        { sousTitre: "Contexte", contenu: `Description du contexte de la phase: ${phase}` },
        { sousTitre: "Objectifs", contenuMarkdown: "src/md/project.md" }
      ]
    },
    {
      titre: "Développement",
      sousSections: [
        { sousTitre: "Étape 1", contenuMarkdown: "src/md/phase1.md" },
        { sousTitre: "Étape 2", contenuMarkdown: "src/md/phase2.md" }
      ]
    }
  ];

  return JSON.stringify(pipeline, null, 2);
}

// Reprendre le plan de travail après une pause
resumeWorkPlan(workPlan);
// Exécuter la génération des pages web
generateWebPagesForPhases();