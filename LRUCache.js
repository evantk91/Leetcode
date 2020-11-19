class LRUCache {
    constructor(capacity) {
        this.cache = {};
        this.queue = new Queue();
        this.capacity = capacity;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numElements = 0;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

Queue.prototype.enqueue = function(value) {
    let newNode = new Node(value);

    if(this.isEmpty()) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }

    this.numElements += 1;
}

Queue.prototype.dequeue = function() {
    if(this.isEmpty()) {
        return null;
    }
    let value = this.head.value;
    this.head = this.head.next;
    this.numElements -= 1;
    return value;
}

Queue.prototype.toArray = function() {
    let node = this.head;
    let output = [];
    while(node) {
        output.push(node.value);
        node = node.next;
    }
    return output;
}

Queue.prototype.isEmpty = function() {
    return this.numElements === 0;
}

LRUCache.prototype.put = function(key, value) {
    //if cache is full
    if(this.queue.numElements === this.capacity) {
       //if key is not in the queue 
       if(!this.cache[key]) {
          //enqueue the key
          this.queue.enqueue(key);
          //dequeue the least recently used key
          delete this.cache[this.queue.dequeue()];
       }        
       //update cache with new key
       this.cache[key] = value;
    } else {
       //if key is not in the queue 
       if(!this.cache[key]) {
          this.queue.enqueue(key);
       } 
       
       //update cache with new value
       this.cache[key] = value;
    }
}

LRUCache.prototype.get = function(key) {
   if(this.cache[key]) {
      return this.cache[key];
   } else {
      return null;
   }
}

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();

let cache = new LRUCache(3);
cache.put(1, 1);
cache.put(1, 4);
cache.put(2, 5);
cache.put(2, 6);
cache.put(3, 1);
cache.put(5, 12);
console.log(cache.get(2));

console.log(cache.cache);
console.log(cache.queue.toArray());