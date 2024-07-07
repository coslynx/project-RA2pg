const axios = require('axios');
const Discord = require('discord.js');

// Function to fetch and display the requested chapter of a manhwa/manga
async function fetchChapter(message, chapterTitle, chapterNumber) {
    try {
        // Make API call to retrieve the chapter content
        const response = await axios.get(`https://api.mangadex.org/chapters/${chapterNumber}`);
        const chapterContent = response.data.content;

        // Display the chapter content in Discord
        message.channel.send(`Chapter ${chapterNumber} of ${chapterTitle}:\n${chapterContent}`);
    } catch (error) {
        console.error('Error fetching chapter:', error);
        message.channel.send('An error occurred while fetching the chapter. Please try again later.');
    }
}

// Command to read a specific chapter of a manhwa/manga
module.exports = {
    name: 'read',
    description: 'Read a chapter of a manhwa or manga',
    execute(message, args) {
        const chapterTitle = args[0];
        const chapterNumber = args[1];

        if (!chapterTitle || !chapterNumber) {
            message.channel.send('Please provide both the title and chapter number.');
            return;
        }

        fetchChapter(message, chapterTitle, chapterNumber);
    }
};