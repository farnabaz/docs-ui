import{d as f,ag as m,ah as y,b as r,c as o,e as d,n as s,aA as a,t as i,f as n,aa as g,j as v,ab as x}from"./entry.m42KvJXc.js";const q=f({inheritAttrs:!1,__name:"Field",props:{name:{},description:{default:void 0},type:{default:void 0},required:{type:Boolean,default:!1},default:{default:void 0},class:{default:void 0}},setup(l){const p={wrapper:"mt-5",container:"flex items-start gap-x-2.5 font-mono text-sm",name:"rounded-md font-semibold text-primary",required:"text-gray-500 dark:text-gray-400",type:"text-right",label:"flex flex-1 gap-x-2.5",description:"mt-3 mb-0 text-gray-600 dark:text-gray-300 text-sm space-y-3"},c=l,{ui:t,attrs:u}=m("content.field",void 0,p,y(c,"class"),!0);return(e,k)=>(r(),o("div",x({class:a(t).wrapper},a(u)),[d("div",{class:s(a(t).container)},[d("div",{class:s(a(t).label)},[d("span",{class:s(a(t).name)},i(e.name),3),e.required?(r(),o("span",{key:0,class:s(a(t).required)},"required",2)):n("",!0)],2),e.type?(r(),o("div",{key:0,class:s(a(t).type)},i(e.type),3)):n("",!0)],2),e.$slots.default||e.description?(r(),o("div",{key:0,class:s(a(t).description)},[g(e.$slots,"default",{},()=>[v(i(e.description),1)])],2)):n("",!0)],16))}});export{q as default};
