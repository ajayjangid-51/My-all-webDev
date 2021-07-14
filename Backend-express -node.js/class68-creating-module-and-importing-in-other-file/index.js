console.log("This is index.js file")

const ave = require('./modl')
// console.log(ave)
// jis naam se export kiya gaya hai ussi naam se ess function import knra hota hai
console.log(ave.avg([4,4]))
// this will show error that "modld.average is not a function" or ha yeh sahi bhi hai bcoz jab apan yeh const const-name = require('./modl') krteh hai then yeh modl-file puri import hoti hai mtlb esmeh koi particular function import nhi hoteh isiley yeh error show kiya jata hai ki modld is not a function mtlb yeh toh file hai, 
// const avera = require('./modl')
// SO toh agar apanko koi particuar function import krna hai ess modl.js file meh se toh apanko phle ess modl.js file uss function ko export krna hoga as:
    // module.exports = function-name;

