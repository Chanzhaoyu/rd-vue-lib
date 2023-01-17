import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import paths from '../../utils/paths';

const lessGenerate = () => {
  let lessContent = `@import './style/index.less';\n`;
  const lessFiles = glob.sync('**/style/index.less', {
    cwd: paths.components,
    ignore: ['style/index.less'],
  });
  lessFiles.forEach((value) => {
    lessContent += `@import './${value}';\n`;
  });

  fs.outputFileSync(path.resolve(paths.components, 'index.less'), lessContent);

  globalThis.console.log('less generate success');
};

export default lessGenerate;
