var $progress = $(".progress"),
    $bar = $(".progress__bar"),
    $text = $(".progress__text"),
    percent = 0,
    update,
    resetColors,
    speed = 1000,
    orange = 30,
    yellow = 55,
    green = 85,
    timer;

resetColors = function () {

    $bar
        .removeClass("progress__bar--green")
        .removeClass("progress__bar--yellow")
        .removeClass("progress__bar--orange")
        .removeClass("progress__bar--blue");

    $progress
        .removeClass("progress--complete");

};

update = function startLoading() {
    document.getElementById('push').classList.remove("active");
    document.getElementById('body').classList.add("active");
    timer = setTimeout(function () {

        percent += Math.random() * 1000;
        percent = parseFloat(percent.toFixed(1));



        if (percent >= 100) {

            percent = 100;
            $progress.addClass("progress--complete");
            $bar.addClass("progress__bar--blue");
            $text.find("em").text("SCROLL DOWN");
            document.getElementById('body').classList.add("active");

        } else {

            if (percent >= green) {
                $bar.addClass("progress__bar--green");
            }

            else if (percent >= yellow) {
                $bar.addClass("progress__bar--yellow");
            }

            else if (percent >= orange) {
                $bar.addClass("progress__bar--orange");
            }

            speed = Math.floor(Math.random() * 1000);
            update();

        }

        $bar.css({ width: percent + "%" });

    }, speed);

};

function startLoading() {
    
    $progress.addClass("progress--active");
    update();

};

//прогресс бар




jQuery(function () {
    jQuery('.toggle').on("click", function () {
        var prevElm = jQuery(this).prev('ul');
        var spanToggle = jQuery(this).find('span');
        prevElm.fadeToggle();
        spanToggle.toggle();
        return false;
    })

    var mousePos = { x: -1, y: -1 };
    jQuery(document).mousemove(function (event) {
        mousePos.x = event.pageX;
        jQuery('.hero, nav h1 a').css
            ({
                "filter": "hue-rotate(" + mousePos.x + "deg)"
            });
    });

    // ELSEWHERE, your code that needs to know the mouse position without an event
    if (mousePos.x < 10) {
        // ....
    }
});




//фон денег


//таймер
var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 5);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 5;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}


//таймер
function openPush() {
    document.getElementById('push').classList.add("active");
}
function secondStep() {
    document.getElementById('push').classList.remove("active");
    document.getElementById('loading').classList.add("active");
}
function openWindows() {
    document.getElementById('windows').classList.add("active");
    document.getElementById('pop-el1').classList.add("active");
}
function Pop2() {
    document.getElementById('pop-el1').classList.remove("active");
    document.getElementById('pop-el5').classList.add("active");
}
function Pop3() {
    document.getElementById('pop-el2').classList.remove("active");
    document.getElementById('pop-el3').classList.add("active");
}
function Pop4() {
    document.getElementById('pop-el3').classList.remove("active");
    document.getElementById('pop-el4').classList.add("active");
}
function Pop5() {
    document.getElementById('pop-el4').classList.remove("active");
    document.getElementById('pop-el5').classList.add("active");
}
function Pop6() {
    document.getElementById('pop-el5').classList.remove("active");
    document.getElementById('pop-el6').classList.add("active");
}
function Pop7() {
    document.getElementById('pop-el6').classList.remove("active");
    document.getElementById('pop-el7').classList.add("active");

}
function Pop8() {
    document.getElementById('pop-el7').classList.remove("active");
    document.getElementById('pushflow').classList.add("active");
}
function pushflowF1() {
    document.getElementById('hid3').classList.add("hidden");
    document.getElementById('hid2').classList.add("hidden");
    document.getElementById('hid1').classList.add("hidden");
    document.getElementById('hid11').classList.remove("hidden");
    document.getElementById('hid22').classList.remove("hidden");
    document.getElementById('hid33').classList.remove("hidden");
}


var colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.006;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient, 10);
//градиент фон