var UserClozeCard = function(question, cloze) {
    if (this instanceof UserClozeCard) {
        this.question = question;
        this.cloze = cloze;
        this.preparedQuestion = (this.question).replace(this.cloze, ".........");
    } else {
        return new UserClozeCard(question, cloze);
    }
}

module.exports = UserClozeCard;
