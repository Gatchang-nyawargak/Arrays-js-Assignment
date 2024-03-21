//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12];
console.log('last item',arr1.slice(-1));

let arr2 =[true, "green","where",12,56];
console.log(arr2[arr2.length -1]);

//Write a JS program that will join the following array elements into a 
let stringmyPets =["Cow", "Bird", "Snake", "Dog"];
let myPet = stringmyPets.join(",")
console.log(myPet);


//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

let arr3= [-5,9,5,3,2,-3,6,8,4,1];
let sortedArray= arr3.sort();
console.log({sortedArray});

 //Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

 let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
 let uniqueArr = [...new Set(arr)];
let duplicatesArr = arr.filter((item, index) => arr.indexOf(item) !== index);

console.log("Array without duplicates:", uniqueArr);
console.log("Array with duplicates:", duplicatesArr);



//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"


let arr5 = ["the", "way", "x", 4];

const searchWord = "food";
const result = arr5.includes(searchWord) ? searchWord : "the search word was not found";
console.log(result);

//Write a JS script to sort the following string:

let word = "renniw"
let sortedWord = word.split('').sort().join('');

console.log(sortedWord);

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 

let fruits = ["Mango", "pineapple", "kiwi", "Banana", "Watermelon", "Passion", "Orange", "Avocado", "Pears", "Grapes"];

fruits.splice(4, 0, "Tomato");

console.log(fruits);
 