// with normal functon

let str = 'VIkas Rathod';

function cntVowel(str){
    str = str.toLowerCase();
    let cnt = 0;
    for(let charecter of str){        if(charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u'){
            cnt++;
        }
    }
    return cnt;
}

let ans = cntVowel(str);
console.log(`Number of vowels in given string ${str} is : ${ans}`);


// with arrow function

let str2 = 'Ariana';

const cntVowel2 = (str) => {
    str = str.toLowerCase();
    let cnt = 0;
    for(let charecter of str){        if(charecter === 'a' || charecter === 'e' || charecter === 'i' || charecter === 'o' || charecter === 'u'){
            cnt++;
        }
    }
    return cnt;
}

let ans2 = cntVowel2(str);
console.log(`Number of vowels in given string ${str2} is : ${ans}`);
