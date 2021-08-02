let inputString = prompt('Please input any string');
let vowels = ['a', 'o', 'e', 'i', 'u'];
let count = 0;

function checkVowel(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                count++;
            }
        }
    }

    if (count == 0) {
        document.write('Your input string: ' + '"' + string + '"' + ' dont contain any vowel')
    } else {
        document.write('Your input string: ' + '"' + string + '"' + ' have ' + count + ' vowels')
    }
}

checkVowel(inputString);