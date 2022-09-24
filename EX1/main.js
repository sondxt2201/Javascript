// // const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// // function isPrime(num) {
// //    if (num > 0) {
// //       for (let i = 2; num > i; i++) {
// //          if (num % i === 0) {
// //             return false;
// //          }
// //       }
// //       return false;
// //    }
// //    return false;
// // }

// // console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// // let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// // console.log(depthArray.flat());

// // let flatArray = depthArray.reduce(function (flatOutput, depthItem) {
// //    return flatOutput.concat(depthItem);
// // }, []);

// // console.log(flatArray);

// var topics = [
//   {
//     topic: "Front End",
//     courses: [
//       {
//         id: 1,
//         title: "HTML, CSS",
//         isFinished: false,
//         coin: 100,
//       },
//       {
//         id: 2,
//         title: "JavaScript",
//         isFinished: false,
//         coin: 100,

//       },
//     ],
//   },
//   {
//     topic: "Back End",
//     courses: [
//       {
//         id: 1,
//         title: "NodeJS",
//         isFinished: false,
//         coin: 100,

//       },
//       {
//         id: 2,
//         title: "Java",
//         isFinished: false,
//         coin: 100,

//       },
//     ],
//   },
//   {
//     topic: "Server",
//     courses: [
//       {
//         id: 1,
//         title: "SQL Server",
//         isFinished: false,
//         coin: 100,

//       },
//       {
//         id: 2,
//         title: "MySQL",
//         isFinished: false,
//         coin: 100,

//       },
//     ],
//   },
//   {
//     topic: "Design",
//     courses: [
//       {
//         id: 1,
//         title: "PS",
//         isFinished: false,
//         coin: 100,

//       },
//       {
//         id: 2,
//         title: "AI",
//         isFinished: false,
//         coin: 100,

//       },
//     ],
//   },
// ];

// let courselist = topics.reduce(function (course, topics) {
//   return course.concat(topics.courses);
// }, []);

// // console.log(courselist);

// let course = courselist.map(function (courseNew, index) {
//   for (let i = 0; i <= courselist.length; i++) {
//     courseNew.id = index + 1;
//     return {
//       id: courseNew.id,
//       title: courseNew.title,
//       isFinished: courseNew.isFinished,
//       coin: courseNew.coin,
//     };
//   }
// });
// console.log(course);

// Array.prototype.every2 = function (callbacks) {
//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (!callbacks(this[index])) {
//         return false;
//         break;
//       }
//       else return true;
//     }
//   }
// };

// Array.prototype.some2 = function (callbacks) {
//   for (let index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (callbacks(this[index])) {
//         return true;
//         break;
//       }
//     }
//   }
//   return false;
// };

// // var result = course.some2(function (course) {
// //   return course.isFinished;
// // });

// var result = course.every2(function (course) {
//   return course.coin > 100;
// });

// console.log(result)



  // for (let i = 0; i <= l; i++) {
  //   if (arr[i] < arr[i + 1]) {
    //     let temp = arr[i];
    //     arr[i] = arr[i + 1];
    //     arr[i + 1] = temp;
    //   }
    // }
    

// let arr = ["a", "z", "g", "b", 1, 3, 11, 10, 20, 2, 15];
// function interChangeSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         let t = array[i];
//         array[i] = array[j];
//         array[j] = t;
//       }
//     }
//   }
//   console.log(array);
// };
// interChangeSort(arr)

// arr.sort(function (a, b) {
//   if (a > b) return 1; // a đứng sau b
//   if (a == b) return 0; // a, b bằng nhau
//   if (a < b) return -1; // a đứng trước b
// });
// console.log(arr.sort());

// const provinces = [
//   "Hà Giang",
//   "Hà Nam",
//   "Hà Nội",
//   "Hà Tĩnh",
//   "Hòa Bình",
//   "Hưng Yên",
//   "Hải Dương",
//   "Hải Phòng",
//   "Hậu Giang",
// ];
// // const result = arr.sort((a, b) => a.localeCompare(b));
// const result = provinces.sort((a, b) => a.localeCompare(b));

// console.log(result);


// function findFirstEvenIndex_1(arr) {
//   for (let i in arr) {
//     if (arr[i] % 2 === 0) return i;
//   }
//   return -1;
// }


// function findFirstEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) return i;
//   }
//   return -1;
// }

// // Ví dụ
// const arr = [1, 2, 3, 4, 5];

// const ret = findFirstEvenIndex(arr);
// const ret_1 = findFirstEvenIndex_1(arr);

// console.log("ret=", ret);
// console.log("ret_1=", ret_1);

// let range = {
//   from: 1,
//   to: 5,

//   // phương thức `Symbol.iterator`
//   [Symbol.iterator]() {
//     // phương thức này trả về một iterator object - object có phương thức next
//     return {
//       current: this.from,
//       last: this.to,

//       // khi for...of cần giá trị tiếp theo thì nó sẽ gọi phương thức next
//       next() {
//         // phương thức next trả về object dạng: {done:..., value :...}
//         if (this.current <= this.last) {
//           // done=false là chưa kết thúc
//           return { done: false, value: this.current++ };
//         } else {
//           // done=true là kết thúc
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// let arr = Array.from(range);
// console.log(arr); // (5) [1, 2, 3, 4, 5]





// function getDateAgo(date, days) {
//   // khởi tạo biến dateAgo bằng với date hiện tại
//   // để không làm thay đổi giá trị của tham số date
//   let dateAgo = new Date();

//   // lùi về số ngày là: days
//   dateAgo.setDate(dateAgo.getDate() - days);

//   // trả về giá trị ngày-tháng-năm
//   return dateAgo.getFullYear() + "-" + (dateAgo.getMonth() + 1) + "-" + dateAgo.getDate();
// }

// // ví dụ ngày hôm nay
// let toDay = new Date();
// console.log("today: " + toDay.getFullYear() + "-" + (toDay.getMonth() + 1) + "-" + toDay.getDate());

// // hôm qua
// let yesterday = getDateAgo(toDay, 1);
// console.log("yesterday: " + yesterday); // 18

// // ngày này năm trước
// let lastYear = getDateAgo(toDay, 1234);
// console.log("lastyesr: " + lastYear); // 19


// function howLongsince(start, end) {
  
//   let diffInMs = new Date(end) - new Date(start);
//   let diffInDays = diffInMs / (1000 * 3600 * 24);
//   let diffInYears = Math.floor(diffInDays / 365);
//   let diffInMonths = Math.floor(diffInYears / 12);
//   let diffInDays_2 = Math.floor(diffInDays - (diffInYears * 365 + diffInMonths * 12));
  
//   console.log(`The time is: ${diffInYears} years, ${diffInMonths} months,  ${diffInDays_2} days`);
// }

// howLongsince('2015-09-28','2022-09-18');


// try {
//   let r = JSON.parse("{'json': 'lỗi o_O'}");
//   console.log(r);
// } catch (err) {
//   console.log(err.name); // SyntaxError
//   console.log(err.message); // Unexpected token j in JSON at position 2
// }

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//   document.head.append(script);
// }
// loadScript('main.js', (err, script) => {})










