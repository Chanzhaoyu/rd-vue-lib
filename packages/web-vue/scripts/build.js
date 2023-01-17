// eslint-disable-next-line @typescript-eslint/no-var-requires
const { buildComponent, buildStyle } = require('@rd/vue-scripts');

buildComponent({ umd: false });
buildStyle({ material: false });
