/**
 * Created by frycek on 12.01.17.
 */

// HANGMAN OBJECT
var hangman = {
    alphabet: "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż",
    message: "",
    messages: ["bez pracy nie ma kołaczy",
               "nie ma róży bez ognia",
               "leon zawodowiec",
                "cel uświęca środki",
                "co dwie głowy to nie jedna",
                "co za dużo to nie zdrowo",
                "dla chcącego nic trudnego",
                "do trzech razy sztuka",
                "komu w drogę temu czas",
                "lepiej późno niż wcale"],
    message_hidden: "",
    mistake_number: 0,
    sound_yes: new Audio("sounds/yes.wav"),
    sound_no: new Audio("sounds/no.wav"),

    // MISTAKE NUMBER METHOD
     /** Add 1 to mistake number */
    incrementMistakeNumber: function() {
        this.mistake_number++;
    },
    // MESSAGE METHOD
    /** Set random message from messages */
    setMessage: function() {
        this.message = this.messages[Math.floor(Math.random() * this.messages.length)];
    },

    /** Display hidden message on screen*/
    displayMessage: function() {
        document.getElementById("secretMessage").innerHTML = '<p>' + this.message_hidden + '</p>';
    },

    getMessageLength: function() {
        return this.message.length;
    },

    /** Change letter in message to underscores */
    hideMessage: function() {
        for(var i = 0; i < this.message.length; i++) {
            if (this.message.charAt(i) !== " ") {
                this.message_hidden += "_";
            }
            else {
                this.message_hidden += " ";
            }
        }
    },

    /** Return letter at position number */
    getMessageLetter: function(number) {
        return this.message.charAt(number).toLowerCase();
    },

    /** Make visible guessed letter in message_hidden  */
    showMessageLetter: function(pos, letter_num) {
        var first = this.message_hidden.slice(0, pos);
        var letter = this.alphabet.charAt(letter_num);
        var last = this.message_hidden.slice(pos + 1);
        return first + letter + last;
    },

    /** Return message */
    getMessage: function() {
        return this.message
    },

    /** Return message_hidden */
    getMessageHidden: function() {
        return this.message_hidden
    },

    /** Set new message_hidden */
    setMessageHidden: function(newMessageHidden) {
        this.message_hidden = newMessageHidden;
    },

    // PICTURE METHOD
    /** Display hangman picture on the screen according to mistake number*/
    displayPicture: function() {
        if (this.mistake_number >= 9) {
            document.getElementById("hangmanPic").innerHTML = '<img src="pics/hangman' + this.mistake_number +'.png" alt="hangman pic">';
            document.getElementById("alphabet").innerHTML = 'Przegrałeś<button onclick="start()">Jeszcze raz?</button>';
        }
        else {
            document.getElementById("hangmanPic").innerHTML = '<img src="pics/hangman' + this.mistake_number +'.png" alt="hangman pic">';
        }
    },

    // ALPHABET METHOD
    /** Display alphabet buttons on the screen*/
    displayAlphabet: function() {
        var alphabetContent = "";

        for (var i = 0; i < 35; i++) {
            var onClickElem = "letter" + i;
            alphabetContent += '<div class="letter" onclick="check('+ i +')" id="' + onClickElem + '">' + this.alphabet.charAt(i).toUpperCase() + '</div>';
            if ((i + 1) % 7 == 0) {
                alphabetContent += '<div class="clearfix"></div>';
            }
        }
        document.getElementById("alphabet").innerHTML = alphabetContent;
    },

    /** Return letter in alphabet at position "number" */
    getAlphabetLetter: function(number) {
        return this.alphabet.charAt(number);
    },

    // SOUNDS METHOD
    /** Play sound */
    playSound: function(sound) {
        if (sound === "yes"){
            this.sound_yes.play();
        }
        else if (sound === "no") {
            this.sound_no.play();
        }
        else {
        //    do nothing
        }
    },

    reset: function() {
        this.message_hidden = "";
        this.mistake_number = 0;
    }
}; // End of hangman object


// MAIN FUNCTION
function start() {
    hangman.reset();
    hangman.setMessage();
    hangman.hideMessage();
    // CREATE BOARD
    hangman.displayAlphabet();
    hangman.displayPicture();
    hangman.displayMessage();
}

// Check if letter is in the message
function check(letter_number) {
    var letterInMessage = false;
    for(var i = 0; i < hangman.getMessageLength(); i++) {
        if(hangman.getMessageLetter(i) == hangman.getAlphabetLetter(letter_number)) {
            letterInMessage = true;
            hangman.setMessageHidden(hangman.showMessageLetter(i, letter_number));
        }
    }
    if (letterInMessage) {
        hangman.playSound("yes");
        //Change color to green
        document.getElementById("letter" + letter_number).className += " correct";
        // Disable onclick function
        document.getElementById("letter" + letter_number).setAttribute("onclick",";");

    }
    else {
        hangman.playSound("no");
        // Change color to red
        document.getElementById("letter" + letter_number).className += " wrong";
        // Disable onclick function
        document.getElementById("letter" + letter_number).setAttribute("onclick",";");
        // Ad one to mistake number
        hangman.incrementMistakeNumber();
        // Refresh picture
        hangman.displayPicture();

    }
    // Refresh message
    hangman.displayMessage();

    // Check if player find the answer
    if(hangman.getMessage() === hangman.getMessageHidden()) {
        document.getElementById("alphabet").innerHTML = 'GRATULACJE WYGRAŁEŚ<button onclick="start()">Jeszcze raz?</button>';
    }
}

// start the game
window.onload = start;