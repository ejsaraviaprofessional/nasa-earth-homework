import fs from 'fs';

export const saveFile = async (content: any, filePath: string): Promise<boolean> => {
  try {
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    throw `Image not saved`;
  }
};
