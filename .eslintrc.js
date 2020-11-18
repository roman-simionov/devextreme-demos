module.exports = {

    root: true,

    env: {
        "es6": true
    },

    parserOptions: {
        "sourceType": "module"
    },

    plugins: [
        "spellcheck"
    ],

    rules: {
        "spellcheck/spell-checker": [
            "error",
            {
                lang: "en_US",
                comments: false,
                strings: false,
                identifiers: true,
                skipIfMatch: [
                    "^\\$?..$"
                ],
                skipWords: [
                    "acc", // DXHotelsNetApi\Client\views\currentHotel.js ?
                    "accessor",
                    "adaptivity",
                    "adrs",
                    "africa",
                    "ajax",
                    "api",
                    "ar", // arabic
                    "arabic",
                    "arg",
                    "argb", // ExcelJS
                    "args",
                    "asia",
                    "async",
                    "attr",
                    "attrs",
                    "aug",
                    "autocomplete",
                    "backorder",
                    "backordered", // DevAV NetCore
                    "bing",
                    "bkg",
                    "bg", //ExcelJS
                    "br", // <br> tag in html
                    "Cldr",
                    "canada",
                    "ceil",
                    "checkbox",
                    "cityid",
                    "cluster",
                    "cnstl",
                    "colorizer",
                    "concat",
                    "coord",
                    "coords",
                    "cordova",
                    "cpu",
                    "crosshair",
                    "ctrl",
                    "datebox",
                    "de",
                    "ru",
                    "democase",
                    "democases",
                    "desc",
                    "dest", // gulp
                    "dev", // DevAV
                    "devexpress",
                    "devextremeaddon",
                    "dialogs",
                    "docurl",
                    "draggable",
                    "dropzone",
                    "dto",
                    "dx",
                    "dxkey", // for React templates
                    "emp",
                    "evt",
                    "english",
                    "eurasia",
                    "europe",
                    "european",
                    "exe",
                    "expr",
                    "fav",
                    "faved",
                    "femalemiddle",
                    "femaleolder",
                    "femaleyoung",
                    "filename", // DXHotelsNetApi\Client\views\booking.js from db
                    "fitted",
                    "fg", // ExcelJS
                    "formatter",
                    "func",
                    "gantt",
                    "gdp", // gross domestic product
                    "geolocation",
                    "getter",
                    "getters",
                    "mapGetters",
                    "gif",
                    "goto",
                    "guid",
                    "holydays",
                    "hotelid",
                    "href",
                    "html",
                    "http",
                    "https",
                    "ie",
                    "iframe",
                    "img",
                    "init",
                    "inited",
                    "ity", // DXHotelsNetApi\Client\views\home.js  CIty_Image from db
                    "Fmt", // ExcelJS
                    "jan",
                    "js",
                    "jszip",
                    "jsonp",
                    "jsserver",
                    "jul",
                    "july",
                    "jun",
                    "june",
                    "Kanban",
                    "latinamerica",
                    "len",
                    "li",
                    "lng",
                    "loc",
                    "lookups",
                    "longtabs",
                    "malemiddle",
                    "maleolder",
                    "maleyoung",
                    "maximumfractiondigits",
                    "metadata",
                    "mmp",
                    "monday",
                    "msg",
                    "multiline",
                    "mvc",
                    "na", // NaN
                    "namespace",
                    "nav",
                    "nbsp",
                    "nd",
                    "nighly", // DXHotelsNetApi\Client\views\booking.js from db
                    "noop",
                    "northamerica",
                    "num",
                    "objs",
                    "occured",
                    "oceania",
                    "ok",
                    "olympic",
                    "onclick",
                    "onhashchange",
                    "onreadystatechange",
                    "orderby",
                    "pageview",
                    "pangaea",
                    "param",
                    "params",
                    "perc",
                    "perf",
                    "pdf",
                    "pivotgrid",
                    "png", // DataGrid CustomEditors for image format
                    "popup",
                    "popups",
                    "pos",
                    "postfix",
                    "prec",
                    "pregrouped",
                    "prepend",
                    "prev",
                    "rangebar",
                    "readdir", // node js
                    "realtor",
                    "rect",
                    "req",
                    "resellers",
                    "resize",
                    "resizing",
                    "roomid",
                    "rtl",
                    "sankey",
                    "sclass", // CSSClass
                    "scrollable",
                    "scrollbar",
                    "setted",
                    "skype",
                    "smp",
                    "sonee",
                    "sortable",
                    "sparkline",
                    "splashscreen",
                    "splinearea",
                    "sqlite",
                    "sqrt",
                    "src",
                    "stacktrace",
                    "startswith",
                    "steparea",
                    "stepline",
                    "str",
                    "stringify",
                    "strikethrough",
                    "submenu",
                    "substr",
                    "substring",
                    "subvalue",
                    "subvalues",
                    "svg",
                    "swfobject",
                    "th",
                    "td",
                    "theatre",
                    "timestamp",
                    "tmp",
                    "tooltip",
                    "tooltips",
                    "transpile",
                    "transpiler",
                    "treeview",
                    "ui", // User Interface
                    "ul",
                    "ungrouped",
                    "unordered",
                    "unselect", // unselectAll()
                    "unshift",
                    "uploader",
                    "uri",
                    "urlencoded",
                    "usa",
                    "util",
                    "utils",
                    "validator",
                    "viewport",
                    "volumne", // stockMarket, rename to volume
                    "vue",
                    "winloss",
                    "writeable", // knockout
                    "xlsx", // ExcelJS
                    "xhr",
                    "Xmla",
                    "xmla",
                    "youtube",
                    "ytd",
                    "zipcode",
                    "Serializer" //XMLSerializer
                ]
            }
        ]
    }
}
