(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{471:function(t,e,n){"use strict";n.r(e);var i=n(3),a=Object(i.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("div",[t("script",{attrs:{type:"text/javascript"}},[this._v("\n    // Listen to size change and update form height\n    window.addEventListener('message', function (e) {\n      const {type, data} = JSON.parse(e.data);\n      if (type === 'igem-attribution-form') {\n        const element = document.getElementById('igem-attribution-form')\n        element.style.height = data + 50 +'px'\n      }\n    });\n  ")]),this._v(" "),t("iframe",{staticStyle:{width:"100%"},attrs:{id:"igem-attribution-form",src:"https://attributions.igem.org?team=Fudan&year=2023"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);