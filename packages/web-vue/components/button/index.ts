import type { App } from 'vue';
import _Button from './button.vue';

const Button = Object.assign(_Button, {
  install: (app: App) => {
    app.component(_Button.name, _Button);
  },
});

export type ButtonInstance = InstanceType<typeof _Button>;
export type { ButtonProps } from './interface';

export default Button;
