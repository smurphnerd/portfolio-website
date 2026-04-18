import PocketBase from "pocketbase";

const pocketbaseUrl =
  process.env.REACT_APP_POCKETBASE_URL ?? "https://db.smurphnerd.com";

export const pb = new PocketBase(pocketbaseUrl);

export const POCKETBASE_URL = pocketbaseUrl;
