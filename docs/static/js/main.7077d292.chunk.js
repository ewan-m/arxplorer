(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/physics.dddb8825.jpg"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/biology.c5627250.jpg"},function(e,t,a){e.exports=a.p+"static/media/computerscience.a58b43f0.jpg"},function(e,t,a){e.exports=a.p+"static/media/economics.134e8343.jpg"},function(e,t,a){e.exports=a.p+"static/media/electricalengineering.04424be5.jpg"},function(e,t,a){e.exports=a.p+"static/media/finance.1d97ddf2.jpg"},function(e,t,a){e.exports=a.p+"static/media/mathematics.1cbed547.jpg"},function(e,t,a){e.exports=a.p+"static/media/statistics.34157f1d.jpg"},function(e,t,a){e.exports=a.p+"static/media/generic.80ef1cf8.png"},function(e,t,a){e.exports=a.p+"static/media/profile.6cb7a123.jpg"},,function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),l=(a(41),a(42),a(43),a(44),a(45),a(46),a(47),a(48),a(49),a(50),a(51),a(2)),s=(a(52),a(14));function o(e){var t=e.icon,a="/"+e.name.replace(" ","");return r.a.createElement(s.b,{to:a,className:"menu-item",activeClassName:"selected"},r.a.createElement(t,null),r.a.createElement("span",{className:"link-name"},e.name))}var u=function(){return r.a.createElement("header",{className:"site-header"},r.a.createElement("h1",{className:"title"},"arXiv"),r.a.createElement("div",{className:"buttons-section"},r.a.createElement(o,{name:"search",icon:l.h}),r.a.createElement(o,{name:"favourites",icon:l.d}),r.a.createElement(o,{name:"about",icon:l.e})))},m=a(6),f=a(7),d=a(8),p=a(10),h=a(9),E=a(11),v=a(19),g=(a(57),a(26)),b=a.n(g),N=a(27),y=a.n(N),j=a(28),S=a.n(j),w=a(29),O=a.n(w),x=a(30),k=a.n(x),C=a(31),A=a.n(C),M=a(15),P=a.n(M),J=a(32),H=a.n(J),L={physics:P.a,ph:P.a,bio:b.a,cs:y.a,econ:S.a,eess:O.a,fin:k.a,math:A.a,stat:H.a,"gr-qc":P.a},Q=a(33),F=a.n(Q),I={get:function(){return JSON.parse(localStorage.getItem("favourite-articles")||"[]")},set:function(e){return localStorage.setItem("favourite-articles",JSON.stringify(e))},isFavourite:function(e){return I.get().some(function(t){return t.pdfHref===e.pdfHref})}},T=(a(58),function(e){return r.a.createElement("div",{className:"darken-background actually-darken"},r.a.createElement("div",{className:"inner-modal"},r.a.createElement("div",{className:"even-spaced-row"},r.a.createElement("h2",{className:"margin-right"},e.article.title),r.a.createElement("span",{role:"button",className:"modal-close",onClick:function(){return e.close(!1)}},r.a.createElement(l.i,null))),r.a.createElement("div",{className:"margin-bottom"},r.a.createElement("label",null,e.article.journal)),r.a.createElement("p",{className:"margin-bottom"},e.article.summary),r.a.createElement("div",{className:"even-spaced-row"},r.a.createElement("label",{className:"margin-right"},new Date(e.article.published).toLocaleDateString()),r.a.createElement("label",{className:"author",title:e.article.authors.join(", ")},e.article.authors.join(", ")))))}),_=function(e){var t="",a="",c={"--animation-order":e.id},i=Object(n.useState)(I.isFavourite(e.article)),s=Object(v.a)(i,2),o=s[0],u=s[1],m=Object(n.useState)(!1),f=Object(v.a)(m,2),d=f[0],p=f[1],h=e.article.authors.join(", ");Object.keys(L).forEach(function(n){""===a&&e.article.primaryCategory&&e.article.primaryCategory.includes(n)&&(a=L[n],t=n)}),""===a&&(a=F.a,t="econ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"article-card-container animate-in",style:c},r.a.createElement("div",{className:"image-category-section"},r.a.createElement("img",{alt:"category",src:a}),r.a.createElement("div",{className:"colour-overlay "+t},r.a.createElement("label",{className:"category-label"},e.article.primaryCategory))),r.a.createElement("div",{className:"author-title-section"},r.a.createElement("h2",null,e.article.title),r.a.createElement("label",{title:h},h)),r.a.createElement("div",{className:"buttons-section "+t},r.a.createElement("button",{onClick:function(){return function(){var t=I.get();I.isFavourite(e.article)?t=t.filter(function(t){return t.pdfHref!==e.article.pdfHref}):t.unshift(e.article),I.set(t),u(!o)}()},className:o?"button fav":"button"},r.a.createElement(l.d,null)),r.a.createElement("button",{className:"button",onClick:function(){return p(!d)}},r.a.createElement(l.a,null)),r.a.createElement("a",{className:"button",href:e.article.pdfHref},r.a.createElement(l.b,null)))),d&&r.a.createElement(T,{close:p,article:e.article}))},q=a(35),D=(a(59),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state=void 0,a.timeout=void 0,a.updateSearches=function(e){a.setState({recentSearches:[]}),setTimeout(function(){return a.setState({recentSearches:e})},2)},a.onSearchKeyUp=function(e){null!==a.timeout&&clearTimeout(a.timeout),e&&(a.timeout=setTimeout(function(){a.updateSearches([e].concat(Object(q.a)(a.state.recentSearches))),a.props.parent.getArticlesMatching(e)},1e3))},a.removeSearch=function(e){var t=JSON.parse(JSON.stringify(a.state.recentSearches));t.splice(e,1),a.updateSearches(t)},a.state={recentSearches:[]},a.timeout=null,a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{className:"searching-form"},r.a.createElement("select",{className:"input-inline",onChange:function(t){return e.props.parent.setSelectedQuery(t.target.value)}},r.a.createElement("option",{value:"all"},"All fields"),r.a.createElement("option",{value:"ti"},"Title"),r.a.createElement("option",{value:"au"},"Author"),r.a.createElement("option",{value:"abs"},"Abstract"),r.a.createElement("option",{value:"co"},"Comments"),r.a.createElement("option",{value:"jr"},"Journal reference"),r.a.createElement("option",{value:"rn"},"Report number"),r.a.createElement("option",{value:"cat"},"Category")),r.a.createElement("input",{placeholder:"Search","aria-label":"Search for articles",className:"input-inline",onChange:function(t){return e.onSearchKeyUp(t.target.value)}})),this.state.recentSearches.length>0&&r.a.createElement("div",{className:"recent-searches-row"},r.a.createElement("label",{className:"recent-searches-label"},"recent searches:"),this.state.recentSearches.map(function(t,a){return r.a.createElement("label",{key:a,className:"recent-search-pill",onClick:function(t){return e.removeSearch(a)}},r.a.createElement("span",{onClick:function(a){return e.onSearchKeyUp(t)},className:"trigger-search"},t),r.a.createElement("span",{role:"button",className:"delete-search"},r.a.createElement(l.i,null)))})))}}]),t}(r.a.PureComponent));function K(e){var t=Number(R(e,"itemsPerPage")),a=Number(R(e,"startIndex")),n=Number(R(e,"totalResults"));return{articlesPerPage:t,currentPage:a,totalArticles:n,articles:n>0?function(e,t){var a=[],n=e.indexOf("<entry>"),r=e.substring(n);for(;t>0;){var c=r.indexOf("</entry>"),i=r.substring(0,c);a.push(U({published:R(i,"published"),authors:X(i,"author","name",R),title:R(i,"title"),summary:R(i,"summary"),primaryCategory:B(V(i,"arxiv:primary_category"),"term"),secondaryCategories:X(i,"category","term",B),doi:R(i,"arxiv:doi"),pdfHref:W(i,"link","href","title","pdf"),journal:R(i,"arxiv:journal_ref")},"")),r=r.substring(c+"</entry>".length),t--}return a}(e,Math.min(n,t)):null}}function U(e,t){return Object.keys(e).forEach(function(a){return e[a]===t&&delete e[a]}),e}function R(e,t){try{var a=e.split(t)[1];return a.slice(a.indexOf(">")+1,a.indexOf("<"))}catch(n){return""}}function V(e,t){try{return e.split(t)[1]}catch(a){return""}}function B(e,t){try{var a=e.substring(e.indexOf(t)+t.length+2);return a.substring(0,a.indexOf('"'))}catch(n){return""}}function W(e,t,a,n,r){try{return e.split("<".concat(t)).slice(1).map(function(e){return{attrName:B(e,n),attrValue:B(e,a)}}).filter(function(e){return e.attrName===r})[0].attrValue}catch(c){return""}}function X(e,t,a,n){return e.split("<".concat(t)).slice(1).map(function(e){return n(e,a)})}a(60);function Y(){for(var e=[],t=Math.min(Math.round(window.innerWidth/20),20),a=0;a<t;a++)e.push({"--animation-order":a});return r.a.createElement("div",{className:"dna-helix"},e.map(function(e,t){return r.a.createElement("div",{className:"node",key:t,style:e})}))}a(61);function z(){return r.a.createElement("div",null)}var G=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).timeout=void 0,a.state=void 0,a.selectedQuery="all",a.componentDidMount=function(){return a.getArticlesMatching("random")},a.timeout=null,a.state={isLoaded:!1,articles:null},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"setSelectedQuery",value:function(e){this.selectedQuery=e}},{key:"getArticlesMatching",value:function(e){var t=this;this.setState({isLoaded:!1,articles:null});var a="".concat(this.selectedQuery,":%22").concat(e.split(" ").join("+"),"%22");fetch("https://export.arxiv.org/api/query?search_query=".concat(a)).then(function(e){return e.text()}).then(function(e){var a=K(e).articles;t.setState({isLoaded:!0,articles:a})},function(e){t.setState({isLoaded:!0,articles:null})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"inner-page-padding"},r.a.createElement(D,{parent:this}),null!==this.state.articles?r.a.createElement("div",{className:"articles-grid"},this.state.articles.map(function(e,t){return r.a.createElement("div",{className:"article",key:t},r.a.createElement(_,{id:t,article:e}))})):r.a.createElement("div",{className:"loading-not-found-container"},this.state.isLoaded?r.a.createElement("p",null,"No results found"):r.a.createElement(Y,null)),r.a.createElement(z,null))}}]),t}(r.a.PureComponent),Z=(a(62),a(34)),$=a.n(Z),ee=function(){return r.a.createElement("div",{className:"centered-flex"},r.a.createElement("div",{className:"about-panel"},r.a.createElement("img",{alt:"my face",src:$.a,className:"profile-image"}),r.a.createElement("h1",{className:"ewan"},"Ewan Morrison"),r.a.createElement("h2",{className:"job-title"},"Software Engineer"),r.a.createElement("div",{className:"centered-flex"},r.a.createElement("a",{href:"https://www.linkedin.com/in/ewan-morrison/",target:"blank"},r.a.createElement("div",{className:"social-icon-container"},r.a.createElement(l.g,{className:"social-icon"}))),r.a.createElement("a",{href:"https://www.twitter.com/ewanm5",target:"blank"},r.a.createElement("div",{className:"social-icon-container"},r.a.createElement(l.j,{className:"social-icon"}))),r.a.createElement("a",{href:"https://www.instagram.com/ewanmorrison_",target:"blank"},r.a.createElement("div",{className:"social-icon-container"},r.a.createElement(l.f,{className:"social-icon"}))),r.a.createElement("a",{href:"https://www.github.com/ewan-m",target:"blank"},r.a.createElement("div",{className:"social-icon-container"},r.a.createElement(l.c,{className:"social-icon"}))))))},te=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).articles=I.get(),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inner-page-padding"},this.articles.length>0?r.a.createElement("div",{className:"articles-grid"},this.articles.map(function(e,t){return r.a.createElement("div",{className:"article"},r.a.createElement(_,{key:t,id:t,article:e}))})):r.a.createElement("div",{className:"loading-not-found-container"},r.a.createElement("p",null,"You haven't favourited any articles")),r.a.createElement(z,null))}}]),t}(r.a.PureComponent);i.a.render(r.a.createElement(function(){return r.a.createElement(s.a,{basename:"arxplorer"},r.a.createElement("div",{className:"app"},r.a.createElement(u,null),r.a.createElement("div",{className:"page-container"},r.a.createElement(m.a,{exact:!0,path:"/",component:G}),r.a.createElement(m.a,{path:"/search",component:G}),r.a.createElement(m.a,{path:"/about",component:ee}),r.a.createElement(m.a,{path:"/favourites",component:te}))))},null),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.7077d292.chunk.js.map