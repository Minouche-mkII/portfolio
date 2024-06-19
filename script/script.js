
function openModal(id) {
    document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}

function imgModal(id) {
    document.getElementById(id).classList.add("imgModal");
    var fond = document.getElementById("fond");
    fond.classList.remove("hidden");
    fond.onclick = function() {
        removeImgModal(id);
    }
}

function removeImgModal(id) {
    document.getElementById(id).classList.remove("imgModal");
    document.getElementById("fond").classList.add("hidden")
}