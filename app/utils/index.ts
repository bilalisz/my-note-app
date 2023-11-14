export function generateUniqueId() {
    const timestamp = new Date().getTime();
    const random = Math.random().toString(36).substring(2, 10); // Using random alphanumeric characters
  
    return `${timestamp}${random}`;
  }