import{S as ve,i as ke,s as Ee,C as Le,e as te,a as b,k as u,q as g,D as Pe,h as f,c as v,l as $,m as A,r as O,n as d,E as i,b as N,F as Te,G as Be,H as ye,g as Ne,d as Re,I as we,J as Ue,u as ce,K as he,p as ae}from"../chunks/index.c9973389.js";import{e as be,a as qe}from"../chunks/forms.794d1d53.js";import"../chunks/navigation.91f9df7c.js";import{p as Ae}from"../chunks/stores.69002488.js";const{document:x}=Ue;function fe(o){let t,e;return{c(){t=u("meta"),this.h()},l(r){t=$(r,"META",{name:!0,content:!0}),this.h()},h(){d(t,"name","description"),d(t,"content",e=o[4].data.description)},m(r,a){N(r,t,a)},p(r,a){a&16&&e!==(e=r[4].data.description)&&d(t,"content",e)},d(r){r&&f(t)}}}function ne(o){let t,e,r=o[0].user.name+"",a;return{c(){t=u("p"),e=g("Logged in as "),a=g(r)},l(n){t=$(n,"P",{});var _=A(t);e=O(_,"Logged in as "),a=O(_,r),_.forEach(f)},m(n,_){N(n,t,_),i(t,e),i(t,a)},p(n,_){_&1&&r!==(r=n[0].user.name+"")&&ce(a,r)},d(n){n&&f(t)}}}function ue(o){let t,e;return{c(){t=u("a"),e=g("Login"),this.h()},l(r){t=$(r,"A",{href:!0,"data-sveltekit-preload-data":!0});var a=A(t);e=O(a,"Login"),a.forEach(f),this.h()},h(){d(t,"href","/login"),d(t,"data-sveltekit-preload-data","off")},m(r,a){N(r,t,a),i(t,e)},d(r){r&&f(t)}}}function $e(o){let t,e,r,a,n,_;return{c(){t=u("form"),e=u("button"),r=g("Logout"),this.h()},l(B){t=$(B,"FORM",{method:!0,action:!0});var p=A(t);e=$(p,"BUTTON",{type:!0});var y=A(e);r=O(y,"Logout"),y.forEach(f),p.forEach(f),this.h()},h(){d(e,"type","submit"),d(t,"method","POST"),d(t,"action",a="/login?/logout&redirectTo="+o[4].url.pathname)},m(B,p){N(B,t,p),i(t,e),i(e,r),n||(_=he(be.call(null,t)),n=!0)},p(B,p){p&16&&a!==(a="/login?/logout&redirectTo="+B[4].url.pathname)&&d(t,"action",a)},d(B){B&&f(t),n=!1,_()}}}function de(o){var oe,se;let t,e,r,a,n,_,B,p,y,G,k,W,F,M,j,D,I,C,S,E,L,c,P,K,R,T,l,m,H,V,z,Q,J,le,ee,re,ie,w=o[2]&&me(o),U=((oe=o[3])==null?void 0:oe.usernameMissing)&&pe(),q=((se=o[3])==null?void 0:se.passwordMissing)&&_e();return{c(){w&&w.c(),t=b(),e=u("form"),r=u("label"),a=g("Username"),n=b(),_=u("br"),B=b(),p=u("input"),G=b(),k=u("br"),W=b(),U&&U.c(),F=b(),M=u("br"),j=u("br"),D=b(),I=u("label"),C=g("Password"),S=b(),E=u("br"),L=b(),c=u("input"),P=b(),K=u("br"),R=u("br"),T=b(),l=u("br"),m=b(),q&&q.c(),H=b(),V=u("br"),z=u("br"),Q=b(),J=u("button"),le=g("Login"),this.h()},l(h){w&&w.l(h),t=v(h),e=$(h,"FORM",{method:!0,action:!0});var s=A(e);r=$(s,"LABEL",{for:!0});var X=A(r);a=O(X,"Username"),X.forEach(f),n=v(s),_=$(s,"BR",{}),B=v(s),p=$(s,"INPUT",{id:!0,name:!0,placeholder:!0,type:!0}),G=v(s),k=$(s,"BR",{}),W=v(s),U&&U.l(s),F=v(s),M=$(s,"BR",{}),j=$(s,"BR",{}),D=v(s),I=$(s,"LABEL",{for:!0});var Y=A(I);C=O(Y,"Password"),Y.forEach(f),S=v(s),E=$(s,"BR",{}),L=v(s),c=$(s,"INPUT",{id:!0,name:!0,placeholder:!0,type:!0}),P=v(s),K=$(s,"BR",{}),R=$(s,"BR",{}),T=v(s),l=$(s,"BR",{}),m=v(s),q&&q.l(s),H=v(s),V=$(s,"BR",{}),z=$(s,"BR",{}),Q=v(s),J=$(s,"BUTTON",{type:!0});var Z=A(J);le=O(Z,"Login"),Z.forEach(f),s.forEach(f),this.h()},h(){var h;d(r,"for","username"),d(p,"id","username"),d(p,"name","username"),d(p,"placeholder","username"),d(p,"type","text"),p.value=y=((h=o[3])==null?void 0:h.username)||"",d(I,"for","password"),d(c,"id","password"),d(c,"name","password"),d(c,"placeholder","password"),d(c,"type","password"),d(J,"type","submit"),J.disabled=o[1],d(e,"method","POST"),d(e,"action",ee="/login?/login&redirectTo="+o[4].url.pathname)},m(h,s){w&&w.m(h,s),N(h,t,s),N(h,e,s),i(e,r),i(r,a),i(e,n),i(e,_),i(e,B),i(e,p),i(e,G),i(e,k),i(e,W),U&&U.m(e,null),i(e,F),i(e,M),i(e,j),i(e,D),i(e,I),i(I,C),i(e,S),i(e,E),i(e,L),i(e,c),i(e,P),i(e,K),i(e,R),i(e,T),i(e,l),i(e,m),q&&q.m(e,null),i(e,H),i(e,V),i(e,z),i(e,Q),i(e,J),i(J,le),re||(ie=he(be.call(null,e,o[5])),re=!0)},p(h,s){var X,Y,Z;h[2]?w?w.p(h,s):(w=me(h),w.c(),w.m(t.parentNode,t)):w&&(w.d(1),w=null),s&8&&y!==(y=((X=h[3])==null?void 0:X.username)||"")&&p.value!==y&&(p.value=y),(Y=h[3])!=null&&Y.usernameMissing?U||(U=pe(),U.c(),U.m(e,F)):U&&(U.d(1),U=null),(Z=h[3])!=null&&Z.passwordMissing?q||(q=_e(),q.c(),q.m(e,H)):q&&(q.d(1),q=null),s&2&&(J.disabled=h[1]),s&16&&ee!==(ee="/login?/login&redirectTo="+h[4].url.pathname)&&d(e,"action",ee)},d(h){w&&w.d(h),h&&f(t),h&&f(e),U&&U.d(),q&&q.d(),re=!1,ie()}}}function me(o){let t,e;return{c(){t=u("p"),e=g(o[2]),this.h()},l(r){t=$(r,"P",{style:!0});var a=A(t);e=O(a,o[2]),a.forEach(f),this.h()},h(){ae(t,"color","red")},m(r,a){N(r,t,a),i(t,e)},p(r,a){a&4&&ce(e,r[2])},d(r){r&&f(t)}}}function pe(o){let t,e;return{c(){t=u("p"),e=g("Username required"),this.h()},l(r){t=$(r,"P",{style:!0});var a=A(t);e=O(a,"Username required"),a.forEach(f),this.h()},h(){ae(t,"color","red")},m(r,a){N(r,t,a),i(t,e)},d(r){r&&f(t)}}}function _e(o){let t,e;return{c(){t=u("p"),e=g("Password required"),this.h()},l(r){t=$(r,"P",{style:!0});var a=A(t);e=O(a,"Password required"),a.forEach(f),this.h()},h(){ae(t,"color","red")},m(r,a){N(r,t,a),i(t,e)},d(r){r&&f(t)}}}function Me(o){let t,e,r,a,n,_,B,p,y,G,k,W,F,M,j,D,I,C,S;x.title=t="Website Name"+(o[4].data.title?` - ${o[4].data.title}`:"");let E=o[4].data.description&&fe(o),L=o[0].user&&ne(o),c=!o[0].user&&ue(),P=o[0].user&&$e(o);const K=o[7].default,R=Le(K,o,o[6],null);let T=!o[0].user&&o[4].url.pathname!=="/login"&&de(o);return{c(){E&&E.c(),e=te(),r=b(),L&&L.c(),a=b(),n=u("nav"),_=u("a"),B=g("Home"),p=b(),y=u("a"),G=g("Products"),k=b(),c&&c.c(),W=b(),P&&P.c(),F=b(),M=u("form"),j=u("input"),D=b(),R&&R.c(),I=b(),T&&T.c(),C=te(),this.h()},l(l){const m=Pe("svelte-1hjik0q",x.head);E&&E.l(m),e=te(),m.forEach(f),r=v(l),L&&L.l(l),a=v(l),n=$(l,"NAV",{"data-sveltekit-preload-data":!0});var H=A(n);_=$(H,"A",{href:!0});var V=A(_);B=O(V,"Home"),V.forEach(f),p=v(H),y=$(H,"A",{href:!0});var z=A(y);G=O(z,"Products"),z.forEach(f),k=v(H),c&&c.l(H),H.forEach(f),W=v(l),P&&P.l(l),F=v(l),M=$(l,"FORM",{method:!0,action:!0});var Q=A(M);j=$(Q,"INPUT",{name:!0}),Q.forEach(f),D=v(l),R&&R.l(l),I=v(l),T&&T.l(l),C=te(),this.h()},h(){d(_,"href","/"),d(y,"href","/products"),d(n,"data-sveltekit-preload-data","hover"),d(j,"name","q"),d(M,"method","GET"),d(M,"action","/search")},m(l,m){E&&E.m(x.head,null),i(x.head,e),N(l,r,m),L&&L.m(l,m),N(l,a,m),N(l,n,m),i(n,_),i(_,B),i(n,p),i(n,y),i(y,G),i(n,k),c&&c.m(n,null),N(l,W,m),P&&P.m(l,m),N(l,F,m),N(l,M,m),i(M,j),N(l,D,m),R&&R.m(l,m),N(l,I,m),T&&T.m(l,m),N(l,C,m),S=!0},p(l,[m]){(!S||m&16)&&t!==(t="Website Name"+(l[4].data.title?` - ${l[4].data.title}`:""))&&(x.title=t),l[4].data.description?E?E.p(l,m):(E=fe(l),E.c(),E.m(e.parentNode,e)):E&&(E.d(1),E=null),l[0].user?L?L.p(l,m):(L=ne(l),L.c(),L.m(a.parentNode,a)):L&&(L.d(1),L=null),l[0].user?c&&(c.d(1),c=null):c||(c=ue(),c.c(),c.m(n,null)),l[0].user?P?P.p(l,m):(P=$e(l),P.c(),P.m(F.parentNode,F)):P&&(P.d(1),P=null),R&&R.p&&(!S||m&64)&&Te(R,K,l,l[6],S?ye(K,l[6],m,null):Be(l[6]),null),!l[0].user&&l[4].url.pathname!=="/login"?T?T.p(l,m):(T=de(l),T.c(),T.m(C.parentNode,C)):T&&(T.d(1),T=null)},i(l){S||(Ne(R,l),S=!0)},o(l){Re(R,l),S=!1},d(l){E&&E.d(l),f(e),l&&f(r),L&&L.d(l),l&&f(a),l&&f(n),c&&c.d(),l&&f(W),P&&P.d(l),l&&f(F),l&&f(M),l&&f(D),R&&R.d(l),l&&f(I),T&&T.d(l),l&&f(C)}}}function ge(o,t,e){let r;we(o,Ae,k=>e(4,r=k));let{$$slots:a={},$$scope:n}=t,{data:_}=t,B=!1,p="",y;const G=()=>(e(1,B=!0),e(2,p=""),({result:k})=>{e(1,B=!1),k.type==="redirect"&&(e(3,y=null),qe(k)),k.type==="error"&&e(2,p=k.error.message),k.type==="failure"&&e(3,y=k.data)});return o.$$set=k=>{"data"in k&&e(0,_=k.data),"$$scope"in k&&e(6,n=k.$$scope)},[_,B,p,y,r,G,n,a]}class He extends ve{constructor(t){super(),ke(this,t,ge,Me,Ee,{data:0})}}export{He as default};
