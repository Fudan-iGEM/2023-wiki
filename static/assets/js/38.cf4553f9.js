(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{401:function(t,i,e){"use strict";e.r(i);var n=e(411),s=e.n(n),o={props:{options:{type:Object,required:!0},height:Number,width:Number},data(){return{style:{width:this.width?this.width+"px":"100%",height:this.height?this.height+"px":"100%",overflow:"hidden"}}},mounted(){this.anim=s.a.loadAnimation({container:this.$refs.lavContainer,renderer:"svg",loop:!1!==this.options.loop,autoplay:!1!==this.options.autoplay,path:this.options.path,rendererSettings:this.options.rendererSettings}),this.$emit("animCreated",this.anim)}},h=e(3),r=Object(h.a)(o,(function(){return(0,this._self._c)("div",{ref:"lavContainer",style:this.style})}),[],!1,null,null,null);i.default=r.exports}}]);