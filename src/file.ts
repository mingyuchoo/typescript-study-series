import fs from 'fs';
import path from 'path';

export function fileRead() {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, './data.txt'), 'utf8');
    return data;
  } catch (error) {
    return error;
  }
}
