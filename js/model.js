    /*'Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i' +
    ' Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)' +
    ' Version/4.0 Mobile Safari/534.30';*/

var md = new MobileDetect(window.navigator.userAgent);

document.getElementById('model').innerHTML = md.mobile();
