import TekuCommandLineOptions from "./launcher/TekuCommandLineOptions";

const YAML = require('json-to-pretty-yaml');

export default class TekuLauncher {
  constructor() {
  }

  /**
   * Apply template to data
   * @param {TekuCommandLineOptions} commandLineOptions
   */
  buildConfiguration(commandLineOptions) {
    const config = this.defaultTemplateOptions();
    commandLineOptions.options.forEach((option, key) => {
      config[key] = option.value;
    });
    return YAML.stringify(config);
  }


  defaultTemplateOptions() {
    return {
    }
  }
}
