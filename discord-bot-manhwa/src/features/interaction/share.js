const Discord = require('discord.js');
const { getReadingProgress, updateReadingProgress } = require('../../utils/database');

module.exports = {
  name: 'share',
  description: 'Share a favorite chapter with others',
  execute(message, args) {
    const chapterNumber = parseInt(args[0]);

    if (isNaN(chapterNumber) || chapterNumber <= 0) {
      return message.reply('Please provide a valid chapter number.');
    }

    const userId = message.author.id;
    const manhwaTitle = 'Example Manhwa Title'; // Replace with actual title
    const chapterTitle = `Chapter ${chapterNumber}`;
    
    const progress = getReadingProgress(userId, manhwaTitle);

    if (!progress) {
      return message.reply('You have not read any chapters yet.');
    }

    if (chapterNumber > progress.totalChapters) {
      return message.reply('This chapter has not been released yet.');
    }

    const sharedMessage = `Check out ${manhwaTitle} - ${chapterTitle} shared by ${message.author.username}!`;

    // Code to share the chapter with others in the Discord server

    updateReadingProgress(userId, manhwaTitle, chapterNumber);

    message.channel.send(sharedMessage);
  },
};