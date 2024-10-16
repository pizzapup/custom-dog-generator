import {useState} from "react";
import {database} from "./firebaseConfig";
import {ref, push, child, update, remove, onValue} from "firebase/database";
const db = database;

export function writeData(values, dbTarget, ...props) {
  const postKey = props.postKey
    ? props.postKey
    : push(child(ref(db), `${dbTarget[0]}`)).key;
  const postData = {...values};
  const updates = {};
  dbTarget.map((location) => (updates[`/${location}/` + postKey] = postData));
  return update(ref(db), updates)
    .then(() => {
      console.log("Data saved successfully!" + console.table(values));
    })
    .catch((error) => {
      console.log("The write failed...");
    });
}

export function updateData(values, postKey, dbTarget) {
  const updates = {};
  dbTarget.map((location) => (updates[`/${location}/${postKey}`] = values));
  return update(ref(db), updates)
    .then(() => {
      console.log("Data saved successfully!" + console.table(values));
    })
    .catch((error) => {
      console.log("The write failed...");
    });
}

export function deleteData(postKey, dbTarget) {
  const updates = {};
  dbTarget.map((location) => remove(ref(db, `/${location}/${postKey}`)));
  return update(ref(db), updates)
    .then(() => {
      console.log("Data removed successfully!");
    })
    .catch((error) => {
      console.log("The write failed...");
    });
}
