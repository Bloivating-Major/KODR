// // Original object
// const original = {
//     name: "Alice",
//     hobbies: ["reading", "painting"],
// };

// // Shallow copy using Object.assign
// const shallowCopy = {...original}

// // Modify the nested array in the copy
// // shallowCopy.hobbies.push("dancing");

// console.log(original.hobbies); // ["reading", "painting", "dancing"] - Also modified
// // console.log(shallowCopy.hobbies); // ["reading", "painting", "dancing"] - Same reference


// const deepCopy = JSON.parse(JSON.stringify(original))

// deepCopy.hobbies.push('coding')


// console.log(deepCopy);
// console.log(original);

// let arr = [0,1,2,3,4,5,6]

// console.log(arr);

// let slicedarr = arr.slice(2,5)

// console.log(slicedarr);
