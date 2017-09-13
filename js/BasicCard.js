var frontArray = [];
var backArray = [];
var fullBasicArray = [];

function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;

        this.push = () => {
            frontArray.push(this.front);
            backArray.push(this.back);
        }
    } else {

        return new BasicCard(front, back)
    }
}
var george = BasicCard("Who was the president (the first one from 1789-1797) who lived in Mount Vernon?", "Washington"),
    andrew = BasicCard("What president succeeded Abraham Lincoln when he was assassinated?", "Johnson"),
    brown = BasicCard("Whose raid on Harper's Ferry led to further tensions before the war?", "Brown"),
    phila = BasicCard("In what city was the Declaration of Independence signed?", "Philadelphia");
    trump = BasicCard("Who is the current President of the US?", "Trump");

fullBasicArray.push(frontArray);
fullBasicArray.push(backArray);
george.push();
andrew.push();
brown.push();
phila.push();
trump.push();

// module.exports = fullBasicArray;
module.exports = BasicCard;
