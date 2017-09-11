var fs = require('fs');

module.exports = BasicFlash;

function BasicFlash(f, b) {
    this.f = front;
    this.b = back;

    this.create = function() {
        var content = {
            front: this.front,
            back: this.back,
            type: 'basic'
        };

        fs.appendFile('log.txt', JSON.stringify(data) + ';', 'utf8', function(error) {
            if (error) throw error;
        });
    };
}