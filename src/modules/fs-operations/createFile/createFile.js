import path from 'node:path';
import { open as fsPromisesOpen } from 'node:fs/promises';

import { checkName } from '../../../common/helpers/helper.js';

export const createFile = async (fileName, currentDirectory) => {
  checkName(fileName);
  const filePath = path.join(currentDirectory, fileName);
  const fd = await fsPromisesOpen(filePath, 'w');
  fd.close();
};
