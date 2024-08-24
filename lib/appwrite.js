import { Account, Avatars, Client, ID } from "react-native-appwrite";

export const appWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.chaudhuree.aora",
  projectId: "66c9a8ba00014489437b",
  databaseId: "66c9aa12003b35388661",
  userCollectionId: "66c9aa320006660b0507",
  videosCollectionId: "66c9aa54001ab2a46513",
  storageId: "66c9abf9001ddeacc089",
};

// Init your React Native SDK
const client = new Client();
const avatars = new Avatars(client);

client
  .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appWriteConfig.projectId) // Your project ID
  .setPlatform(appWriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = async (email,password,username) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if(!newAccount){
      throw Error;
      
    }
    const avatarUrl = await avatars.getInitials(username);
    await signIn(email, password);
  } catch (error) {
    console.log('error', error.message);
    
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log('error', error.message);
    
    throw new Error(error);
  }
};
