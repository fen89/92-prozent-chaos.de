__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{}],fetch:[{prefix:"blog",posts:[{title:"Create a custom preloading screen in Angular",date:"04\u002F01\u002F2020",description:"I'm  quite sure that you know these kind of situations. You opened a web app and you are staring at a completely white screen - and nothing seems to happen. \n",tags:[ad],category:ad,draft:false,toc:[],body:{type:"root",children:[{type:b,tag:z,props:{},children:[{type:a,value:"I'm quite sure that you know these kind of situations. You opened a web app and you are staring at a completely white screen - and nothing seems to happen."}]},{type:b,tag:z,props:{},children:[{type:a,value:"Wouldn't it be better if some kind of motion would tell you, the user, that something is happening in the background to get things ready for work?"}]},{type:b,tag:z,props:{},children:[{type:a,value:"The best method is to place the loading animations to our "},{type:b,tag:w,props:{},children:[{type:a,value:R}]},{type:a,value:ae},{type:b,tag:w,props:{},children:[{type:a,value:"\u003Capp-root\u003E\u003C\u002Fapp-root\u003E"}]},{type:a,value:", because Angular will remove everything inside the apps mounting pount."}]},{type:b,tag:K,props:{className:[S]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:R}]},{type:b,tag:U,props:{className:[V,Y]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:"Loading..."},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:G}]}]}]},{type:b,tag:z,props:{},children:[{type:a,value:"To overcome the fact, that the styles need to be loaded if used from included sources we will place the used styles inside the "},{type:b,tag:w,props:{},children:[{type:a,value:C}]},{type:a,value:" element as well."}]},{type:b,tag:K,props:{className:[S]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:R}]},{type:b,tag:U,props:{className:[V,Y]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"purple"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:"\n  I'm a purple loading message!\n"},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:G}]}]}]},{type:b,tag:z,props:{},children:[{type:a,value:"The following example uses one of Angular's built in provider "},{type:b,tag:w,props:{},children:[{type:a,value:_}]},{type:a,value:" ("},{type:b,tag:ag,props:{href:"https:\u002F\u002Fangular.io\u002Fapi\u002Fcore\u002FAPP_INITIALIZER",rel:[ah,ai,aj],target:ak},children:[{type:a,value:"reference"}]},{type:a,value:")."}]},{type:b,tag:z,props:{},children:[{type:a,value:"An "},{type:b,tag:w,props:{},children:[{type:a,value:_}]},{type:a,value:" is a Dependency Injection token which can be used to provide one or more (use "},{type:b,tag:w,props:{},children:[{type:a,value:"multi"}]},{type:a,value:ae},{type:b,tag:w,props:{},children:[{type:a,value:"providers"}]},{type:a,value:" registration)."}]},{type:b,tag:K,props:{className:[S]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:"app.module.ts"}]},{type:b,tag:U,props:{className:[V,"language-ts"],dataLine:"5-8"},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"initApp"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"new"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,an]},children:[{type:a,value:"Promise"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"setTimeout"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"\u002F\u002F do whatever you like, "}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,ap]},children:[{type:a,value:"\u002F\u002F e.g. load specific app data from the server"}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"3000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n\n@"},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"NgModule"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n  imports"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:"BrowserModule"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:" FormsModule"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"\n  declarations"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"\n  providers"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n      provide"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"\n      multi"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"true"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"\n      useFactory"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:" initApp"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"\n  bootstrap"},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:W}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:X}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,an]},children:[{type:a,value:"AppModule"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:G}]}]}]},{type:b,tag:z,props:{},children:[{type:a,value:"For the loading animation we are using a spinner from "},{type:b,tag:ag,props:{href:"https:\u002F\u002Ftobiasahlin.com\u002Fspinkit\u002F",rel:[ah,ai,aj],target:ak},children:[{type:a,value:"Spin Kit"}]},{type:a,value:"."}]},{type:b,tag:K,props:{className:[S]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:R}]},{type:b,tag:U,props:{className:[V,Y]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,N]},children:[{type:b,tag:c,props:{className:[d,af]},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,D]},children:[{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:".spinner"}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"width"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"height"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"background-color"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Z,"hexcode"]},children:[{type:a,value:"#333"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"margin"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"100"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:a,value:" auto"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"-webkit-animation"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:au}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"animation"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:au}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,ax]},children:[{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"@-webkit-keyframes"}]},{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aA}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aB}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,ax]},children:[{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"@keyframes"}]},{type:a,value:az}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aA}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aB}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n          "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:H}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"="}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aG}]},{type:a,value:"spinner"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aG}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:"\n\n"}]}]}]},{type:b,tag:z,props:{},children:[{type:a,value:"And thats all - users do have a nice loading screen while the app bootstraps and loads in the background."}]},{type:b,tag:z,props:{},children:[{type:b,tag:"img",props:{alt:"Loading Spinner",src:"\u002Fblog\u002Fangular-preloading-screen\u002Floading-animation.gif"},children:[]}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fangular-preloading-screen",extension:".md",slug:"angular-preloading-screen",createdAt:aH,updatedAt:aH,readingTime:"2 min read",content:"\r\nI'm  quite sure that you know these kind of situations. You opened a web app and you are staring at a completely white screen - and nothing seems to happen. \r\n\r\nWouldn't it be better if some kind of motion would tell you, the user, that something is happening in the background to get things ready for work?\r\n\r\nThe best method is to place the loading animations to our `index.html` inside the `\u003Capp-root\u003E\u003C\u002Fapp-root\u003E`, because Angular will remove everything inside the apps mounting pount.\r\n\r\n```html{}[index.html]\r\n\u003Capp-root\u003ELoading...\u003C\u002Fapp-root\u003E\r\n```\r\n\r\nTo overcome the fact, that the styles need to be loaded if used from included sources we will place the used styles inside the `app-root` element as well.\r\n\r\n```html{}[index.html]\r\n\u003Capp-root\u003E\r\n  \u003Cstyle\u003E\r\n    app-root {\r\n      color: purple;\r\n    }\r\n  \u003C\u002Fstyle\u003E\r\n  I'm a purple loading message!\r\n\u003C\u002Fapp-root\u003E\r\n```\r\n\r\nThe following example uses one of Angular's built in provider `APP_INITIALIZER` ([reference](https:\u002F\u002Fangular.io\u002Fapi\u002Fcore\u002FAPP_INITIALIZER)). \r\n\r\nAn `APP_INITIALIZER` is a Dependency Injection token which can be used to provide one or more (use `multi` inside the `providers` registration).\r\n\r\n```ts{5-8}[app.module.ts]\r\nexport function initApp() {\r\n  return () =\u003E {\r\n    return new Promise((resolve) =\u003E {\r\n      setTimeout(() =\u003E {\r\n        \u002F\u002F do whatever you like, \r\n        \u002F\u002F e.g. load specific app data from the server\r\n        resolve();\r\n      }, 3000);\r\n    });\r\n  };\r\n}\r\n\r\n@NgModule({\r\n  imports: [BrowserModule, FormsModule],\r\n  declarations: [AppComponent],\r\n  providers: [\r\n    {\r\n      provide: APP_INITIALIZER,\r\n      multi: true,\r\n      useFactory: initApp,\r\n    }\r\n  ],\r\n  bootstrap: [AppComponent]\r\n})\r\nexport class AppModule {}\r\n```\r\n\r\nFor the loading animation we are using a spinner from [Spin Kit](https:\u002F\u002Ftobiasahlin.com\u002Fspinkit\u002F).\r\n\r\n```html{}[index.html]\r\n\u003Capp-root\u003E\r\n  \u003Cstyle\u003E\r\n    .spinner {\r\n      width: 40px;\r\n      height: 40px;\r\n      background-color: #333;\r\n\r\n      margin: 100px auto;\r\n      -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n      animation: sk-rotateplane 1.2s infinite ease-in-out;\r\n    }\r\n\r\n    @-webkit-keyframes sk-rotateplane {\r\n      0% {\r\n        -webkit-transform: perspective(120px);\r\n      }\r\n\r\n      50% {\r\n        -webkit-transform: perspective(120px) rotateY(180deg);\r\n      }\r\n\r\n      100% {\r\n        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);\r\n      }\r\n    }\r\n\r\n    @keyframes sk-rotateplane {\r\n      0% {\r\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\r\n      }\r\n\r\n      50% {\r\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\r\n      }\r\n\r\n      100% {\r\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\r\n        -webkit-transform: perspective(120px) rotateX(-180deg)\r\n          rotateY(-179.9deg);\r\n      }\r\n    }\r\n  \u003C\u002Fstyle\u003E\r\n\r\n  \u003Cdiv class=\"spinner\"\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fapp-root\u003E\r\n\r\n```\r\n\r\nAnd thats all - users do have a nice loading screen while the app bootstraps and loads in the background.\r\n\r\n![Loading Spinner](\u002Fblog\u002Fangular-preloading-screen\u002Floading-animation.gif)\r\n\u003C!-- I built a small [demo on stackblitz](https:\u002F\u002Fstackblitz.com\u002Fedit\u002Fangular-znpvkc?file=src\u002Findex.html) as well where you can try it out by yourself. --\u003E\r\n"}]}],mutations:void 0}}("text","element","span","token","punctuation"," ","(",")","number","function","unit","tag",":",";","{","}","\n      ","property","deg","\u003E","\n        ","px","code","\n    ","operator","p","perspective","120","app-root","selector",",","rotateY","\n","\n  ","keyword","rotateX","div","\u003C","\u003C\u002F","style","-webkit-transform","0","\n\n      ","index.html","nuxt-content-highlight","filename","pre","line-numbers","[","]","language-html","color","APP_INITIALIZER","=\u003E","class","180","transform","Angular"," inside the ","language-css","a","nofollow","noopener","noreferrer","_blank","export","return","class-name","resolve","comment","AppComponent","40"," sk-rotateplane ","1.2","s"," infinite ease-in-out","\n\n    ","atrule","rule"," sk-rotateplane","0%","50%","100%","-180.1","-180","-179.9","\"","2020-08-21T19:21:34.732Z")));