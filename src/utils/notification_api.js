import { notifications_list } from "../stores/notifications";

export default class NotificationAPI {
  static _notify(type, msg) {
    notifications_list.update(val => {
      return [...val, {
        type, msg, pk: Symbol()
      }];
    });
  }

  static delete(pk) {
    notifications_list.update(val => {
      return val.filter(v => {
        return (v.pk != pk);
      });
    });
  }

  static alert(msg) {
    NotificationAPI._notify("alert", msg);
  }

  static success(msg) {
    NotificationAPI._notify("success", msg);
  }

  static warning(msg) {
    NotificationAPI._notify("warning", msg);
  }
}