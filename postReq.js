import dataResult from './results.json' assert {type: 'json'};

// function flattenObj(obj) {
//     let flattenedObj = {};
//     for (const key in obj) {
//     const value = obj[key];
//     if (typeof value === 'object' && !Array.isArray(value)) {
//       flattenedObj = { ...flattenedObj, ...flattenObj(value) };
//     } else {
//         flattenedObj[key] = value;
//     }
//   }

//   return flattenedObj;
// }

function flattenObj(obj) {
    if (Array.isArray(obj)) {
        return obj.map(flattenObj);
      }
    let flattenedObj = {};
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        flattenedObj = { ...flattenedObj, ...flattenObj(value) };
      } else {
        flattenedObj[key] = value;
      }
    }
  
    return flattenedObj;
  }

const dete = flattenObj(dataResult);
console.log(dete);

 const postingResults = async () =>{
 
     

    await fetch('https://sheetdb.io/api/v1/cq1zv99bs9lz9', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: {...dete}
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));


} 

  postingResults();