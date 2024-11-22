import LinkedList from "./LinkedList.js";

const ll = new LinkedList();

ll.append("dog");
ll.append("cat");
ll.append("parrot");
ll.append("hamster");
ll.append("snake");
ll.append("turtle");

console.log(`${ll.toString()}`)

console.log(`Value is: ${ll.getAt(4)}`)

console.log(`The tail is: ${ll.tail()}`)

console.log(`The head is: ${ll.root()}`)

console.log(ll.contains("snake"))

console.log(ll.find("turtle"))

console.log(`Size of the Linked List: ${ll.size()}`)