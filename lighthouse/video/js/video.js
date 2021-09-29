(function (window, document) {
    var gi = 1;
    var gi_max = 3;//最大GET链接序号
    // var random = Math.random(9);
    var url0 = "https://tvv.tw/xjj/get/get1.php";
    var url1 = "https://tvv.tw/xjj/get/get2.php";
    var url2 = "https://tvv.tw/xjj/get/get3.php";
    var url3 = "https://www.kuaidoushe.com/video.php";//?_t=" + random;

    if (top != self) {
        window.top.location.replace(self.location.href);
    }
    var get = function (id) {
        return document.getElementById(id);
    }
    var bind = function (element, event, callback) {
        return element.addEventListener(event, callback);
    }
    var huanyuan = function () {
        gi = gi + 1;
        if (gi > gi_max) {
            gi = 0;
        }
        switch (gi) {
            case 1:
                url = url1;
                break;
            case 2:
                url = url2;
                break;
            case 3:
                url = url3;
                break;
            default:
                url = url0;
                break;
        }
        console.log("换源(" + gi + "):" + url);
    }
    var auto = true;
    var url = "https://www.nihaowua.com/v/video.php";//+ random;
    var player = get('player');
    var randomm = function () {
        player.src = url + "?_t" + Math.random();
        player.play();
        console.log("开始播放: " + player.src);
        player.poster = "";
    }
    bind(get('next'), 'click', randomm);
    bind(player, 'error', function () {
        console.log("播放器: 出错了！");
        huanyuan();
        randomm();
    });
    bind(get('switch'), 'click', function () {
        auto = !auto;
        this.innerText = '连续: ' + (auto ? '开' : '关');
        console.log("切换连续：" + (auto ? '开' : '关'));
    });
    bind(get('yuan'), 'click', function () {
        huanyuan();
        // randomm();
    });

    bind(player, 'ended', function () {
        if (auto) randomm();
    });
    player.src = url + "?_t" + Math.random();
    // randomm();
    // player.poster = "";
})(window, document);
