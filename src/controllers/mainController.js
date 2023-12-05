const mainController = {
    home:(req, res) => res.send("Home"),
    contact:(req, res) => res.send("Contact"),
    abaut:(req, res) => res.send("About"),
    faqs:(req, res) => res.send("Faqs"),
}


module.exports = mainController;