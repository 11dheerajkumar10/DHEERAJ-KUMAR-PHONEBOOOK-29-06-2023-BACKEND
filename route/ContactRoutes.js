const express = require("express")
const {contactDataShow, addContact, updateContact, contactView} = require("../controller/Contact")

const ContactRoutes = express.Router()

ContactRoutes.get("/", contactDataShow )
ContactRoutes.post("/", addContact)
ContactRoutes.put("/:phone_number", updateContact)
ContactRoutes.get("/view/:phone_number", contactView)

module.exports = {ContactRoutes}