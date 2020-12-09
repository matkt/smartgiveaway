import {validOptions} from "./TekuCommandLineOptionNames";

export default class TekuCommandLineOptions {
  constructor() {
    this._options = new Map();
  }

  get options() {
    return this._options;
  }

  /**
   * Add CLI options
   * @param {TekuCommandLineOption} options
   */
  addOptions(...options) {
   options.forEach(option => this.addOption(option));
  }

  /**
   * Add CLI option
   * @param {TekuCommandLineOption} option
   */
  addOption(option) {
    if (!validOptions.includes(option.name)) {
      throw `invalid option provided: ${option}`;
    }
    this.options.set(option.name, option);
  }
}
