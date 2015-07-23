var layout = function(nav, body) {
    return m("div", [
        m("div", nav),
        m("div", body)
    ]);
};

var menu = function() {
    return [
        m("nav", {id: "bt-menu", class: "bt-menu"},[
            m("a", {class:"bt-menu-trigger"}, [ m("span", "Menu")]),
            m("ul",[
                m("li", [
                    m("a", {href: "/"}, [
                        m("span", {class: "mega-octicon octicon-home"}),
                    ]),
                ]),
                m("li", [
                    m("a", {href: "/skills", config: m.route}, [
                        m("span", {class: "mega-octicon octicon-keyboard"}),
                    ]),
                ]),
                m("li", [
                    m("a", {href: "/viz", config: m.route}, [
                        m("span", {class: "mega-octicon octicon-graph"}),
                    ]),
                ]),
                m("li", [
                    m("a", {href: "/about", config: m.route}, [
                        m("span", {class: "mega-octicon octicon-person"}),
                    ]),
                ]),
                m("li", [
                    m("a", {href: "/about", config: m.route}, [
                        m("span", {class: "mega-octicon octicon-octoface"}),
                    ]),
                ]),
                m("li", [
                    m("a", {href: "/contact", config: m.route}, [
                        m("span", {class: "mega-octicon octicon-mail"}),
                    ]),
                ]),
            ]),
        ]),
        m("script", {src: "js/classie.js"}),
        m("script", {src: "js/borderMenu.js"}),
    ];
};

var homeBody = function() {
    return [
        m("h1", {id: "title"}, "P[u]rpl[e]. Stately Web Design."),
        m("div", {id: "hexa-div"}, [
            m("div", {id: "hexaflip", class: "hexa"}),
            m("div", {id: "btn-div"}, [
                m("button", {id: "prev", class:"btn btn-2 btn-2j"}, "<"),
                m("button", {id: "next", class:"btn btn-2 btn-2j"}, ">"),
            ]),
        ])
    ];
};

var skillsBody = function() {
    return [
        m("div", [
            m("img", {src: "img/angular.png"}),
            m("img", {src: "img/react.png"}),
            m("img", {src: "img/mithril.png"}),
            m("img", {src: "img/rails.png"}),
            m("img", {src: "img/vim.png"}),
            m("img", {src: "img/pg.png"}),
            m("img", {src: "img/mongodb.png"}),
        ])
    ];
};

var vizBody = function() {
    return [
        m("h1", "Viz")
    ];
};

var aboutBody = function() {
    return [
        m("h1", "About")
    ];
};

var contactBody = function() {
    return [
        m("h1", "Contact")
    ];
};

var mixinLayout = function(layout, nav, body) {
    return (function () {
        return layout(nav(), body());
    }());
};

var dashboard = {
    controller: function() {
        return {id: m.route.param("userID")};
    },
    view: function(controller) {
        return m("div",[
            m("div",[
                m("a", {href: "/dashboard/alicesmith", config: m.route}, controller.id),
            ]),
        ]);
    }
};

var root = {
    view: function() {
        return mixinLayout(layout, menu, homeBody);
    }
};

var skills = {
    view: function() {
        return mixinLayout(layout, menu, skillsBody);
    }
};

var viz = {
    view: function() {
        return mixinLayout(layout, menu, vizBody);
    }
};

var about = {
    view: function() {
        return mixinLayout(layout, menu, aboutBody);
    }
};

var contact = {
    view: function() {
        return mixinLayout(layout, menu, contactBody);
    }
};

var login = {
    view: function() {
        return m("div", "login");
    }
};

m.route.mode = "hash";

m.route(document.body, "/", {
    "/": root,
    "/skills": skills,
    "/viz": viz,
    "/about": about,
    "/contact": contact,
    "/dashboard/:userID": dashboard,
});
