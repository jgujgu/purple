var purple =[
    "P",
    m("span", {class: "gold-color"}, "["),
    "u",
    m("span", {class: "gold-color"}, "]"),
    "rpl",
    m("span", {class: "gold-color"}, "["),
    "e",
    m("span", {class: "gold-color"}, "]"),
];

var polyfilter_scriptpath = '/js/';

var layout = function(nav, body) {
    return m("div", [
        m("div", nav),
        m("div", body)
    ]);
};

var menu = function() {
    return [
        m("div", {id: "logo"}, [
            m("canvas", {id: "gold"}),
            m("h1", {id: "title"}, purple),
            m("h3", {id: "blurb"}, "Regal Web Design")
        ]),
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
                    m("button", {id: "about", "data-modal": "modal-13", class: "md-trigger"}, [
                        m("span", {class: "mega-octicon octicon-person"}),
                    ]),
                ]),
                m("li", [
                    m("button", {id: "checkout"}, [
                        m("span", {class: "mega-octicon octicon-credit-card"}),
                    ]),
                ]),
                m("li", [
                    m("a", {href: "/contact", config: m.route}, [
                        m("span", {class: "mega-octicon octicon-mail"}),
                    ]),
                ]),
            ]),
        ]),
        m(".md-modal.md-effect-13[id='modal-13']", [
            m(".md-content", [
                m("h3", [
                    "About ",
                    purple,
                ]),
                m("div", [
                    m("p", [
                        purple,
                        " was founded on the principle that royal refinement and magnificence could be emulated on the platform for everyone. We are a designer-developer team that emphasizes a seamless user experience and awe-inspiring artistry.",
                        " From the database to the drawing-panel, we are experts in the entire creative process.",
                        " Contact us today for a quote on your next, beautiful project.",
                    ]),
                    m("button.md-close", {id: "close"}, [
                        m("span", {class: "mega-octicon octicon-check"}),
                    ])
                ])
            ])
        ]),
        m(".md-overlay"),
        m("script", {src: "js/classie.js"}),
        m("script", {src: "js/borderMenu.js"}),
        m("script", {src: "js/TweenLite.min.js"}),
        m("script", {src: "js/EasePack.min.js"}),
        m("script", {src: "js/gold.js"}),
        m("script", {src: "https://checkout.stripe.com/checkout.js"}),
        m("script", {src: "js/stripe.js"}),
        m("script", {src: "js/classie.js"}),
        m("script", {src: "js/modalEffects.js"}),
        m("script", {src: "js/cssParser.js"}),
        m("script", {src: "js/css-filters-polyfill.js"}),
    ];
};

var homeBody = function() {
    return [
        m("h1", {id: "slogan"}, [
            m("span", {id: "year"}, "It's 2015. "),
            m("span", {id: "look"}, "Look like it."),
        ]),
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
        m("h1", {id: "tech", class: "center"}, "Our Acumen"),
        m("div", {id: "logo-div", class: "center"}, [
            m("img", {id: "ang", src: "img/angular.png"}),
            m("img", {id: "node", src: "img/node.png"}),
            m("img", {id: "mithril", src: "img/mithril.png"}),
            m("img", {id: "ai", src: "img/ai.png"}),
            m("img", {id: "d3", src: "img/d3.svg"}),
            m("img", {id: "react", src: "img/react.png"}),
            //m("img", {id: "vim", src: "img/vim.png"}),
            m("img", {id: "mongo", src: "img/mongodb.png"}),
            m("img", {id: "rails", src: "img/rails.png"}),
            m("img", {id: "pg", src: "img/pg.png"}),
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
        m("div", {id: "about"}, [
        ])
    ];
};

var contactBody = function() {
    return [
        m("form.nl-form[id='nl-form']", [
            "I would like to hire ",
            purple,
            m("br"),
            "for my next\n",
            m("select", [
                m("option[selected=''][value='1']", "JavaScript"),
                m("option[value='2']", "Ruby"),
                m("option[value='2']", "design"),
                m("option[value='3']", "data viz")
            ]),
            "\nproject.\n",
            m("br"),
            "It will be an\n",
            m("select", [
                m("option[selected=''][value='1']", "interactive"),
                m("option[value='2']", "static")
            ]),
            "\nwebsite\n",
            m("br"),
            "with many\n",
            m("select", [
                m("option[selected=''][value='1']", "items"),
                m("option[value='2']", "users"),
                m("option[value='3']", "pages"),
                m("option[value='4']", "none of these choices")
            ]),
            m("br"),
            " for ",
            m("input[data-subline='Examples: <em>court jesters</em> or <em>handmaidens</em>'][placeholder='the modern royalty'][type='text'][value='']"),
            ".",
            m("br"),
            m("input[data-subline='Examples: <em>king_george@castle.com</em> or <em>emperor_qianlong@forbiddenpalace.com</em>'][placeholder='you@email.com'][type='text'][value='']"),
            m(".nl-submit-wrap", [
                m("button.nl-submit[type='submit']", "Decree it.")
            ]),
            m(".nl-overlay")
        ]),
        m("script", {src: "js/nlform.js"}),
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

var contact = {
    view: function() {
        return mixinLayout(layout, menu, contactBody);
    }
};

m.route.mode = "hash";

m.route(document.body, "/", {
    "/": root,
    "/skills": skills,
    "/viz": viz,
    "/contact": contact,
});
