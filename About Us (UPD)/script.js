$(document).ready(function () {

    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#links').toggle(500);
        $('#menu-btn').toggleClass('turn')
}


})