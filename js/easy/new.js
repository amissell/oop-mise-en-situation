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


// let arr = ['ali', 'ahmnnnned', 'yara', 'sara', 'yassin', 'amal'];

// function test(arr)
// {
//     const x = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr.length)
//     {
//         if (arr[i][0] == 'a')
//         {
//             x[j] = arr[i];
//             j++;
//         }
//         i++;
//     }
//     return x;
// }

// console.log(test(arr));

// console.log(typeof(length));

function main()
{
let str = "abc bcdef ghi lmnopq"

function sortStringToArray(arr)
{
    let i = 0;
    while(i < arr.length)
    {
        let  j = 0;
        while (j < arr.length - 1)
            {
                if (arr[j].length < arr[j + 1].length)
                {
                    let x = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = x;
                }
                j++;
            }
            i++;
    }
    return arr;
}


function myCostumSplite(text, separator)
{

    const result = [];
    let current = "";
    let index = 0;
    for(let i = 0; i < text.length; i++)
    {
        if (text[i] !== separator)
        {
            current = current + text[i];
        }
        else
        {
            result[index] = current;
            index++;
            current = "";
        }
    }
    result[index] = current;
    return result;
}
let word = myCostumSplite(str, " ");
let sortword = sortStringToArray(word);

console.log(sortword);
}

main();
