import fs from 'fs';
import path from 'path';

export function fileRead() {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, './data.txt'), 'utf8');
    const json = data.split('\n').map((record) => {
      const item = record.split('%|;');
      return {
        Message: item[0],
        category: item[1],
        group: item[2],
      };
    });
    return json;
  } catch (error) {
    return error;
  }
}
