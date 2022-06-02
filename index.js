// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = (a,i)=>{
    if(i!=undefined){
      let parse = Date.parse(a[i])/1000;
      return parse.toString()
    } else {
      let parseAll = [];
      for (let x = 0; x < a.length; x++) {
        parseAll.push (Date.parse(a[x])/1000);
               
      }
      let parseSort = parseAll.sort();
      return parseSort.join("-");
    }
    
}
console.log(typeof(createDate(dates)));


// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
