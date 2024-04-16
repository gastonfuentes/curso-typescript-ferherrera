"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villanos = 20;
    if (avengers < villanos) {
        console.log('estamos en el horno');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = 123;
    console.log({ avengers });
})();
