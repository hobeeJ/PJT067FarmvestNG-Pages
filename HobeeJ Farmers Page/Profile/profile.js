// sidebar

$(document).ready(function () {

    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#side').toggle(500)
        $('#menu-btn').toggleClass('turn')
}
})


// Pop Up

document.getElementById('button').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.btn2').addEventListener('click',
function() {
    document.querySelector('.bg-dal').style.dispmolay = 'none';
});

document.getElementById('address').addEventListener('beforeinput', 
function disableBtn() {
  document.getElementById("button").disabled = true;
});

document.getElementById('phone', 'name').addEventListener('input', 
function enableBtn() {
    document.getElementById("address").disabled = false;
  });

document.getElementById('address').addEventListener('input', 
function enableBtn() {
    document.getElementById("button").disabled = false;
  });

  document.getElementById('address').addEventListener('beforeinput', 
  function disableBtn() {
    document.getElementById("button").disabled = true;
  });

  document.getElementById('OTP').addEventListener('input', 
function enableBtn() {
    document.getElementById("btn2").disabled = false;
  });

  document.getElementById('OTP').addEventListener('beforeinput', 
  function disableBtn() {
    document.getElementById("btn2").disabled = true;
    });