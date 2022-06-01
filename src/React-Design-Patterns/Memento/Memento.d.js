class Originator {
  /**
   * Create an originator.
   */
  constructor(content) {
    this._content = content;
  }
  /**
   * Get the originator content.
   * @return {array} The originator content value.
   */
  get content() {
    return this._content;
  }
}

class CareTaker {
  constructor() {
    this._content = [];
  }

  setValue(value) {
    this._content.push(value);
    return this._content;
  }

  getValues() {
    return this._content;
  }

  save() {
    return new Originator(this._content);
  }

  restore(originator) {
    this._content = originator.content;
  }
}

const careTaker = new CareTaker();

careTaker.setValue("alex");
careTaker.setValue("christian");
careTaker.setValue("pedro");
