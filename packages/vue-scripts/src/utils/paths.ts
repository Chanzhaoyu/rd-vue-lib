import path from 'path';

const root = process.cwd();

function resolvePath(...relativePath: any[]) {
  return path.resolve(root, ...relativePath);
}

const components = resolvePath('./components');

export default {
  resolvePath,
  root,
  components,
};
