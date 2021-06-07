import { writable } from "svelte/store";

// contains the list of notifications
export const notifications_list = writable([
  {
    msg: "alert message",
    type: "alert",
    pk: Symbol() // it is a unique value for this notification
  },
  {
    msg: "warning message",
    type: "warning",
    pk: Symbol()
  },
  {
    msg: "success message",
    type: "success",
    pk: Symbol()
  },
]);