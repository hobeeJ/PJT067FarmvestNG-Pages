// sidebar

$(document).ready(function () {

    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#side').toggle(500);
        $('#menu-btn').toggleClass('turn')
}
})