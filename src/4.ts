class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected tenants: Person[] = [];
  protected door: boolean = false;
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
      console.log("Person entered the house.");
    } else {
      console.log("Door is closed. Cannot enter.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door opened.");
    } else {
      console.log("Invalid key. Door remains closed.");
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());
house.comeIn(person);

