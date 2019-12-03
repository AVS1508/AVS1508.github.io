$(window).load(function () {
    $(".se-pre-con").fadeOut(600);
    $('body').css('padding-top', $('#navbar').height() - 53);
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.navsection').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('#navbar li a.active').removeClass('active');
            $('#navbar li a').eq(i).addClass('active');
        }
    });
}).scroll();

$(window).resize(function () {
    $('body').css('padding-top', $('#navbar').height() - 53);
});

function openSkill(evt, skillName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}
