class MySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    if (this.collection.indexOf(element) > -1) {
      return true;
    }
    return false;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const indexElement = this.collection.indexOf(element);
      this.collection.splice(indexElement, 1);
    }
  }
  size() {
    return this.collection.length;
  }

  values() {
    return this.collection;
  }

  clear() {
    return (this.collection = []);
  }

  union(otherSet) {
    const unionSet = new MySet();

    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new MySet();

    this.values().forEach((value) => {
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new MySet();

    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (otherSet.size() > this.size()) {
      return false;
    } else {
      let isSubset = true;
      otherSet.values().every((value) => {
        if (!this.has(value)) {
          isSubset = false;
          return false;
        }
        return true;
      });
      return isSubset;
    }
  }
}
