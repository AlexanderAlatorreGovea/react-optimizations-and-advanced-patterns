class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function (val) {
    return new Memento(val);
  },
  restore: function (memento) {
    return memento.value;
  },
};

class Keeper {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const keeper = new Keeper();
keeper.addMemento('alex')
keeper.addMemento('pedro')
keeper.addMemento('mitchell')

originator.store(keeper.values)
originator.restore('alex')
originator.restore('pedro')

console.log(keeper)

export { originator, Keeper };
