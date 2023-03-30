class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  insert(element) {
    this.count++;

    if (this.root === null) {
      this.root = new Node(element);
    } else {
      this.#insertNode(this.root, element);
    }
  }

  #insertNode(node, element) {
    //if < go to left
    if (element < node.element) {
      //found null left node
      if (node.left === null) {
        node.left = new Node(element);
        return;
      } else {
        //if dont find recursive call function to left
        this.#insertNode(node.left, element);
      }
      //if > go to right
    } else if (element > node.element) {
      //found null right node
      if (node.right === null) {
        node.right = new Node(element);
        return;
      } else {
        //if dont find recursive call function to right
        this.#insertNode(node.right, element);
      }
    }
  }

  remove(node, element) {}

  min() {
    let current = this.root;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current.element;
  }

  max() {
    let current = this.root;
    while (current != null && current.right != null) {
      current = current.right;
    }

    return current.element;
  }

  contains(element) {
    return this.#contaisNode(this.root, element);
  }

  #contaisNode(node, element) {
    if (node == null) {
      return false;
    }
    if (element == node.element) {
      return true;
    } else if (element < node.element) {
      return this.#contaisNode(node.left, element);
    } else if (element > node.element) {
      return this.#contaisNode(node.right, element);
    }
  }

  //depth first search
  //In-Order: left -> root -> right
  inOrder() {
    let result = [];
    this.#inOrderTraverse(this.root, result);
    return result;
  }

  #inOrderTraverse(node, result) {
    if (node.left) this.#inOrderTraverse(node.left, result);
    result.push(node.element);
    if (node.right) this.#inOrderTraverse(node.right, result);
  }

  //pre-order: node -> left -> right
  preOrder() {
    let result = [];
    this.#preOrderTraverse(this.root, result);
    return result;
  }

  #preOrderTraverse(node, result) {
    result.push(node.element);
    if (node.left) this.#preOrderTraverse(node.left, result);
    if (node.right) this.#preOrderTraverse(node.right, result);
  }

  //post-order: left -> right -> root
  postOrder() {
    let result = [];
    this.#postOrderTraverse(this.root, result);
    return result;
  }

  #postOrderTraverse(node, result) {
    if (node.left) this.#postOrderTraverse(node.left, result);
    if (node.right) this.#postOrderTraverse(node.right, result);
    result.push(node.element);
  }
}

const bst = new BST();

bst.insert(20);
bst.insert(1);
bst.insert(56);
bst.insert(5);
bst.insert(46);
bst.insert(49);

console.log(bst.size());

console.log(bst);
console.log(bst.postOrder());
console.log(bst.contains(5));
