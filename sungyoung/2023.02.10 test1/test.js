// var section = document.querySelector("#sections .section");

// section.style.border = "1px solid #ff0000";

// var sections = document.querySelectorAll("#sections .section");

// for (var i = 0; i < sections.length; i++) {
//     sections[i].style.border = "1px solid #ff0000";
// }

var sections = document.querySelectorAll("#sections , #sections .section");

for (const i = 0; i < sections.length; i++) {
    const item = sections.item(i);
    item.style.border = "1px solid #ff0000";
}