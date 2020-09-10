let start = process.hrtime();

let diff = process.hrtime(start);
console.log(`operation took ${diff[0] * 1e9 + diff[1]} nanoseconds`);