module.exports=[18622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},96549,a=>{a.v({className:"xTJHDW_className",variable:"xTJHDW_variable"})},71800,a=>{a.v({className:"FlyLvG_className",variable:"FlyLvG_variable"})},6029,a=>{a.v({className:"MOT0tq_className",variable:"MOT0tq_variable"})},93500,a=>{"use strict";var b=a.i(9514),c=a.i(96549);let d={className:c.default.className,style:{fontFamily:"'Archivo', 'Archivo Fallback'",fontStyle:"normal"}};null!=c.default.variable&&(d.variable=c.default.variable);var e=a.i(6029);let f={className:e.default.className,style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"}};null!=e.default.variable&&(f.variable=e.default.variable);var g=a.i(71800);let h={className:g.default.className,style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"}};null!=g.default.variable&&(h.variable=g.default.variable);let i=`
(function () {
  var pattern = /^(?:bis_|__processed)/;
  function scrub(el) {
    if (el.nodeType !== 1 || !el.attributes) return;
    for (var i = el.attributes.length - 1; i >= 0; i--) {
      var name = el.attributes[i].name;
      if (pattern.test(name)) el.removeAttribute(name);
    }
  }
  function walk(root) {
    if (!root) return;
    scrub(root);
    var all = root.querySelectorAll ? root.querySelectorAll("*") : [];
    for (var i = 0; i < all.length; i++) scrub(all[i]);
  }
  walk(document);
  new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      if (muts[i].type === "attributes") scrub(muts[i].target);
      else for (var j = 0; j < muts[i].addedNodes.length; j++) walk(muts[i].addedNodes[j]);
    }
  }).observe(document, { attributes: true, childList: true, subtree: true });
})();
`;a.s(["default",0,function({children:a}){return(0,b.jsx)("html",{lang:"en",className:`${d.variable} ${f.variable} ${h.variable} h-full antialiased`,suppressHydrationWarning:!0,children:(0,b.jsxs)("body",{className:"min-h-full",suppressHydrationWarning:!0,children:[(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:i}}),a]})})},"metadata",0,{title:"URDIS — Your Design I Ship",description:"URDIS — you hand over the design, I ship it. Design systems, product interfaces and fullstack architecture — numbered, built and shipped by the same pair of hands."}],93500)},65880,function(a){a.n(a.i(93500))},13070,(a,b,c)=>{"use strict";b.exports=a.r(18622)},9514,(a,b,c)=>{"use strict";b.exports=a.r(13070).vendored["react-rsc"].ReactJsxRuntime}];

//# sourceMappingURL=%5Broot-of-the-server%5D__075ojuuv4etd4._.js.map