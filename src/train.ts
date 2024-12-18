/* Project Standards:
- Logging standards
- Naming standards:
    function, method, variable => CAMEL 
    class => PASCAL 
    folder, file => KEBAB
    CSS = SNAKE
- Error handling
*/


/** Validations:
  1) Frontend validation
  2) Backend validation
  3) Database validation

  4) Pipe validation - Front va Backend orasida serverga kirishga javob beradi
 
 */



/** Request: 
  Traditional API
  Rest API
  GraphQL API
 */

/** Frontend Development:
Traditional FD => BSSR (admin) => EJS
Modern FD => SPA (user's application) => React

 */

/** Cookylar xislatlari:
  request join
  self destroy
 
 */

/* ------ Task G -------  */

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function findIndexOfGreatest(array: number[]): number | undefined {
  let greatest: number | undefined;
  let indexOfGreatest: number | undefined;

  for (let i = 0; i < array.length; i++) {
    if (greatest === undefined || array[i] > greatest) {
      greatest = array[i];
      indexOfGreatest = i;
    }
  }

  return indexOfGreatest;
}

const javob = findIndexOfGreatest([22, 44, 6, 12]);
//console.log(javob);

/* ------ Task H -------  */
//shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
//MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr: number[]): string {
  const result = arr.filter(num => num > 0).join('');
  return `"${result}"`; // Natijani qo'shtirnoq ichida qaytarish
}

const javob2 = getPositive([33,-3, -4, 55]);
//console.log("Javob: ",javob2); 


/* ------ Task H2 -------  */

//Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
//MASALAN: getDigits("m14i1t") return qiladi "141"


function separate(num: string) {
  return num.replace(/\D/gi, '');
}

const H2 = separate('he234llo99');
//console.log(H2);


/* ------ Task I -------  */
// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function mostFrequentElement(arr: number[]) {
  let res = [];
  for (let x of arr) {
      let count = 0;
      for (let i of arr) {
          if (i == x) {
              count++;
          }
      }
      res.push(count);
  }
  return arr[res.indexOf(Math.max(...res))];
}
const Task_I = mostFrequentElement([13 , 2 , 1 , 2 , 10 , 1 , 1 ]);
//console.log("The most frequent number is: ", Task_I)


/* ------ Task J -------  */
//Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
//MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

function longestWord(a:string){
  let str = a.split(" ");
  let longest = 0;
  let word = null;
  str.forEach(function(str:string) {
      if (longest < str.length) {
          longest = str.length;
          word = str;
      }
  });
  return word;
}
const Task_J = longestWord("I am from Uzbekistan");
//console.log(Task_J);

/* ------ Task K -------  */
//Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
//MASALAN: countVowels("string") return 1;


function countWovels(v:string) {
  let m = v.match(/[euioa]/gi);
  return m === null ? 0: m.length 
}

const Taks_K = countWovels("Wee are MIT15!")
//console.log("We have",Taks_K, "vowels");



/* ------ Task L -------  */
//Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
//MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(sentence: string): string {
  return sentence
      .split(' ')                  
      .map(word => word.split('').reverse().join(''))  
      .join(' ');                 
}

//console.log(reverseSentence("we like coding!")); 

/* ------ Task M -------  */

//Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
//MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
  return numbers.map(num => ({
    number: num,
    square: num * num
  }));
}

//console.log(getSquareNumbers([1, 2, 3]));

/* ------ Task N -------  */
//Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
//MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

function palindromCheck(str: string): boolean {
  // Stringni teskari o'giramiz va uni asl string bilan solishtiramiz
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

//console.log(palindromCheck("dad"));  // true
//console.log(palindromCheck("son"));  // false

/* ------ Task O -------  */
// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateNumbers(arr: any[]):number {
  const filterNumber = arr.filter((item: any) => typeof item === 'number'); // Only filter numbers
  let sum = 0;
  for (let i of filterNumber) {
      sum += i;  // Sum all filtered numbers
  }
  return sum;
}

const Task_O = calculateNumbers([10, "10", {son: 10}, true, 25]);
//console.log("Natija: ",Task_O);  

/* ------ Task P -------  */

//Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
//MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: { [key: string]: any }): [string, any][] {
  return Object.entries(obj);
}

const Task_P = objectToArray({ a: 33, b: 44 });
//console.log("Natija:",Task_P); 

/* ------ Task Q -------  */

//Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
//MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

function hasProperty(obj: object, prop: string): boolean {
  return obj.hasOwnProperty(prop);
}
//console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
//console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); 

/* ------ Task R -------  */
//Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
//MASALAN: calculate("1+3") return 4;

function calculate(expression: string): number {
  return eval(expression);
}

//console.log(calculate("12+21+33")); 

/* ------ Task S -------  */
//Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
//MASALAN: missingNumber([3, 0, 1]) return 2

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // 0 dan N gacha bo'lgan sonlar yig'indisi
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0); // Massivdagi mavjud sonlar yig'indisi
  return expectedSum - actualSum; // Yetishmayotgan son - kutilgan yig'indi va haqiqiy yig'indi orasidagi farq
}


// console.log("Yetishmagan son:",missingNumber([0, 1])); // 2

/* ------ Task T -------  */
//Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
//MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]


function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  let mergedArray: number[] = [];
  let i = 0; // arr1 uchun index
  let j = 0; // arr2 uchun index

  // Ikkala arrayni birlashtirish
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

  // Qolgan elementlarni qo'shish
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }

  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  return mergedArray;
}

const Task_T = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
//console.log(Task_T);


/* ------ Task U -------  */
//Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
//MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

function sumOdds(n: number): number {
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    count++;
  }
  return count;
}
//console.log("Natija:",sumOdds(7));  


/* ------ Task V -------  */
//Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
//MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

function countChars(str: string): { [key: string]: number } {
  const charCount: { [key: string]: number } = {};
  
  for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  
  return charCount;
}
//console.log(countChars("Jason"));

/* ------ Task W -------  */
//Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
//MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

function chunkArray(arr: any[], chunkSize: number): any[][] {
  const result: any[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
  }
  return result;
}

//console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

/* ------ Task X -------  */
/** 
Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda */

function countOccurrences(obj: any, key: string): number {
  let count = 0;
  if (typeof obj === 'object' && obj !== null) {
      for (const k in obj) {
          if (k === key) {
              count++;
          }
          count += countOccurrences(obj[k], key);
      }
  }

  if (Array.isArray(obj)) {
      for (const item of obj) {
          count += countOccurrences(item, key);
      }
  }
  return count;
}
const exampleObject = {
  model: 'Bugatti',
  steer: {
      model: 'HANKOOK',
      size: 30
  }
};
//console.log(countOccurrences(exampleObject, 'model')); 


/* ------ Task Y -------  */

//Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

function findIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(value => arr2.includes(value));
}


const result = findIntersection([1, 2, 3], [3, 2, 0]);
//console.log(result); 

/* ------ Task Z -------  */
//Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
//MASALAN: sumEvens([1,2,3]) return 2


function sumEvens(arr: number[]): number {
  let sum = 0;
  for (let num of arr) { 
      if (num % 2 === 0) { 
          sum += num; 
      }
  }
  return sum; 
}
//console.log(sumEvens([1, 2, 3, 4, 5,6]));

/* ------ Task ZA -------  */
//Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
//MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

type Person = { age: number };

function sortByAge(arr: Person[]): Person[] {
  return arr.sort((a, b) => a.age - b.age);
}


const sortedArray = sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]);
//console.log(sortedArray);

/* ------ Task ZB -------  */
//Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
//MASALAN: randomBetween(30, 50) return 45

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const randomNumber = randomBetween(20, 65);
//console.log(randomNumber); 


/** TASK ZC */

/**Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

MASALAN: celsiusToFahrenheit(0) return 32;
MASALAN: celsiusToFahrenheit(10) return 50;

Yuqoridagi misolda, 0°C, 32°F'ga teng.
Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

°C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi. */

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}


//console.log("Temperatura:",celsiusToFahrenheit(25)); 


/**Shunday function yozing. Bu function o'ziga, parametr sifatida
birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
yangilangan arrayni qaytarsin.

MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
yangilangan arrayni qaytarmoqda. */

function changeNumberInArray(firstNumber: number, array: number[], thirdNumber: number): number[] {
  if (firstNumber >= 0 && firstNumber < array.length) {
      array[firstNumber] = thirdNumber;
  }
  return array;
}

//console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); 


/** TASK ZE */
//Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
//MASALAN: removeDuplicate('stringg') return 'string'

function removeDuplicates(str: string): string {

  const uniqueChars = new Set<string>();
  let result = '';
  for (const char of str) {

    if (!uniqueChars.has(char)) {
      uniqueChars.add(char);
      result += char;
    }
  }

  return result;
}
const originalString = 'Jassonn';
const uniqueString = removeDuplicates(originalString);
//console.log(uniqueString); 

// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'


function convertToSnakeCase(input: string): string {
 
  return input.trim().toLowerCase().replace(/\s+/g, '_');
}


const ZG = convertToSnakeCase('name should be a string');
//console.log(ZG); 


//ZH-TASK:

//Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
//MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

function findDisappearedNumbers(arr: number[]): number[] {
  const max = Math.max(...arr); 
  const fullRange = Array.from({ length: max }, (_, i) => i + 1); 
  return fullRange.filter(num => !arr.includes(num)); 
}


const ZH = findDisappearedNumbers([1, 3, 4, 9]);
//console.log(ZH); 

//ZI-TASK:

//Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
//MASALAN: delayHelloWorld("Hello World") return "Hello World"

function delayHelloWorld(message: string): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(message);
      }, 3000);
  });
}

//delayHelloWorld("Hello World").then((result) => console.log(result));


//ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

function reduceNestedArray(arr: any[]): number {
  return arr.reduce((sum, value) => {
      if (Array.isArray(value)) {
          return sum + reduceNestedArray(value);
      } else if (typeof value === 'number') {
          return sum + value;
      }
      return sum;
  }, 0);
}

//console.log("Javob:",reduceNestedArray([0, [3, 2, [4]]])); 

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers();

function printNumbers(): void {
  let counter = 1; 

  const interval = setInterval(() => {
    console.log(counter); 
    counter++; 

    if (counter > 5) {
      clearInterval(interval); 
    }
  }, 1000); 
}
//printNumbers();

// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

function stringToKebab(input: string): string {
  return input
    .toLowerCase() 
    .replace(/\s+/g, '-') 
    .replace(/[^a-z0-9\-]/g, '');
}

// Misol:
//console.log(stringToKebab("This is Jason")); 


// ZM-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

function rotateArray(arr: any[], index: number): any[] {
  if (index < 0 || index >= arr.length) {
    throw new Error("Index out of bounds");
  }
  
  const part1 = arr.slice(0, index + 1);
  const part2 = arr.slice(index + 1);
  
  return [...part2, ...part1];
}

const ZM_TASK= rotateArray([1, 2, 3, 4, 5, 6], 3);
//console.log(ZM_TASK); 


// ZN-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

function areParenthesesBalanced(input: string): boolean {
  let balance = 0;

  for (const char of input) {
    if (char === "(") {
      balance++;
    } else if (char === ")") {
      balance--;
    }

    if (balance < 0) {
      return false;
    }
  }

  return balance === 0;
}
//console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); // true
//console.log(areParenthesesBalanced("(()))")); // false
//console.log(areParenthesesBalanced("((")); // false

//ZO-TASK:

//Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
//MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}



function countNumberAndLetters(input: string): { number: number, letter: number } {
  let numberCount = 0;
  let letterCount = 0;

  // Har bir belgini tekshirish
  for (let char of input) {
      if (/\d/.test(char)) { 
          numberCount++;
      } else if (/[a-zA-Z]/.test(char)) { 
          letterCount++;
      }
  }

  return { number: numberCount, letter: letterCount };
}


//console.log(countNumberAndLetters("string152%\¥")); 


// ZP-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]

function findDuplicates(arr: number[]): number[] {
  const elementCounts: Record<number, number> = {};
  const duplicates: number[] = [];


  for (const num of arr) {
    elementCounts[num] = (elementCounts[num] || 0) + 1;
  }

  for (const [key, count] of Object.entries(elementCounts)) {
    if (count > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

//console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); 

// ZQ-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

function singleNumber(nums: number[]): number {
  const numCount: Record<number, number> = {};


  for (const num of nums) {
      numCount[num] = (numCount[num] || 0) + 1;
  }


  for (const num of nums) {
      if (numCount[num] === 1) {
          return num;
      }
  }

  throw new Error("No single number found");
}


//console.log(singleNumber([4, 2 ,4 ,3 , 1, 2, 1])); 


// ZR-TASK:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0

function firstUniqueCharIndex(input: string): number {
  const charCount: { [key: string]: number } = {};

  for (const char of input) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < input.length; i++) {
    if (charCount[input[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqueCharIndex("stamps")); 
