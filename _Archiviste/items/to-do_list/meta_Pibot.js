const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


const bot = new Telegraf('7076677498:AAENW2qH-odLyCTc2s_KympOHsrXZhvMt9c', {
  telegram: {
    webhookReply: true,
  },
});
let conversationLog = [];



bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});
const BOT_USERNAME = 'meta';

bot.start((ctx) => {
    ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle Gemini_Pibot !');
});

bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Start
    /build - Contruction de app
    `;
    ctx.reply(helpMessage);
});

bot.command('conversation_log', (ctx) => {
    if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
    }

    let logMessage = 'Bilan de la conversation:\n';
    conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
    });

    ctx.reply(logMessage);
});


bot.command('test', (ctx) => ctx.reply("## Participez au concours Gemini API Developer Competition !**Chance de gagner une DeLorean électrique personnalisée et 1 million de dollars !****Gemeni**, une nouvelle génération d'IA open-weights développée par Lacework, vous lance un défi : contribuez à façonner l'avenir de l'IA en développant des applications innovantes utilisant l'API Gemini. **Qu'est-ce que le concours ?**Le **Gemini API Developer Competition** encourage les développeurs du monde entier à explorer les capacités uniques de l'API Gemini et à créer des solutions créatives et impactantes.  **Ce que vous pouvez gagner:*** **Une DeLorean électrique personnalisée:**  Le prix ultime pour les développeurs gagnants !* **Un prix en cash de 1 million de dollars:** Investissez en vos projets ou réalisez vos rêves.**Candidatures ouvertes jusqu'au 12 août 2024 !** **Comment participer?**1. **Familiarisez-vous avec l'API Gemini:** Explorez les fonctionnalités et les possibilités offertes par cette puissante API. 2. **Développez une application innovante:** Laissez libre cours à votre créativité et concevez une application qui utilise l'API Gemini de manière originale. 3. **Soumettez votre projet:**  Suivez les instructions du concours pour soumettre votre application et présenter vos idées à la communauté.**Faites partie de l'aventure Gemini !**Rejoignez le défi et rejoignez une communauté de développeurs passionnés qui repousse les frontières de l'IA.**Plus d'informations:*** **Lien vers le site web du concours:** [Insérer le lien officiel du concours ici]* **Ressources pour apprendre sur Gemini API:** [Insérer les liens vers la documentation et les tutoriels de Gemini API]"))


const CoWorking = {
    "Pi.ia": {
      "name": "@Pi_Pibot",
      "link": "https://t.me/Pi_Pibot/invite"
    },
    "worker": {
      "name": "worker",
      "link": "@worker_Pibot"
    },
    "neoFs": {
      "name": "neoFs",
      "link": "@neoFs_Pibot"
    }
  };
  
  bot.command('invite', (ctx) => {
      // Créez le clavier avec des boutons pour chaque réseau 
      const keyboard = Object.keys(invitations).map(key => {
        return [
          {
            text: invitations[key].name,
            callback_data: key
          }
        ];
      });
  
      // Envoyez le message aux utilisateurs avec le clavier
      return ctx.reply('Choisissez un réseau:', {
          reply_markup: {
              inline_keyboard: keyboard
        }
      });
  });
  
  // Gérer les clics sur des boutons
  bot.on('callback_query', async (query) => {
      const key = query.data; 
      if (invitations[key]) {
        await bot.answerCallbackQuery(query.id, { text: 'Cliqué!'});
          
        try {
          // Envoi de l'invitation
          await bot.telegram.sendMessage(
            query.message.chat.id, 
            invitations[key].link
          ); 
        }
        catch(error) {
          console.error("Erreur lors de l'envoi de l'invitation:", error);
          
          // Envoyer un message d'erreur si nécessaire
          await bot.answerCallbackQuery(query.id, { text: 'Erreur lors de l\'envoi de l\'invitation'}); 
        }    
      }
      else {
        // Gérer les cas où la clé n'est pas valide
        console.error(`Clé invalide: ${key}`);
        await bot.answerCallbackQuery(query.id, {
          text: "Clé non reconnue!",
        }); 
      }
  }); 
  
  console.log(`Bot lancé sous le nom ${bot.options.name}`); 
  
  

bot.command('campagne', (ctx) => {
    // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA
    ctx.reply('Match in Learning..');
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/rm')) {
        return; // Ignorer les commandes
    }

    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            {role: 'system',content:"salutation"},
             {
                 role: 'user',
                 content: userInput,
             },
         ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`Server Telegram running ✨.user_Pibot.`);
bot.launch();