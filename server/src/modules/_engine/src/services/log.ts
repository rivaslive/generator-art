const clc = require('cli-color');

type LogType = 'default' | 'error' | 'warning' | 'info' | 'success';

type Options = {
  type: LogType;
  isBold: boolean;
};

const defaultOptions: Options = {
  type: 'default',
  isBold: false,
};

type ResolveLog = (options: Options) => {
  [key in LogType]: (txt: string) => string;
};

const resolveLog: ResolveLog = ({ isBold }) => {
  if (isBold) {
    return {
      default: clc.whiteBright.bold,
      error: clc.redBright.bold,
      warning: clc.yellowBright.bold,
      info: clc.blue.bold,
      success: clc.green.bold,
    };
  }

  return {
    default: clc.whiteBright,
    error: clc.redBright,
    warning: clc.yellowBright,
    info: clc.blue,
    success: clc.green,
  };
};

export default function log(text: string, options?: Partial<Options>) {
  const opts = {
    ...defaultOptions,
    ...options,
  };
  return console.log(resolveLog(opts)[opts.type](text));
}
