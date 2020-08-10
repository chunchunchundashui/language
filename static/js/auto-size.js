/**
 * Created by lovo_bdk on 15-12-17.
 */
! function (w) {
    InitView();
    var evt = "onorientationchange" in w ? "orientationchange" : "resize";
    w.addEventListener(evt, function () {
        InitView()
    }, false);

    function InitView() {
        var t = 750,
            w = screen.width,
            h = screen.height,
            a = w / t,
            n = w.viewMeta || document.createElement('meta');
        w.viewMeta || document.getElementsByTagName("head")[0].appendChild(n);
        n.setAttribute('name', 'viewport');
        n.setAttribute('content', "width=" + t + ", initial-scale=" + a + ",maximum-scale=" + a +
            ",minimum-scale=" + a +
            ", user-scalable=no,target-densitydpi=device-dpi,minimal-ui,uc-fitscreen=no");
        w.viewMeta = n;
        window.viewPortNum = a;
        console.log(w.viewMeta, window.viewPortNum);
    }

    w.showPlaceholder = 1;
}(window);
//适配js