(function(){
    var el;
    var dragger = function () {
        this.ox = this.type == "rect" ? this.attr("x") : this.attr("cx");
        this.oy = this.type == "rect" ? this.attr("y") : this.attr("cy");
        this.animate({"fill-opacity": .2}, 500);
    },
    move = function (dx, dy) {
        var att = this.type == "rect" ? {x: this.ox + dx, y: this.oy + dy} : {cx: this.ox + dx, cy: this.oy + dy};
        this.attr(att);
        for (var i = connections.length; i--;) {
            r.connection(connections[i]);
        }
        r.safari();
    },
    up = function () {
        this.animate({"fill-opacity": 0}, 500);
    },
    r = Raphael("holder", "100%", "100%"),
    icons_g = Raphael("icons-generic", "100%", "100%"),
    icons_s = Raphael("icons-specific", "100%", "100%"),
    connections = [],
    shapes = [  r.ellipse(190, 100, 30, 20),
                r.rect(290, 80, 60, 40, 10),
                r.rect(290, 180, 60, 40, 2),
                r.ellipse(450, 100, 20, 20)
            ];
    for (var i = 0, ii = shapes.length; i < ii; i++) {
        var color = Raphael.getColor();
        shapes[i].attr({fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move"});
        shapes[i].drag(move, dragger, up);
    }
    connections.push(r.connection(shapes[0], shapes[1], "#fff"));
    connections.push(r.connection(shapes[1], shapes[2], "#fff", "#fff|5"));
    connections.push(r.connection(shapes[1], shapes[3], "#000", "#fff"));

    var holder_w = $('#holder').width(), 
        holder_h = $('#holder').height(), 
        iconsg_w = $('#icons-generic').width(), 
        iconsg_h = $('#icons-generic').height(), 
        iconss_w = $('#icons-specific').width(), 
        iconss_h = $('#icons-specific').height(),
        stroke_holder = {fill: "#456", stroke: "none"},
        stroke_holder_outer = {stroke: "#123", "stroke-width": 3, "stroke-linejoin": "round"};

    // Add icons for holder
    var holder_icons = { 
        "Zoom In": [ 
            r.path( icons["zoomin"] ).attr( stroke_holder_outer ).attr( {transform: ['t',holder_w-70,10]} ), 
            r.path( icons["zoomin"] ).attr( stroke_holder ).attr( {transform: ['t',holder_w-70,10]} ) ],
        "Zoom Out": [
            r.path( icons["zoomout"] ).attr( stroke_holder_outer ).attr( {transform: ['t',holder_w-40,10]} ),
            r.path( icons["zoomout"] ).attr( stroke_holder ).attr( {transform: ['t',holder_w-40,10]} ) ],
        "Move Up": [
            r.path( icons["top"] ).attr( stroke_holder_outer ).attr( {transform: ['t',holder_w/2-20,5]} ),
            r.path( icons["top"] ).attr( stroke_holder ).attr( {transform: ['t',holder_w/2-20,5]} ) ],
        "Move Down": [
            r.path( icons["bottom"] ).attr( stroke_holder_outer ).attr( {transform: ['t',holder_w/2-20,holder_h-37]} ),
            r.path( icons["bottom"] ).attr( stroke_holder ).attr( {transform: ['t',holder_w/2-20,holder_h-37]} ) ],
        "Move Right": [
            r.path( icons["right"] ).attr( stroke_holder_outer ).attr( {transform: ['t',holder_w-37,holder_h/2-20]} ),
            r.path( icons["right"] ).attr( stroke_holder ).attr( {transform: ['t',holder_w-37,holder_h/2-20]} ) ],
        "Move Left": [
            r.path( icons["left"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,holder_h/2-20]} ),
            r.path( icons["left"] ).attr( stroke_holder ).attr( {transform: ['t',5,holder_h/2-20]} ) ]
    }
    
    // Add icons to generic
    var generic_icons = {
        "New Document" : [ 
            icons_g.path( icons["doc"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,5]} ),
            icons_g.path( icons["doc"] ).attr( stroke_holder ).attr( {transform: ['t',5,5]} ) ],
        "Render Nubs" : [ 
            icons_g.path( icons["run"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,50]} ),
            icons_g.path( icons["run"] ).attr( stroke_holder ).attr( {transform: ['t',5,50]} ) ],
        "Debug Nubs" : [ 
            icons_g.path( icons["bug"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,95]} ),
            icons_g.path( icons["bug"] ).attr( stroke_holder ).attr( {transform: ['t',5,95]} ) ],
        "Undo last step": [ 
            icons_g.path( icons["undo"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,140]} ),
            icons_g.path( icons["undo"] ).attr( stroke_holder ).attr( {transform: ['t',5,140]} ) ],
        "Redo last Step" : [ 
            icons_g.path( icons["undo"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,185, 's', -1, 1]} ),
            icons_g.path( icons["undo"] ).attr( stroke_holder ).attr( {transform: ['t',5,185, 's', -1, 1]} ) ]
    }
    
    // Add icons to specific
    var specific_icons = {
        "See Nodes" : [ 
            icons_s.path( icons["nodes"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,5]} ),
            icons_s.path( icons["nodes"] ).attr( stroke_holder ).attr( {transform: ['t',5,5]} ) ],
        "Link mode" : [ 
            icons_s.path( icons["link"] ).attr( stroke_holder_outer ).attr( {transform: ['t',5,50]} ),
            icons_s.path( icons["link"] ).attr( stroke_holder ).attr( {transform: ['t',5,50]} ) ]
    }

    var icon_mouseover = function(){
        this.animate({fill:'#89a'},200);
    }
    var icon_mouseout  = function(){
        this.animate({fill:'#456'},200);
    }

    $.each( [ holder_icons, generic_icons, specific_icons ], function(index0,collection){
        $.each(collection,function(index1,elements){
            $.each(elements,function(index2,element){
                element.hover( icon_mouseover, icon_mouseout ).attr({cursor:'pointer',title:index1});
            })
        });
    })

    $(window).resize(
        function(){
            holder_w = $('#holder').width();
            holder_h = $('#holder').height();
            // Repos icons in holder
            holder_icons['Zoom In'][0].attr( {transform: ['t',holder_w-70,10]} );
            holder_icons['Zoom In'][1].attr( {transform: ['t',holder_w-70,10]} );
            holder_icons['Zoom Out'][0].attr( {transform: ['t',holder_w-40,10]} );
            holder_icons['Zoom Out'][1].attr( {transform: ['t',holder_w-40,10]} );
            holder_icons['Move Up'][0].attr( {transform: ['t',holder_w/2-20,5]} );
            holder_icons['Move Up'][1].attr( {transform: ['t',holder_w/2-20,5]} );
            holder_icons['Move Down'][0].attr( {transform: ['t',holder_w/2-20,holder_h-37]} );
            holder_icons['Move Down'][1].attr( {transform: ['t',holder_w/2-20,holder_h-37]} );
            holder_icons['Move Right'][0].attr( {transform: ['t',holder_w-37,holder_h/2-20]} );
            holder_icons['Move Right'][1].attr( {transform: ['t',holder_w-37,holder_h/2-20]} );
            holder_icons['Move Left'][0].attr( {transform: ['t',5,holder_h/2-20]} );
            holder_icons['Move Left'][1].attr( {transform: ['t',5,holder_h/2-20]} );
            r.safari();
        }
    )
})();