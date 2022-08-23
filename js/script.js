const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});



$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});



const modal = document.getElementById('myModal');
        const modalImg = document.getElementById("img01");
        var img = document.querySelectorAll('.thumbnail');

        for (var i = 0; i < img.length; i++) {

            img[i].onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                captionText.innerHTML = this.alt;
            }

        }
        // When the user clicks on <span> (x), close the modal
        modal.onclick = function () {
            img01.className += " out";
            setTimeout(function () {
                modal.style.display = "none";
                img01.className = "modal-content";
            }, 400);

        }       

function zoomin() {
    var GFG = document.getElementById("geeks");
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight + 40) + "px";
}
function zoomout() {
    var GFG = document.getElementById("geeks");
    var currHeight = GFG.clientHeight;
    GFG.style.height = (currHeight - 40) + "px";
}