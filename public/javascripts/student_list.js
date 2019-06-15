// // const rows = document.getElementsByTagName("tbody")[0].childNodes;

// // rows.forEach((row) => {
// //     if (row.innerHTML) {
// //         const ID = row.id.split("-")[1];
// //         // window.location.href = ID;
// //     }
// // });

// // const table = document.getElementsByTagName("tbody");
// // const rows = table.getElementsByTageName("tr");
// // for (i=0; i<rows.length; i++) {
// //     const row = table.rows[i];

// // }

// // function createLink(row) {
// //     const cell = row.getElementsByTagName("td")[0];
// //     const id = cell.innerHTML;

// // }

// function addRowLinks() {
//     const table = document.getElementsByTagName("tbody");
//     // console.log(table[0].childNodes);
//     // const rows = table.getElementsByTagName("tr");
//     const rows = table[0].childNodes;
//     for (i=0; i<rows.length; i++) {
//         rows[i].onclick = function() {
//             return function() {
//                 // const id = this.cells[0].innerHTML;
//                 // console.log(id);
//                 console.log(this.setAttribute('onclick', this.cells[0].innerHTML));
//             };
//         }(rows[i]);
//     }
// }

// window.onload = addRowLinks();