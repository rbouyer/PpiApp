import * as FileSystem from 'expo-file-system';

// Get the base path for saved state files
const STATE_FILE_PREFIX = 'visita_';
const STATE_FILE_EXTENSION = '.json';


// Directory and file path builder
const getFilePath = (id) => {
  // Use DocumentDirectory for persistent, app-specific storage
  return `${FileSystem.documentDirectory}visita_${id}.json`;
};

// Save or overwrite object state by numeric ID
const saveObjectState = async (id, stateObject) => {
  const filePath = getFilePath(id);
  try {
    const stateString = JSON.stringify(stateObject, null, 2); // Pretty-printed JSON
    await FileSystem.writeAsStringAsync(filePath, stateString, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    console.log(`State saved for ID ${id} at ${filePath}`);
  } catch (error) {
    console.error('Error saving object state:', error);
    //throw error;
  }
};

// Load object state by ID
const loadObjectState = async (id) => {
  const filePath = getFilePath(id);
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);
    if (!fileInfo.exists) {
      console.warn(`No saved state found for ID ${id}`);
      return null;
    }

    const stateString = await FileSystem.readAsStringAsync(filePath, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    return JSON.parse(stateString);
  } catch (error) {
    console.error('Error loading object state:', error);
    throw error;
  }
};

// Optional: Delete object state by ID
const deleteObjectState = async (id) => {
  const filePath = getFilePath(id);
  try {
    const fileInfo = await FileSystem.getInfoAsync(filePath);
    if (fileInfo.exists) {
      await FileSystem.deleteAsync(filePath);
      console.log(`State deleted for ID ${id}`);
    }
  } catch (error) {
    console.error('Error deleting object state:', error);
    throw error;
  }
};

// List all saved object IDs by scanning the document directory
// This assumes files are named like: visita_123.json, visita_1.json, etc
const listSavedObjectIds = async () => {
  try {
    const directory = FileSystem.documentDirectory;
    if (!directory) {
      console.error('Document directory is not available');
      return [];
    }

    // Read all files in the document directory
    const files = await FileSystem.readDirectoryAsync(directory);

    const ids = [];
    for (const file of files) {
      // Match files like: visita_123.json, visita_1.json
      const match = file.match(/^visita_(\d+)\.json$/);
      if (match) {
        const id = parseInt(match[1], 10); // Convert to number
        ids.push(id);
      }
    }

    // Sort numerically (optional)
    return ids.sort((a, b) => a - b);
  } catch (error) {
    console.error('Error listing saved object IDs:', error);
    throw error;
  }
};

const fileExists = async (id) => {
  const filePath = getFilePath(id);
  const info = await FileSystem.getInfoAsync(filePath);
  return info.exists;
};

export {
  saveObjectState,
  loadObjectState,
  deleteObjectState,
  listSavedObjectIds,
  getFilePath,
  fileExists,
};