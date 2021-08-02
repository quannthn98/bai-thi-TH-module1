let root;

function check(a, b) {
    if (a === 0) {
        document.write('This equation dont have any root');
    } else {
        if (b === 0) {
            document.write('This equation has unlimited Root')
        } else {
            root = (-b) / a
            document.write('This equation has 1 root is: ' + root)
        }
    }
}

check(5, 8)

