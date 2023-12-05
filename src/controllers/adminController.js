const adminController = {
    admin:(req, res) => res.send("Admin"),
    create:(req, res) => res.send("Create"),
    edit:(req, res) => res.send("Edit"),
    delete:(req, res) => res.send("Delete"),
}


module.exports = adminController;