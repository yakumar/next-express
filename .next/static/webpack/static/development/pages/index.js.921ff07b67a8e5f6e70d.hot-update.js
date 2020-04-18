webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/ya/Documents/shopify/test1/client/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // const PostLink = props => (
//     <li>
//       <Link href="/p/[id]" as={`/p/${props.id}`}>
//         <a>{props.id}</a>
//       </Link>
//     </li>
//   );

var Index = function Index(props) {
  // console.log(props);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      myFile = _useState[0],
      setMyFile = _useState[1];

  var letsSubmit = function letsSubmit(e) {
    e.preventDefault();
    var file = document.getElementById("file-field").files[0];
    setMyFile(file);
    var config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }; //    console.log(file)

    var data = new FormData();
    data.append("meme", file);
    var url = "http://localhost:8080/uploadFile";
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(url, data, config).then(function (res) {
      console.log("from Client data:", res.data);
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("form", {
    onSubmit: letsSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    id: "file-field",
    name: "meme",
    value: myFile,
    onSelect: onMySelect,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "submit",
    value: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
}; // Index.getInitialProps = async()=>{
//     let res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
//     let data = await res.data;
//     // console.log("show Data ::", data);
//     return {
//         data:data
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (Index); // <ul>
// <PostLink id="Hello-Nextjs" />
// <PostLink id="Learn-Next.js-is-awesome" />
// <PostLink id="Deploy-apps-with-Zeit" />
// </ul>

/***/ })

})
//# sourceMappingURL=index.js.921ff07b67a8e5f6e70d.hot-update.js.map