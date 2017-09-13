var inquirer = require('inquirer');
var fullBasicArray = require('./BasicCard');
var fullClozeArray = require('./ClozeCard');
var UserBasicCard = require('./UserBasicCard');
var UserClozeCard = require('./UserClozedCard');
var questionCount = 0;
var correctCount = 0;
var createPlay;
var createCardType;
var inqQuestion;
var inqAnswer;
var userInqAnswerArray = [];
var userQuestionArray = [];

