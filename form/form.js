function submitFunc(){
    alert("Submitted")

    let inputDetail = document.getElementById("basic-url");
    let data = [ ];
    data.push(inputDetail);
    let data_string = JSON.stringify(data);
    let file = new File([data_string], {type:"text/plain"});
    let anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = 'save.txt';
    anchor.click();
}


// function submitFunc(){
//     let inputDetail = document.getElementById('detail');
//     inputDetail.readFile
// }


// let text = require('text')
// text.readFile('text.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });