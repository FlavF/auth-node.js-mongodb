// Controller page Error
exports.getError404 = (req, res, next) => {
	res.status(404).render("pages/error");
};
