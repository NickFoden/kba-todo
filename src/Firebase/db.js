import { db } from "../config";

export const doCreateUser = (id, email, username) => {
  db.ref(`users/${id}`).set({
    email,
    uid: id,
    userType: "guest",
    username
  });
};

export const onceGetUsers = () => db.ref("users").once("value");
