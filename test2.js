let numbers = [1, 5, 6, 2, 3, 7, 8, 9];
let isInArray = false;
let index;
let number = parseInt(prompt('Type the number you want to find'))

function findNum(number, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            isInArray = true;
            index = i;
            break;
        } else {
            isInArray = false;
        }
    }
    if (isInArray) {
        document.write(number + ' is in the array at position ' + index);
    } else {
        document.write(number + ' is not in the array');
    }
}

findNum(number, numbers)
