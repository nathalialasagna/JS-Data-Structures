class HashTable {
  constructor(buckets) {
    this.table = new Array(buckets);
    this.count = 0;
  }

  #loseloseHashCode(key) {
    const tableKey = key.toString();

    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  djb2HashCode(key) {
    const tableKey = key.toString();
    let hash = 5381;

    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  #hashCode(key) {
    return this.#loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const index = this.#hashCode(key);

      this.table[index] = [key, value];

      this.count++;

      return true;
    }
    return false;
  }

  get(key) {
    const index = this.#hashCode(key);
    const valuePair = this.table[index];

    return valuePair == null ? undefined : valuePair;
  }

  remove(key) {
    const index = this.#hashCode(key);
    const valuePair = this.table[index];

    if (valuePair != null) {
      delete thus.table[index];

      this.count--;
      return true;
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
    let objString = "";
    for (let i = 0; i < keys.length; i++) {
      objString += `{${keys[i]} => ${this.table[keys[i]].toString()}}\n`;
    }
    return objString;
  }
}
