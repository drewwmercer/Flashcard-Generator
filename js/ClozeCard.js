var fs = require('fs');

module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    this.text = text;
    cloze = this.cloze;
    this.clozeDelete = this.text.replace(this.cloze, '_______');
    this.create = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDelete: this.clozeDelete,
            type: 'cloze'
        };
        fs.appendFile('log.txt', JSON.stringify(data) + ';', 'utf8', function(error) {
                if (error) throw error;
            }
        }
    }