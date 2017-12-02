"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactListController_1 = require("./controller/ContactListController");
var controller = new ContactListController_1.ContactListController();
controller.initialize();
if (module.hot) {
    module.hot.accept();
}
