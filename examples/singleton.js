class Parser {
  // singleton instance
  static _PARSER = null;

  /* constructor is supposed to be private but private members 
  can only added via closure / module pattern */
  constructor() {
    // some code to create object
  }

  static getParserInstance() {
    if (this._PARSER === null) {
      // created once
      this._PARSER = new Parser();
    }
    return this._PARSER;
  }

  stringify(obj) {
    // ...
    return JSON.stringify(obj);
  }
  // and many other methods ...
}

const parsor1 = Parser.getParserInstance();
const parsor2 = Parser.getParserInstance();

console.log("Singleton: " + (parsor1 === parsor2));
// true
// it means a single object created everytime
