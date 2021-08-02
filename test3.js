let inputString = prompt('Please input any string');
let vowels = ['a', 'o', 'e', 'i', 'u'];
let count = 0;
let stringsVowel = [];

function checkVowel(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                stringsVowel.push(string[i]);
                count++;
            }
        }
    }

    if (stringsVowel.length == 0) {
        document.write('Your input string: ' + '"' + string + '"' + ' dont contain any vowel')
    } else {
        document.write('Your input string: ' + '"' + string + '"' + ' have ' + count +' vowel(s) is/are ' + stringsVowel.join(", "))
    }
}

checkVowel(inputString);