(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a788fe0"],{"039b9":function(e,t,n){"use strict";var a=n("a1a5"),s=n.n(a);s.a},1526:function(e,t,n){e.exports=n.p+"img/button-key.79e4057e.svg"},"436b":function(e,t,n){},"5c5e":function(e,t,n){e.exports=n.p+"img/eac-hov.0ff9427d.svg"},"6c15":function(e,t,n){e.exports=n.p+"img/domain.5194defa.svg"},"9ebb":function(e,t,n){"use strict";var a=n("436b"),s=n.n(a);s.a},a1a5:function(e,t,n){},c222:function(e,t,n){e.exports=n.p+"img/domain-hov.cce19f91.svg"},cb09:function(e,t,n){e.exports=n.p+"img/domain-sale.f07a77b5.svg"},e8c4:function(e,t,n){e.exports=n.p+"img/eac.8c229ac0.svg"},ef00:function(e,t,n){e.exports=n.p+"img/domain-sale-hov.e110128d.svg"},f4d0:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dapps-container"},[n("div",[n("interface-container-title",{attrs:{title:e.$t("common.dapps")}}),n("div",{staticClass:"buttons-container"},e._l(e.sortedObject,function(t){return n("dapp-buttons",{key:t.title,attrs:{title:e.$t(t.title),icon:t.icon,"icon-disabled":t.iconDisabled,desc:e.$t(t.desc),param:t.route,"supported-networks":t.supportedNetworks}})}),1)],1)])},s=[],o=(n("7f7f"),n("6762"),n("2fdb"),n("55dd"),n("a4bb")),c=n.n(o),i=(n("ac6a"),n("cebc")),r=n("55c1"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["dapps-button",e.supported?"":"disabled"]},[n("router-link",{attrs:{to:e.param,tag:"div"}},[n("img",{attrs:{src:e.supported?e.icon:e.iconDisabled}}),n("div",[n("h4",[e._v(e._s(e.title))]),n("p",[e._v(e._s(e.desc))])])])],1)},d=[],u=n("2f62"),f={props:{title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""},iconDisabled:{type:String,default:""},param:{type:String,default:""},supportedNetworks:{type:Array,default:function(){return[]}}},computed:Object(i["a"])({},Object(u["b"])({network:"network"}),{supported:function(){return this.supportedNetworks.includes(this.network.type.name)}})},l=f,b=(n("039b9"),n("2877")),m=Object(b["a"])(l,p,d,!1,null,"14a01cf3",null),g=m.exports,v=n("cb09"),k=n.n(v),w=n("ef00"),h=n.n(w),y=n("6c15"),O=n.n(y),D=n("c222"),E=n.n(D),N=n("fda64"),S=n.n(N),_=n("1526"),x=n.n(_),j=n("e8c4"),T=n.n(j),$=n("5c5e"),C=n.n($),H=n("8761"),R={manageEns:{route:"/interface/dapps/manage-ens",icon:O.a,iconDisabled:E.a,title:"interface.ensManager",desc:"interface.registerENSDescShort",supportedNetworks:[H["ETH"].name,H["GOERLI"].name,H["ROP"].name,H["RIN"].name]},domainSale:{route:"/interface/dapps/buy-subdomain",icon:k.a,iconDisabled:h.a,title:"interface.subdomains",desc:"interface.buySubDomains",supportedNetworks:[H["ETH"].name]},secureTransaction:{route:"/interface/dapps/secure-transaction",icon:S.a,iconDisabled:x.a,title:"dapps.safesend_title",desc:"dapps.safesend_desc",supportedNetworks:[H["ETH"].name]},scheduleTransaction:{route:"/interface/dapps/schedule-transaction",icon:T.a,iconDisabled:C.a,title:"Schedule a transaction",desc:"Schedule a transaction using the decentralized Ethereum Alarm Clock protocol",supportedNetworks:[H["ETH"].name,H["ROP"].name,H["KOV"].name]}},A=R,I={name:"DappsContainer",components:{"interface-container-title":r["a"],"dapp-buttons":g},data:function(){return{localDapps:A}},computed:Object(i["a"])({},Object(u["b"])({network:"network"}),{sortedObject:function(){var e=this,t=[];return c()(A).forEach(function(e){t.push(A[e])}),t.sort(function(t,n){return t.supportedNetworks.includes(e.network.type.name)||n.supportedNetworks.includes(e.network.type.name)?1:0})}})},J=I,P=(n("9ebb"),Object(b["a"])(J,a,s,!1,null,"66ae975e",null)),z=P.exports;n.d(t,"default",function(){return z})},fda64:function(e,t,n){e.exports=n.p+"img/button-key-hover.c1cbfefc.svg"}}]);
//# sourceMappingURL=chunk-0a788fe0.0f30afa9.js.map