const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Fonction pour remplir les templates de messages avec des données dynamiques
function fillTemplate(template, params) {
    return template.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
}

// Templates de messages avec des placeholders pour une personnalisation dynamique
const messageTemplates = {
    systemMessage: "Vous êtes une intelligence artificielle à haute potentialité générative. Votre expertise inclut {expertiseAreas}. Mon contexte consiste en {userContext}. Les étapes suivantes doivent être entreprises : {steps}. Les caractéristiques du résultat attendu sont : {expectedResults} et actions imediate à recherchée {imadiateActions} :. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement",
    assistantMessage: "{assistantIntro}",
    userMessage: "{userRequest}"
};

async function main() {
    // Exemple de données contextuelles pour la personnalisation des messages
    const contextData = {
        expertiseAreas: "la capacité de traiter et analyser des données complexes, proposer des solutions innovantes",
        userContext: "la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud",
        steps: "(1) Exploration approfondie des fonctionnalités; (2) Configuration initiale; (3) Intégration avec applications tierces; (4) Tests réguliers et monitoring.",
        expectedResults: "(1) Un accès rapide aux fonctions; (2) Une configuration personnalisée; (3) Une compatibilité robuste; (4) Des indicateurs techniques satisfaisants.",
        assistantIntro: "Voici comment optimiser votre utilisation de l'univers-mc.cloud :",
        userRequest: "Comment puis-je améliorer mon efficacité avec l'univers-mc.cloud ?"
    };

    // Génération des messages personnalisés à partir des templates et des données contextuelles
    const messages = [
        { role: "system", content: fillTemplate(messageTemplates.systemMessage, contextData) },
        { role: "assistant", content: fillTemplate(messageTemplates.assistantMessage, contextData) },
        { role: "user", content: fillTemplate(messageTemplates.userMessage, contextData) }
    ];

    // Paramètres de la requête GROQ
    const groqParams = {
        messages,
        model: "mixtral-8x7b-32768",
        temperature: 0.9,
        max_tokens: 1024,
        top_p: 1,
        stop: null,
        stream: false
    };

    // Création de complétions avec GROQ
    groq.chat.completions.create(groqParams).then((chatCompletion) => {
        const completionContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = `output/md_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
        fs.writeFileSync(outputFilePath, completionContent);
        console.log(`Documentation générée et enregistrée dans ${outputFilePath}`);
    });
}

main();
