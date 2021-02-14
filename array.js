const MEMORY = require('./memory');

let Memory = new MEMORY();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(val) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, val);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();
  // Add an item to the array
  arr.push(3);
  console.log(arr);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));
}

main();

// 1. Implement an Array class from scratch.
// Done.

// 2. Explore the push() method
//
// What is the length, capacity and memory address of your array?
// length: 1
// _capacity: 3
// ptr: 0
//
// What is the length, capacity and memory address of your array?
// Explain the result of your program after adding the new lines of code (push()).
// length: 6
// _capacity: 12
// ptr: 3
// Pushed numbers are added to the beginning of the array

// 3. Exploring the pop() method
//
// What is the length, capacity, and address of your array?
// Explain the result of your program after adding the new lines of code (pop()).
// length: 3
// _capacity: 12
// ptr: 3
// Values are added to the array as empty spaces,
// length has decreased by 3 because of pop()

// 4. Understanding more about how arrays work
//
// Print the 1st item in the array arr.
// 3
//
// Print this 1 item that you just added (arr.push("tauhida")).
// What is the result? Can you explain your result?
// NaN.
//
// What is the purpose of the _resize() function in your Array class?
// The _resize() function in this Array class is used to allocate a new,
// larger chunk of memory, copy any existing values from the old to the
// new chunk, and free the old chunk.
