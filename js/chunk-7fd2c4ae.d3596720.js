(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd2c4ae"],{"0644":function(e,a,t){"use strict";var n=t("c10a"),i=t.n(n);i.a},"10b7":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"initial-state-ens"},[t("form",{staticClass:"send-form"},[t("div",{staticClass:"title-container"},[t("div",{staticClass:"title"},[t("h4",[e._v("\n          "+e._s(e.$t("interface.ensManager"))+"\n        ")]),t("p",[e._v(e._s(e.$t("interface.registerEnsDesc")))])])]),t("div",{staticClass:"the-form domain-name"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.localDomainName,expression:"localDomainName"}],class:[e.domainNameErr?"errored":""],attrs:{placeholder:e.$t("dapps.registerEnsPlaceholder"),type:"text",name:""},domProps:{value:e.localDomainName},on:{input:function(a){a.target.composing||(e.localDomainName=a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.multiTld,expression:"!multiTld"}]},[e._v("."+e._s(e.tld))])]),t("div",{staticClass:"error-message-container"},[t("p",{directives:[{name:"show",rawName:"v-show",value:!1===e.contractInitiated,expression:"contractInitiated === false"}],staticClass:"contract-loading-warning"},[e._v("\n        "+e._s(e.$t("dapps.registerEnsContractNotReady"))+"\n      ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.domainNameErr,expression:"domainNameErr"}],staticClass:"erroredMsg"},[e.localDomainName.length<7&&""!==e.localDomainName?t("span",[e._v("\n          "+e._s(e.$t("dapps.registerEnsWarn1"))+"\n        ")]):t("span",[e._v(" "+e._s(e.$t("dapps.registerEnsWarn2"))+" ")])])]),t("div",{staticClass:"submit-button-container"},[t("button",{class:[e.domainNameErr||""===e.localDomainName?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:function(a){return a.preventDefault(),e.checkDomain(a)}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[e._v(" "+e._s(e.$t("interface.checkDomain"))+" ")]),t("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),t("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=t("539d"),o={components:{"interface-bottom-text":s["a"]},props:{checkDomain:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},contractInitiated:{type:Boolean,default:!1},hostName:{type:String,default:""},tld:{type:String,default:""},domainNameErr:{type:Boolean,default:!1},multiTld:{type:Boolean,default:!1}},data:function(){return{localDomainName:this.hostName}},watch:{localDomainName:function(e){this.$emit("domainNameChange",e)},domainName:function(e){this.localDomainName=e}},methods:{expendDomainCheckForm:function(){this.$refs["checkForm"].classList.toggle("hidden"),this.$refs["domainList"].classList.add("hidden")},domainAvailabilityCheck:function(){this.$refs["domainList"].classList.add("hidden")}}},r=o,l=(t("0644"),t("2877")),c=Object(l["a"])(r,n,i,!1,null,"666c0df0",null),d=c.exports;t.d(a,"default",function(){return d})},c10a:function(e,a,t){}}]);
//# sourceMappingURL=chunk-7fd2c4ae.d3596720.js.map