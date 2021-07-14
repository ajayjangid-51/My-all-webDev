function loginpagefn() {
    document.getElementById("id01").style.display = "block"
}
function closeloginfn() {
    document.getElementById("id01").style.display = "none"
}

// as apn outside-form window pe click krenge then apna form close ho jayega.
var form_block = document.getElementById("be")

// window.onclick = function(event){ if(event.target == form_block){
//     form_block.style.display = "none"

// }}
window.onclick = function () { closeform_block(event) }

function closeform_block(event) {
    if (event.target == form_block) {
        form_block.style.display = "none"
    }
}