import contactsAction from "./contacts.js";
import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsAction.listContacts();
      console.log(contacts);
      break;

    case "get":
      const getContact = await contactsAction.getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const addContact = await contactsAction.addContact(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      const removeContact = await contactsAction.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
