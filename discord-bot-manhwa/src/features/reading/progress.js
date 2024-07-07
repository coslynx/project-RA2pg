const readingProgress = {
  usersProgress: {},

  trackReadingProgress: function(userId, title, chapter) {
    if (!this.usersProgress[userId]) {
      this.usersProgress[userId] = {};
    }
    if (!this.usersProgress[userId][title]) {
      this.usersProgress[userId][title] = [];
    }
    this.usersProgress[userId][title].push(chapter);
  },

  getReadingProgress: function(userId, title) {
    if (this.usersProgress[userId] && this.usersProgress[userId][title]) {
      return this.usersProgress[userId][title];
    }
    return [];
  },

  displayProgress: function(userId) {
    let progressMsg = "Your Reading Progress:\n";
    if (this.usersProgress[userId]) {
      Object.keys(this.usersProgress[userId]).forEach(title => {
        progressMsg += `Title: ${title}\n`;
        progressMsg += `Chapters Read: ${this.usersProgress[userId][title].join(', ')}\n\n`;
      });
    } else {
      progressMsg += "No progress yet.";
    }
    return progressMsg;
  }
};

module.exports = readingProgress;