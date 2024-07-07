const preferences = {
  userPreferences: {},

  setUserPreference: function(userId, preference) {
    this.userPreferences[userId] = preference;
  },

  getUserPreference: function(userId) {
    return this.userPreferences[userId] || {};
  },

  saveUserPreferences: function(userId) {
    // Code to save user preferences to database or file
  },

  loadUserPreferences: function(userId) {
    // Code to load user preferences from database or file
  },

  setDefaultPreferences: function(userId) {
    this.setUserPreference(userId, {
      textSize: 'medium',
      backgroundColor: 'white',
      theme: 'light',
      // Add more default preferences as needed
    });
  },

  updatePreference: function(userId, preferenceToUpdate) {
    const userPreference = this.getUserPreference(userId);
    this.setUserPreference(userId, { ...userPreference, ...preferenceToUpdate });
  },

  resetPreferences: function(userId) {
    this.setUserPreference(userId, {});
  },
};

module.exports = preferences;