import LinkedList from "./LinkedList.mjs";

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class HashTableSeparateChaining {
  constructor(buckets) {
    this.table = new Array(buckets);
    this.count = 0;
  }
  _loseloseHashCode(key) {
    const tableKey = key.toString();

    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  _hashCode(key) {
    return this._loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const index = this._hashCode(key);

      if (this.table[index] == null) {
        this.table[index] = new LinkedList();
      }

      this.table[index].push(new ValuePair(key, value));
      this.count++;

      return true;
    }
    return false;
  }

  get(key) {
    const index = this._hashCode(key);
    const linkedList = this.table[index];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hashCode(key);
    const linkedList = this.table[index];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();

      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(linkedList.indexOf(current.element));
          console.log(linkedList.size());

          if (linkedList.size() < 1) {
            delete this.table[index];
          }
          this.count--;
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  getTable() {
    return this.table;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear(buckets) {
    this.table = new Array(buckets);
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`;
    }
    return objString;
  }
}

const hst = new HashTableSeparateChaining(50);

hst.put("maria", 32);
hst.put("marcio", 32);
hst.put("fernanda", 42);
hst.put("lucia", 32);

hst.remove("maria");
console.log(hst);
