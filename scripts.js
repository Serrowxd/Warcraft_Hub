// Scripts

// This gets current time for the user
// Needs edge case for unknown location, default to GMT
function getLocalTime() {
  return new Date().toLocaleTimeString();
};
