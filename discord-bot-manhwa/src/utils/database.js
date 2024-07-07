const database = {
  users: {},
  manhwaTitles: {},
  mangaTitles: {},
  readingProgress: {},
  userPreferences: {},
  unreadChapters: {},
  
  addUser: function(userId) {
    if (!this.users[userId]) {
      this.users[userId] = {
        manhwaLibrary: [],
        mangaLibrary: []
      };
    }
  },

  addManhwaTitle: function(title, chapters) {
    this.manhwaTitles[title] = chapters;
  },

  addMangaTitle: function(title, chapters) {
    this.mangaTitles[title] = chapters;
  },

  updateReadingProgress: function(userId, title, chapter) {
    if (!this.readingProgress[userId]) {
      this.readingProgress[userId] = {};
    }
    this.readingProgress[userId][title] = chapter;
  },

  getUserReadingProgress: function(userId, title) {
    if (this.readingProgress[userId] && this.readingProgress[userId][title]) {
      return this.readingProgress[userId][title];
    }
    return "User has not read any chapters yet.";
  },

  setUserPreference: function(userId, preference, value) {
    if (!this.userPreferences[userId]) {
      this.userPreferences[userId] = {};
    }
    this.userPreferences[userId][preference] = value;
  },

  getUserPreference: function(userId, preference) {
    if (this.userPreferences[userId] && this.userPreferences[userId][preference]) {
      return this.userPreferences[userId][preference];
    }
    return "Preference not set.";
  },

  addUnreadChapter: function(userId, title, chapter) {
    if (!this.unreadChapters[userId]) {
      this.unreadChapters[userId] = {};
    }
    if (!this.unreadChapters[userId][title]) {
      this.unreadChapters[userId][title] = [];
    }
    this.unreadChapters[userId][title].push(chapter);
  },

  getUnreadChapters: function(userId, title) {
    if (this.unreadChapters[userId] && this.unreadChapters[userId][title]) {
      return this.unreadChapters[userId][title];
    }
    return "No unread chapters for this title.";
  }
};

module.exports = database;