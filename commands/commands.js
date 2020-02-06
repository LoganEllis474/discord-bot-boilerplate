const bot = require('../bot.js')

exports.run = (message, client, args) => {
    console.log(bot.commands)

    message.channel.send(
        `Commands: \`${bot.settings.prefix}` +
        Object.keys(bot.commands).join(`\`, \`${bot.settings.prefix}`) + '`'
    )
}

exports.help = 'Displays a list of available commands.'
exports.aliases = ['command', 'two']