/*
Filename: ComplexCodeExample.js
Content: This code demonstrates a sophisticated and complex example of a real-time chat application using JavaScript.

Note: This code is a simplified version with dummy implementation for the sake of demonstration. A real-world chat application involves many more features and complex logic.

*/

// Simple implementation of a Chat class
class Chat {
  constructor() {
    this.users = [];
    this.messages = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`${user.name} has joined the chat.`);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      console.log(`${user.name} has left the chat.`);
    }
  }

  sendMessage(sender, receiver, message) {
    this.messages.push({ sender, receiver, message });
    console.log(`${sender.name} sent a message to ${receiver.name}: "${message}"`);
  }

  showChatHistory() {
    console.log("Chat History:");
    this.messages.forEach((message) => {
      console.log(`${message.sender.name} -> ${message.receiver.name}: ${message.message}`);
    });
  }
}

// User class to represent a chat user
class User {
  constructor(name) {
    this.name = name;
  }
}

// Creating instances of users
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

// Creating instance of the chat
const chat = new Chat();

// Adding users to the chat
chat.addUser(user1);
chat.addUser(user2);
chat.addUser(user3);

// Sending messages between users
chat.sendMessage(user1, user2, "Hello Bob!");
chat.sendMessage(user2, user1, "Hi Alice!");
chat.sendMessage(user3, user1, "Hey Alice, how are you?");
chat.sendMessage(user1, user3, "I'm good, thanks!");

// Removing a user from the chat
chat.removeUser(user2);

// Displaying the chat history
chat.showChatHistory();

// Output:
// Alice has joined the chat.
// Bob has joined the chat.
// Charlie has joined the chat.
// Alice sent a message to Bob: "Hello Bob!"
// Bob sent a message to Alice: "Hi Alice!"
// Charlie sent a message to Alice: "Hey Alice, how are you?"
// Alice sent a message to Charlie: "I'm good, thanks!"
// Bob has left the chat.
// Chat History:
// Alice -> Bob: Hello Bob!
// Bob -> Alice: Hi Alice!
// Charlie -> Alice: Hey Alice, how are you?
// Alice -> Charlie: I'm good, thanks!