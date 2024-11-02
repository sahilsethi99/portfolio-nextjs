// // {
// //     "root":
// //     {
// //         "branch_1":
// //         {
// //             "leaf_1": 1,
// //             "leaf_2": 2
// //         },
// //         "branch_2":
// //         {
// //             "sub_branch":
// //             {
// //                 "leaf_3": 3
// //             },
// //             "leaf_4": 4
// //         }
// //     }
// // }


// {
//     "root":
//     {
//         "branch_1":
//         {
//             "leaf_1": 100,
//             "leaf_2": 200
//         },
//         "branch_2":
//         {
//             "sub_branch":
//             {
//                 "leaf_3": 300
//             },
//             "leaf_4": 400
//         }
//     }
// }




// //
//         // {
//         //     "outer":
//         //     {
//         //         "inner_list":
//         //         [
//         //             {
//         //                 "key_1": 50
//         //             },
//         //             {
//         //                 "key_2": 75
//         //             }
//         //         ],
//         //         "another_dict":
//         //         {
//         //             "final_key": 100,
//         //             "deep":
//         //             {
//         //                 "deepest_key": 150
//         //             }
//         //         }
//         //     }
//         // }


// const resp = {
//     "root":
//     {
//         "branch_1":
//         {
//             "leaf_1": 1,
//             "leaf_2": 2
//         },
//         "branch_2":
//         {
//             "sub_branch":
//             {
//                 "leaf_3": 3
//             },
//             "leaf_4": 4
//         }
//     }
// };


// while(resp!=null)
// {
//     resp=resp?.children;
// }
// resp=resp*100;

// Given a string containing alphanumeric characters and special characters, write a function to reverse only the alphabetic characters while keeping the other characters in their original positions.
// a-bC-dEf-ghIj
// j-Ih-gfE-dCba

// f1-> alphabetic character

// f2-> !alphabetic character

function f1(str) {
    console.log('f1 ');
    console.log(/^[a-zA-Z]+$/.test(str));
    return /^[a-zA-Z]+$/.test(str);
  
}

function f2(str){
    console.log('f2 ');
    // console.log(!(str)));
    console.log(!(/^[a-zA-Z]+$/.test(str)));
    return !(/^[a-zA-Z]+$/.test(str));
}

// f2('abc');
// f2('abc--111');
function createEmptyString(n) {
    return ' '.repeat(n);
  }
  

function reverse(str1){
    let n= str1.length;
    let str2 = createEmptyString(n);
    console.log('string2 initially ',str2);
    console.log('length of string 1 ',n);
    
    for(let i=0;i<n;i++){
        if(f1(str1[i]))
            str2[i]=str1[i];

    }
    console.log('before 2nd pass string2-> ',str2);
    
    let j=0;
    let i=n-1;
    
    while(i>=0 && j<n){
        if(f1(str1[i]) && str2[j]!='-')
        {
            str2[j]=str1[i];
            j++;
            i--;
        }   
        else if(f2(str1[i])){
            i--;
        }
        else if(str2[j]==='-'){
            j++;
        }
    }
    // str2.join('');
    console.log('reversed string',str2);
}

reverse('a-bC-dEf-ghIj');

// SELECT * FROM A INNER_JOIN B ON A.id = B.id where ();

// SELECT AVG (SALARY) FROM EMP INNER_JOIN DEPARTMENT ON EMP.id=DEPARTMENT.i
// emp-> id , did, salary

// SELECT D_ID,AVG (SALARY) FROM EMPLOYEES GROUP_BY D_ID;
