(function() {
    var c = function(a, d) {
        if (0 !== window.scrollY) {
            var b = Math.ceil(window.scrollY / d);
            0 === b && (b = 1);
            var c = Math.ceil(a / d),
            e = function() {
                if (0 != window.scrollY) {
                    var a = window.scrollY - b;
                    0 >= a && (a = 0);
                    window.scrollTo(0, a);
                    setTimeout(e, c)
                }
            };
            e()
        }
    };
    document.addEventListener && (document.querySelector(".scrollup").addEventListener("click",
    function() {
        c(300, 30)
    }), document.addEventListener("scroll",
    function() {
        var a = document.documentElement.scrollTop || document.body.scrollTop;
        document.querySelector(".scrollup").style.display = 100 <= a ? "block": "none"
    }))
})();