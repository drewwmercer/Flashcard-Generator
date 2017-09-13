var UserBasicCard = function(front, back) {
    if (this instanceof UserBasicCard) {
        this.front = front;
        this.back = back;
    } else {
        return new UserBasicCard(front, back)
    }
}

module.exports = UserBasicCard;
