var questionArray = [],
    clozeArray = [],
    fullCLozeArray = [];

function ClozeCard(question, cloze) {
    if (this instanceof ClozeCard) {
        this.question = question;
        this.cloze = cloze;
        this.preparedQuestion = (this.question).replace(this.cloze, "......");
        this.push = () => {
            questionArray.push(this.preparedQuestion);
            clozeArray.push(this.cloze);
        };
    } else {
        return new ClozeCard(question, cloze);
    }
}

var jamestown = ClozeCard("Jamestown, the first permanent English settlement, was founded in 1607.", "Jamestown"),
    louisiana = ClozeCard("President Thomas Jefferson purchased the Louisiana Territory from France in 1803.", "Louisiana"),
    yorktown = ClozeCard("The British defeat at Yorktown, Virginia by George Washington’s troops signaled the end of the American Revolution.", "Yorktown"),
    gettysburg = ClozeCard("The Battle of Gettysburg was the turning point in the Civil War for the North.  Confederate troops were forced to retreat and never invaded the North again.", "Gettysburg"),
    separation = ClozeCard("Separation of Powers is a system in which each branch of government has its own powers.", "Separation"),
    democracy = ClozeCard("A Democracy is a form of government that is run for and by the people, giving people the supreme power.", "Democracy"),
    monroe = ClozeCard("The Monroe Doctrine was a foreign policy statement delivered by President James Monroe stating that 1) the U.S. would not interfere in European affairs, and 2) that the western hemisphere was closed to colonization and/ or interference by European nations.", "Monroe");

jamestown.push();
louisiana.push();
yorktown.push();
gettysburg.push();
separation.push();
democracy.push();
monroe.push();
fullCLozeArray.push(questionArray);
fullCLozeArray.push(clozeArray);

module.exports = fullCLozeArray;
