// const input=require("readline-sync");
// let s = input.questionInt("Enter string: ''")
// let s="bbbb"
// if (s.length === 0) {
//     console.log("");
// } else {
//     let maxLength = 0;
//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < s.length; i++) {
//         let left = i;
//         let right = i;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if (right - left + 1 > maxLength) {
//                 maxLength = right - left + 1;
//                 start = left;
//                 end = right;
//             }
//             left--;
//             right++;
//         }
//         left = i;
//         right = i + 1;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             if (right - left + 1 > maxLength) {
//                 maxLength = right - left + 1;
//                 start = left;
//                 end = right;
//             }
//             left--;
//             right++;
//         }
//     }

//     console.log(s.substring(start, end + 1));
// }


// const objc1=['1','2','4'];
// const objc2=['5','6','7'];
// const objc3={...objc1,...objc2};
// console.log(objc3);

// const 
const sanku={
    name:"sanku",
    lastname:"sodhi",
    email:"some@sanku.com",
    work:"navgurukul",
    sodhi:{
        name:"sanku",
        adress:"superdupercoloni",
        hobbies:"cricket",

    }
   

}
console.log(sanku);