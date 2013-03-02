Raphael.fn.connection = function (obj1, obj2, line, bg) {
    if (obj1.line && obj1.from && obj1.to) {
        line = obj1;
        obj1 = line.from;
        obj2 = line.to;
    }
    var bb1 = obj1.getBBox(),
        bb2 = obj2.getBBox(),
        p = [
            {x: bb1.x + bb1.width / 2, y: bb1.y - 1},
            {x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1},
            {x: bb1.x - 1, y: bb1.y + bb1.height / 2},
            {x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2},
            {x: bb2.x + bb2.width / 2, y: bb2.y - 1},
            {x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1},
            {x: bb2.x - 1, y: bb2.y + bb2.height / 2},
            {x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2}
        ],
        d = {}, dis = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 4; j < 8; j++) {
            var dx = Math.abs(p[i].x - p[j].x),
                dy = Math.abs(p[i].y - p[j].y);
            if (
                    (i == j - 4) 
                 || (
                        (
                            (i != 3 && j != 6) 
                         || p[i].x < p[j].x
                        ) 
                     && (
                            (i != 2 && j != 7) 
                         || p[i].x > p[j].x
                        ) 
                     && (
                            (i != 0 && j != 5) 
                         || p[i].y > p[j].y
                        ) 
                     && (
                            (i != 1 && j != 4) 
                         || p[i].y < p[j].y
                        )
                    )
             ) {
                dis.push(dx + dy);
                d[dis[dis.length - 1]] = [i, j];
            }
        }
    }
    if (dis.length == 0) {
        var res = [0, 4];
    } else {
        res = d[Math.min.apply(Math, dis)];
    }
    var x1 = p[res[0]].x,
        y1 = p[res[0]].y,
        x4 = p[res[1]].x,
        y4 = p[res[1]].y;
    dx = Math.max(Math.abs(x1 - x4) / 2, 10);
    dy = Math.max(Math.abs(y1 - y4) / 2, 10);
    var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3),
        y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3),
        x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3),
        y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
    var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
    if (line && line.line) {
        line.bg && line.bg.attr({path: path});
        line.line.attr({path: path});
    } else {
        var color = typeof line == "string" ? line : "#000";
        return {
            bg: bg && bg.split && this.path(path).attr({stroke: bg.split("|")[0], fill: "none", "stroke-width": bg.split("|")[1] || 3}),
            line: this.path(path).attr({stroke: color, fill: "none"}),
            from: obj1,
            to: obj2
        };
    }
};

// from https://gist.github.com/viking/1043360
Raphael.fn.arrow = function(x1, y1, x2, y2, size, arrow, style, attr) {

    var start = "", end = "";

    if ( typeof arrow == "undefined" || arrow != "none" )
    {
        var angle = Raphael.angle(x1, y1, x2, y2);
        var a35   = Raphael.rad(angle-35);
        var a35m  = Raphael.rad(angle+35);
        var a145  = Raphael.rad(angle-145);
        var a145m = Raphael.rad(angle+145);
        var x1a = x1 + Math.cos(a145) * size;
        var y1a = y1 + Math.sin(a145) * size;
        var x1b = x1 + Math.cos(a145m) * size;
        var y1b = y1 + Math.sin(a145m) * size;
        var x2a = x2 + Math.cos(a35) * size;
        var y2a = y2 + Math.sin(a35) * size;
        var x2b = x2 + Math.cos(a35m) * size;
        var y2b = y2 + Math.sin(a35m) * size;
    }
    if ( typeof arrow == "undefined" || arrow == "both" || arrow == "start" )
    {

        start = "M"+x1a+" "+y1a+"L"+x1+" "+y1+"L"+x1b+" "+y1b;

        if ( typeof style == "undefined" || style != "simple" )
        {
            start += "L"+x1a+" "+y1a;

            var tmp = Raphael.pathIntersection( start, "M"+x1+" "+y1+"L"+x2+" "+y2 );

            _x1 = tmp[tmp.length-1].x;
            _y1 = tmp[tmp.length-1].y;

            start = "M" + _x1 + " " + _y1 + "L" + x1a + " " + y1a + "L" + x1 + " " + y1 + "L" + x1b + " " + y1b + "L" + _x1 + " " + _y1;

            x1 = _x1;
            y1 = _y1;

        }

    }
    if ( typeof arrow == "undefined" || arrow == "both" || arrow == "end" )
    {

        end = "M"+x2+" "+y2+"L"+x2a+" "+y2a+"M"+x2+" "+y2+"L"+x2b+" "+y2b ;

        if ( typeof style == "undefined" || style != "simple" )
        {
            end += "L"+x2a+" "+y2a;

            var tmp = Raphael.pathIntersection( end, "M"+x1+" "+y1+"L"+x2+" "+y2 );

            _x2 = tmp[tmp.length-1].x;
            _y2 = tmp[tmp.length-1].y;

            end = "M" + _x2 + " " + _y2 + "L" + x2a + " " + y2a + "L" + x2 + " " + y2 + "L" + x2b + " " + y2b + "L" + _x2 + " " + _y2

            x2 = _x2;
            y2 = _y2;
        }

    }
    if ( typeof attr != "object" )
    {
        return this.path( start + "M"+x1+" "+y1+"L"+x2+" "+y2+ end );
    } else {
        return this.path( start + "M"+x1+" "+y1+"L"+x2+" "+y2+ end ).attr( attr );
    }
};

Raphael.fn.outlineArrow = function(x1, y1, x2, y2, size, arrow, style, attr, outlineColor) {

    if ( typeof attr == "object" && attr.hasOwnProperty("outline-color") )
    {
        outlineColor = attr['outline-color'];
    } else {
        outlineColor = "#000";
    }
    if ( typeof attr == "object" && attr.hasOwnProperty("stroke-width") )
    {
        strokeWidth = attr['stroke-width'] + 3;
    } else {
        strokeWidth = 6;
    }

    return {
                bg: this.arrow(x1, y1, x2, y2, size, arrow, style ).attr(attr).attr( { 'stroke-width': strokeWidth, stroke: outlineColor } ),
                fg: this.arrow(x1, y1, x2, y2, size, arrow, style, attr )
            };

}
