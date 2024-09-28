// Using object in collision is POSSIBLE
// Time complexity is better

class HashTable {
  constructor(size) {
    this.table = {};
    this.size = size;
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = {
        [key]: value,
      };
    } else {
      this.table[index][key] = value;
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const result = this.table[index][key];
      if (result) {
        return result;
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const result = this.table[index][key];

      if (result) {
        delete this.table[index][key];
        return result;
      }
    }

    return undefined;
  }

  display() {
    console.log(this.table);
  }
}

const hashTable = new HashTable(10);

hashTable.set("first_name", "Jeremy");
hashTable.set("last_name", "Mabilangan");
hashTable.set("age", 25);
hashTable.set("_namefirst", "JerJer");
hashTable.set("name_first", "Jerem");
hashTable.display();

console.log(hashTable.remove("_namefirst"));
console.log(hashTable.get("_namefirst"));
hashTable.display();
