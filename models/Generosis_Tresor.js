const Groq = require("groq-sdk");
const groq = new Groq();

// Présentation du projet dans Generosis_Tresor.js
async function presentProject() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      { role: 'assistant', content: `Rôle de Generosis_Tresor :
Generosi_Tresor promeut l'esprit de générosité au sein de GPT-Wallet, distribuant des récompenses sociales et encourageant les actions altruistes via des incitations en pi.coins.` }
    ],
    model: 'mixtral-8x7b-32768',
    temperature: 0.8,
  });

  console.log(chatCompletion.choices[0].message.content);
}

presentProject();

// FONCTION DE DISTRIBUTION DE GÉNÉROSITÉ
async function distributeGenerosity() {
  // Implementez votre logique de gestion de la générosité comme discuté
}

setInterval(distributeGenerosity, 45000); // Répéter toutes les 45 secondes

module.exports = { distributeGenerosity };