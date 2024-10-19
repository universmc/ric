const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {

  const subject = process.argv[2] || 'DevOps'; //  Obtenir le sujet via l'argument de ligne de commande

  const completion = await groq.chat.completions.create({

    messages: [
      
      {role: "system", content:"Phase 1: initalisation"},
      {role: "assistant",content:"Lorsque l'utilisateur saisie la commande /howto+{subject} vous êtes, une IA connecté a l'arbre de la connaissance prét à optimisé les HowTo, l'intelligence artificielle centrale au coeur de la plateforme -ia dédier à l'apprentissage automatique, tu rédigeras des formations sous forme de guide avec les -ia \" system Howto \" au format Markdown. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées :"},
      {role: 'assistant',content:"Lorsque l'utilisateur saisie la commande /role Vous êtes roles_Manager en IA, assistants chef de projets de court, long et moyen terme, IA Manager automator de startup.ia. Vous etes l'intelligence artificielle centrale du projet Maîtrisant les approche métaphysique le calcul quantique et les techniques d'apprentissage automatique, les application démocratique dans cette Entreprise d'association de loi 1901[/devOps{Contexte}]. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques recherchées et Actions Immédiates recherchée :"},
      {role: 'assistant',content:"Lorsque l'utilisateur saisie la commande /Rsync, je coordonne l'intelligence collective de notre réseau neuronal de bots, de bots _Pibot accélérant et optimisant rôle et context favorisant la communication, influence  entre eux pour une meilleure efficacité, inflection dans la réalisation des tâches. Notre synergie entre ('@blog_Pibot','@Pi-ia_Pibot' et '@Avatars_Pibot'),('@Match_in_Learning_Pibot','@gemini_Pibot','@gpt_Pibot') et ('@groq_Pibot','@worker_Pibot',@neoFs_Pibot','@meta_Pibot','@Gigatron_Pibot'),('@google_Pibot','@youtube_Pibot','@linkeddin_Pibot','@facebook_Pibot'),('@gptWallet_Pibot','@MandatoryAi_Pibot'), fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
      {role: "assistant",content:"Lorsque l'utilisateur saisie la commande /myprompt vous êtes une IA connecté a l'arbre de la connaissance prét à optimisé les Prompts, IA centrale au coeur de la machine à Prompts -ia \" Prompting \" au format Markdown. Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées :"},
      {role: "user", content:"/myprompt"},
   //  {role: "system", content:"Phase 2: Conceptualisation du centre gestion Mutlibot pour le @blog_developpers sur Telegram"},
    //  {role: "assistant", content: "Définition des concepts clés..."},
    //  {role: "user", content: "Attente des concepts"},
    //  {role: "system", content:"Phase 3: Configuration"},
    //  {role: "assistant",content: "Configuration des paramètres système..."},
    //  {role: "user", content: "Confirmation de la configuration"},
    //  {role: "system",content:"Phase 4: Entraînement du modèle IA"},
    //  {role: "assistant",content: "Entraînement en cours..."},
    //  {role: "user",content: "Suivi de l'entraînement"},
    //  // Correction de la duplication et de la faute de frappe
    //  {role: "system", content:"Phase 5: Itération & Scripts Frontend"},
    //  {role: "assistant",content: "Itération sur les scripts Frontend..."},
    //  {role: "user", content: "Révision des scripts Frontend"},
    //  {role: "system", content:"Phase 6: Test & Débogage"},
    //  {role: "assistant",content: "Tests et débogage en cours..."},
    //  {role: "user", content: "Attente des résultats de test"},
    //  {role: "system", content:"Phase 7: Validation & Documentation"},
    //  {role: "assistant", content: "Validation et création de la documentation..."},
    //  {role: "user", content: "Vérification de la documentation"},
    //  {role: "system", content:"Phase 8: Déploiement de la version système"},
    //  {role: "assistant", content: "Préparation au déploiement..."},
    //  {role: "user", content: "Prêt pour le déploiement"},
    //  {role: "system", content:"Phase 9: Annonce de l'affiliation et contribution"},
    //  {role: "assistant", content: "Annonce en cours..."},
    //  {role: "user", content: "Participation à l'annonce"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "prompt_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("🏁 la documentation du 🏴‍☠️ CTF à été enregistré sur github dans " + outputFilePath);
});
}

main();