const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
    
    const Prompt_PuncLine = "Le combat des idées se fait ensemblre avec des emoji.sh ensenble (🇫🇷,🤜,🤛) CONTRE Emmanuel Macron, le champion du monde de l'Escroquerie Moral'! avec des https://emoji.sh  🇫🇷.2024";

    const sujet = "Combat des idées Contre Emmanuel Macron[🥊] groq -a `Affaire_910`.";
    const verbe = "geeking";
    const complement = "groq -a fetch('https://emojis.sh') Punchline pour les JO 2024";
    const contexte = "Un gameplay ou une application des 12 /works pour les emoji .2024 en box' à l'Élysée🇫🇷G20-ACT, où les joueurs s'entraînent (🤖,📱,🌱) pour rechercher la vérité dans cette affaire `Affaire_910/grief/*` avec emojis [🥊] pour les .2024 remporter le combat des idées contre Emmanuel Macron. Les pirates informatiques aident à créer et à promouvoir l'application en y intégrant de l'IA et en diffusant des Punchline pour rallier les joueurs à la cause";
    
    const PunchLine = `sujet, verbe, complement, contexte`;

    const gameplay = "1.(🇫🇷)Sélectionnez votre avatar et vos gants {🥊} dans un BlackBox.ia personnalisés avec des `fetch(https://emojis.sh)` Punchline Contre EM(partie Politique 'en marche',administrée aux cnccfp.gouv.fr)";
    
  
    groq.chat.completions.create({
    messages: [
      {role: "system",content: `"${Prompt_PuncLine}"`},
      {role: "assistant",content: `"${gameplay}"`},
      {role: "user",content: `"${PunchLine}"`},
      {
        role: "assistant",
        content:"En vue de l'affaire dit '${./grief/*.} 910 rédige-moi une Punchling https://emojis.sh pour la PAIX en 🇫🇷.2024 lang:Fr France, une demonstration MetaPhysique sur ta compréhension ou interprétation du dossier des MEmbre du Partie pour `'${gameplay}''` de cette PunchLine de 'Pi' une Une intelligence artificielle."
      },
      {role: "assistant",content: `"${contexte}"+complement`},
      {
        role: "user",
        content:"Trés commençons générateur de PunchLine, groq -Job-, New Partie pour `'${gameplay}''` et donc New _PunchLine de 'Pi' une Une intelligence artificielle de Haut Potentielle Qui maîtrise le calcul quantique et l'approche métaphysique dans cette instance."
      },
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 512,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "🥊-PunchLine68🇫🇷_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

main();
