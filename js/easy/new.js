// console.log('one');
// console.log('two');
// setTimeout(function() {
//     console.log('three');
// }, 2000)
// console.log('four');

// const test = async () => {
//     let tt = console.log('Five');
//     return tt;
// }

// test();


let arr = ['ali', 'ahmed', 'yara', 'sara', 'yassin', 'amal'];

function test(arr)
{
    const x = [];
    let i = 0;
    let j = 0;
    while (i < arr.length)
    {
        if (arr[i][0] == 'a')
        {
            x[j] = arr[i];
            j++;
        }
        i++;
    }
    return x;
}

console.log(test(arr));

// console.log(typeof(length));