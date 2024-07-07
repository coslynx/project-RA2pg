# Discord Bot for Reading Manhwa

## Project Overview:
- Develop a Discord bot that allows users to read manhwa and manga within Discord.
- Include a feature to track users' reading progress.

## Features:
- **Manhwa and Manga Reading:**
  - Users can access a library of manhwa and manga titles.
  - Read chapters directly within Discord.
  - Navigate easily between chapters.
- **Reading Progress Tracking:**
  - Keep track of the chapters users have read.
  - Display progress in a user-friendly format.
- **Search Functionality:**
  - Allow users to search for specific manhwa or manga titles.
  - Provide suggestions based on search queries.
- **User Preferences:**
  - Enable users to customize reading settings (e.g., text size, background color).
  - Save preferences for future reading sessions.
- **Notifications:**
  - Notify users when new chapters are available for the series they are following.
  - Send reminders for unread chapters.
- **User Interaction:**
  - Enable users to like, comment, or share their favorite chapters.
  - Promote community engagement through discussions.

## Enhancements:
- Integration with external manga/manhwa databases for a wider selection of titles.
- Implement a recommendation system based on users' reading history.
- Include a feature to create reading groups or clubs within Discord.
- Integrate a virtual currency system for users to unlock premium chapters or features.
- Develop a mobile-friendly interface for reading on the go.

## Programming Languages:
- Node.js for backend development to create the Discord bot.
- JavaScript for frontend development for the user interface within Discord.

## APIs:
- Discord API: Integrating with Discord's API to create the bot and handle user interactions.
- MangaDex API: Accessing manga/manhwa titles and chapters for the reading library.
- Google Custom Search JSON API: Implementing search functionality for users to find specific titles.
- Discord Webhook API: Sending notifications to users for new chapters and reminders.

## Packages and Libraries:
- Discord.js (v13.1.0): A powerful library for creating Discord bots in Node.js.
- Axios (v0.21.1): Making HTTP requests to interact with external APIs like MangaDex and Google Custom Search.
- Express.js (v4.17.1): Building the backend server to handle user preferences and reading progress.
- Moment.js (v2.29.1): Formatting dates and times for notifications and reading progress tracking.
- React.js (v17.0.2): Frontend library for building the user interface within Discord.

## Rationale:
- Node.js and JavaScript are chosen for their compatibility with Discord's API and ease of development.
- Discord.js is a popular choice for Discord bot development due to its comprehensive features and active community support.
- Axios is used for making API requests as it simplifies handling asynchronous operations.
- Express.js is ideal for creating a RESTful API to manage user preferences and reading progress.
- Moment.js simplifies date and time manipulation, crucial for notifications and tracking reading progress.
- React.js enables the creation of a dynamic and interactive user interface within Discord for a seamless reading experience.