import{_ as k,o as a,c as l,a as t,t as o,r as I,b as F,n as m,d as n,e as V,p as x,f as q,F as _,g,h as T,i as M,j as w,k as U,l as K,u as E,m as v}from"./index-33c63efb.js";import{$get as W}from"./Aegis-380b03b3.js";const G=["src","title"],J={__name:"Title",props:{hero:{type:Object,default:()=>({})}},setup(e){return(u,i)=>(a(),l("module",null,[t("img",{class:"Header",src:"./head/".concat(e.hero.head,".jpg"),title:e.hero.id},null,8,G),t("p-name",null,o(e.hero.name),1),t("p-nick",null,"—— "+o(e.hero.nick),1)]))}},P=k(J,[["__scopeId","data-v-16cf2fc9"]]);const N=e=>(x("data-v-ddf71f05"),e=e(),q(),e),Q={attr:""},X=N(()=>t("p-title",null,"● 角色定位",-1)),Y={split:""},Z={split:""},ee={break:""},te=N(()=>t("p-title",null,"● 进化素材",-1)),ae=["alt","title"],le=["alt","title"],ne=["alt","title"],se=["alt","title"],oe=["alt","title"],re=["alt","title"],ie=["alt","title"],ce=["alt","title"],ue={mate:""},de=N(()=>t("p-title",null,"● 推荐队友",-1)),he={key:0},me=["src","alt"],_e={exclu:""},ge=N(()=>t("p-title",null,"● 专属装备",-1)),ye={key:0},be=["src","alt"],pe={key:1,class:"block"},ke=["alt"],ve={"no-desc":""},$e={__name:"Attr",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=I({pos:["","近战","远程","肉盾","输出","辅助","前期","中期","后期"],heat:["fast","middle","slow"]});return(i,c)=>(a(),l("module",{style:V({backgroundImage:"url(./draw/".concat(e.hero.draw,".jpg)")})},[t("p-box",Q,[X,t("p-attr-tag",null,o(u.value.pos[e.hero.pos[2]]),1),t("p-attr-tag",Y,o(u.value.pos[e.hero.pos[1]])+" ( "+o(e.hero.attr.range)+" )",1),t("p-attr-tag",Z,[F(o(u.value.pos[e.hero.pos[3]])+" ",1),t("p-sprite",{class:m(["inblock w-6 h-6 select-none","_heat-".concat(u.value.heat[e.hero.pos[3]-6])])},null,2)])]),t("p-box",ee,[te,t("p-material",{class:m("_material-".concat(e.hero.breaks[0].image)),alt:e.hero.breaks[0].name,title:e.hero.breaks[0].name},null,10,ae),t("p-material",{class:m("_material-".concat(e.hero.breaks[1].image)),alt:e.hero.breaks[1].name,title:e.hero.breaks[1].name},null,10,le),t("p-material",{class:m("_material-".concat(e.hero.breaks[2].image)),alt:e.hero.breaks[2].name,title:e.hero.breaks[2].name},null,10,ne),t("p-material",{split:"",class:m("_material-".concat(e.hero.breaks[3].image)),alt:e.hero.breaks[3].name,title:e.hero.breaks[3].name},null,10,se),t("p-material",{class:m("_material-".concat(e.hero.breaks[4].image)),alt:e.hero.breaks[4].name,title:e.hero.breaks[4].name},null,10,oe),t("p-material",{split:"",class:m("_material-".concat(e.hero.breaks[5].image)),alt:e.hero.breaks[5].name,title:e.hero.breaks[5].name},null,10,re),t("p-material",{class:m("_material-".concat(e.hero.breaks[6].image)),alt:e.hero.breaks[6].name,title:e.hero.breaks[6].name},null,10,ie),e.hero.breaks[7]?(a(),l("p-material",{key:0,split:"",class:m("_material-".concat(e.hero.breaks[7].image)),alt:e.hero.breaks[7].name,title:e.hero.breaks[7].name},null,10,ce)):n("",!0)]),t("p-box",ue,[de,e.hero.mate?(a(),l("p-image-text",he,[t("img",{class:"inblock Header",src:"./head/".concat(e.hero.mate.head,".jpg"),alt:e.hero.mate.name},null,8,me),t("p-two-line",null,[t("p-name",null,o(e.hero.mate.name),1),t("p-desc",null,o(e.hero.mate.note),1)])])):n("",!0)]),t("p-box",_e,[ge,e.hero.ring?(a(),l("p-image-text",ye,[t("img",{"no-ring":"",class:"inblock Header",src:"./equip/".concat(e.hero.ring.image,".jpg"),alt:e.hero.ring.image},null,8,be),t("p-two-line",null,[t("p-name",null,o(e.hero.ring.name),1),t("p-desc",null,o(e.hero.ring.desc),1)])])):n("",!0),e.hero.engrav?(a(),l("p-image-text",pe,[t("p-image",{class:m(["_engrav-".concat(e.hero.engrav.image)]),alt:e.hero.engrav.name},null,10,ke),t("p-two-line",null,[t("p-name",ve,o(e.hero.engrav.name),1)])])):n("",!0)])],4))}},fe=k($e,[["__scopeId","data-v-ddf71f05"]]);const we=e=>(x("data-v-0cdc6fb5"),e=e(),q(),e),xe=we(()=>t("p-title",null,"● 英雄立绘",-1)),qe=["src"],He={__name:"Draw",props:{hero:{type:Object,default:()=>({})}},setup(e){return(u,i)=>(a(),l("module",null,[xe,t("img",{src:"./draw/".concat(e.hero.draw,".jpg")},null,8,qe)]))}},je=k(He,[["__scopeId","data-v-0cdc6fb5"]]);const B=e=>(x("data-v-3089af93"),e=e(),q(),e),Te={skill:""},Le=B(()=>t("p-title",null,"● 英雄技能",-1)),Ie=B(()=>t("p-alter",null,"橙色数值是技能精通后的数值",-1)),Ce=["src","action"],Me=["innerHTML"],Se={__name:"Skill",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=async i=>{const c=i.target;c.hasAttribute("error-once")||(c.setAttribute("error-once",""),c.src=await W(c.getAttribute("action")+".fuckosc"))};return(i,c)=>(a(),l("module",Te,[Le,Ie,t("table",null,[(a(!0),l(_,null,g(e.hero.skills,d=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:"./skill/".concat(d.image,".jpg"),action:"skill/".concat(d.image,".jpg"),onError:u},null,40,Ce),t("p-skill-name",null,o(d.name),1)]),t("p-skill-desc",{innerHTML:d.desc},null,8,Me)])]))),256))])]))}},Oe=k(Se,[["__scopeId","data-v-3089af93"]]);const Ee=["src"],Ne=["innerHTML"],Ae={__name:"Captain",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=e,i=T(()=>{var c,d;return(d=(c=u.hero)==null?void 0:c.captains)!=null&&d.length?"":"（尚未实装）"});return(c,d)=>(a(),l("module",null,[t("p-title",null,"● 助战技能"+o(i.value),1),t("table",null,[(a(!0),l(_,null,g(e.hero.captains,h=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:"./skill/".concat(h.image,".jpg")},null,8,Ee),t("p-skill-name",null,o(h.name),1)]),t("p-skill-desc",{innerHTML:h.desc},null,8,Ne)])]))),256))])]))}},De=k(Ae,[["__scopeId","data-v-9f4de61f"]]);const Ve=e=>(x("data-v-568ff330"),e=e(),q(),e),Be={combo:""},Re={key:0},ze=Ve(()=>t("tr",{class:"nosel"},[t("th",null,"组合名"),t("th",null,"效果"),t("th",null,"主技能"),t("th",null,"组合技1"),t("th",null,"组合技2")],-1)),Fe={class:"font-bold"},Ue={class:""},Ke=["rowspan"],We=["src"],Ge=["rowspan"],Je=["src"],Pe={mate:""},Qe=["src"],Xe={class:"inline name"},Ye=["rowspan"],Ze={__name:"Combo",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=e,i=T(()=>{var c,d;return(d=(c=u.hero)==null?void 0:c.combos)!=null&&d.reduce((h,y)=>h+y.combos.length,0)?"":"（无）"});return(c,d)=>(a(),l("module",Be,[t("p-title",null,"● 技能组合"+o(i.value),1),i.value?n("",!0):(a(),l("table",Re,[ze,(a(!0),l(_,null,g(e.hero.combos,h=>(a(),l(_,null,[(a(!0),l(_,null,g(h.combos,(y,r)=>(a(),l("tr",null,[t("td",Fe,o(y.name),1),t("td",Ue,o(y.effect),1),r==0?(a(),l("td",{key:0,rowspan:h.combos.length},[t("img",{src:"./skill/".concat(h.image,".jpg")},null,8,We),t("p-name",null,o(h.name),1)],8,Ke)):n("",!0),(a(!0),l(_,null,g(y.skills,b=>(a(),l(_,null,[b.hide?n("",!0):(a(),l(_,{key:0},[b.empty?(a(),l("td",{key:1,rowspan:b.rowspan},"无",8,Ye)):(a(),l("td",{key:0,rowspan:b.rowspan},[t("img",{src:"./skill/".concat(b.image,".jpg")},null,8,Je),t("p-skill-mate",null,[t("p-name",Pe,o(b.name),1),t("p-hero",null,[t("img",{hero:"",src:"./head/".concat(b.heroHead,".jpg")},null,8,Qe),t("p-name",Xe,o(b.heroName),1)])])],8,Ge))],64))],64))),256))]))),256))],64))),256))]))]))}},et=k(Ze,[["__scopeId","data-v-568ff330"]]);const tt={__name:"CrystalIcon",props:{id:{type:Number,default:null}},setup(e){const u=e,i=I({1:"gray",3:"#218EDA",4:"#C841E0",5:"#DC6727"}),c=I({5001:{name:"堕天",quality:1,image:"black/angel04"},5002:{name:"统治",quality:1,image:"black/crow04"},5003:{name:"永夜",quality:1,image:"black/death04"},5004:{name:"抵御",quality:1,image:"black/defence04"},5005:{name:"深渊",quality:1,image:"black/demon04"},5006:{name:"宿命",quality:3,image:"black/destiny04"},5007:{name:"灼烧",quality:3,image:"black/fire04"},5008:{name:"宝藏",quality:4,image:"black/grail04"},5009:{name:"凛霜",quality:4,image:"black/ice04"},5010:{name:"裁决",quality:4,image:"black/judge04"},5011:{name:"法则",quality:4,image:"black/justice04"},5012:{name:"魔法",quality:4,image:"black/magic04"},5013:{name:"永恒",quality:4,image:"black/power04"},5014:{name:"雷霆",quality:5,image:"black/thund04"},5015:{name:"堡垒",quality:5,image:"black/town04"},5016:{name:"反抗",quality:5,image:"black/war04"},5017:{name:"秘密",quality:5,image:"black/wisdom04"},5018:{name:"领域",quality:5,image:"black/world04"},5019:{name:"天使",quality:1,image:"white/angel04"},5020:{name:"王权",quality:1,image:"white/crow04"},5021:{name:"安息",quality:1,image:"white/death04"},5022:{name:"守护",quality:1,image:"white/defence04"},5023:{name:"魔鬼",quality:1,image:"white/demon04"},5024:{name:"命运",quality:3,image:"white/destiny04"},5025:{name:"热诚",quality:3,image:"white/fire04"},5026:{name:"圣杯",quality:4,image:"white/grail04"},5027:{name:"冰霜",quality:4,image:"white/ice04"},5028:{name:"审判",quality:4,image:"white/judge04"},5029:{name:"正义",quality:4,image:"white/justice04"},5030:{name:"圣言",quality:4,image:"white/magic04"},5031:{name:"力量",quality:4,image:"white/power04"},5032:{name:"闪电",quality:5,image:"white/thund04"},5033:{name:"要塞",quality:5,image:"white/town04"},5034:{name:"战争",quality:5,image:"white/war04"},5035:{name:"智慧",quality:5,image:"white/wisdom04"},5036:{name:"世界",quality:5,image:"white/world04"}}),d=T(()=>c.value[u.id]||{image:""});return(h,y)=>(a(),l("p-crystal",{style:V({color:i.value[d.value.quality]})},[t("p-image",{class:m("_crystal-".concat(d.value.image.replace(/\//g,"-")))},null,2),t("p-name",null,o(d.value.name),1)],4))}},S=k(tt,[["__scopeId","data-v-a0d1b6f5"]]);const at={key:0,class:"TableCombo"},lt={name:""},nt=["rowspan"],st=["rowspan"],ot=["rowspan"],rt=["rowspan"],it=["rowspan"],ct={desc:""},ut=["innerHTML"],dt=["innerHTML"],ht={__name:"Crystal",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=e,i=T(()=>u.hero.crystal?"":"（尚未实装）");return(c,d)=>(a(),l("module",null,[t("p-title",null,"● 专属符文"+o(i.value),1),e.hero.crystal?(a(),l("table",at,[(a(),l(_,null,g(["black","white"],(h,y)=>(a(),l(_,null,[(a(!0),l(_,null,g(e.hero.crystal[h],(r,b)=>(a(),l("tr",{class:m(y&&!b?"_splitTop":"")},[t("td",lt,o(r.name),1),r.crystals.top[0][1]?(a(),l("td",{key:0,rowspan:r.crystals.top[0][1],crystal:""},[M(S,{id:r.crystals.top[0][0]},null,8,["id"])],8,nt)):n("",!0),r.crystals.top[1][1]?(a(),l("td",{key:1,rowspan:r.crystals.top[1][1],crystal:""},[M(S,{id:r.crystals.top[1][0]},null,8,["id"])],8,st)):n("",!0),r.crystals.mid[0][1]?(a(),l("td",{key:2,rowspan:r.crystals.mid[0][1],crystal:""},[M(S,{id:r.crystals.mid[0][0]},null,8,["id"])],8,ot)):n("",!0),r.crystals.bot[0][1]?(a(),l("td",{key:3,rowspan:r.crystals.bot[0][1],crystal:""},[M(S,{id:r.crystals.bot[0][0]},null,8,["id"])],8,rt)):n("",!0),r.crystals.bot[1][1]?(a(),l("td",{key:4,rowspan:r.crystals.bot[1][1],crystal:""},[M(S,{id:r.crystals.bot[1][0]},null,8,["id"])],8,it)):n("",!0),t("td",ct,[r.states&&r.level==3?(a(!0),l(_,{key:0},g(r.states,(H,$)=>(a(),l("p-desc",{key:$,class:m({_last:r.states.length==$+1}),innerHTML:H},null,10,ut))),128)):n("",!0),r.texts?(a(!0),l(_,{key:1},g(r.texts,(H,$)=>(a(),l("p-desc",{key:$,class:m({_last:r.texts.length==$+1}),innerHTML:H},null,10,dt))),128)):n("",!0)])],2))),256))],64))),64))])):n("",!0)]))}},mt=k(ht,[["__scopeId","data-v-342fd41d"]]);const _t={ring:""},gt=["src","alt"],yt=["src"],bt=["innerHTML"],pt={__name:"Ring",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=e,i=T(()=>u.hero.ring?"":"（尚未实装）");return(c,d)=>(a(),l("module",_t,[t("p-title",null,"● 专属戒指"+o(i.value),1),e.hero.ring?(a(),l(_,{key:0},[t("p-equip",null,[t("img",{class:"nosel image",src:"./equip/".concat(e.hero.ring.image,".jpg"),alt:e.hero.ring.image},null,8,gt),t("p-equip-text",null,[t("p-equip-name",null,o(e.hero.ring.name),1),t("p-equip-desc",null,o(e.hero.ring.desc),1)])]),t("table",null,[(a(!0),l(_,null,g(e.hero.ring.skills,h=>(a(),l("tr",null,[t("td",null,[t("p-skill-title",null,[t("img",{src:"./skill/".concat(h.image,".jpg")},null,8,yt),t("p-skill-name",null,o(h.skillName),1)]),(a(!0),l(_,null,g(h.texts,(y,r)=>(a(),l("p-skill-desc",{key:r,innerHTML:y},null,8,bt))),128))])]))),256))])],64)):n("",!0)]))}},kt=k(pt,[["__scopeId","data-v-977f1a34"]]);const vt=e=>(x("data-v-d1231c81"),e=e(),q(),e),$t={engrav:""},ft={key:0},wt=["alt"],xt=vt(()=>t("p-engrav-split",null,">>>",-1)),qt=["src"],Ht=["innerHTML"],jt={__name:"Engrav",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=e,i=T(()=>u.hero.engrav.skillName=="尚未实装"?"（尚未实装）":"");return(c,d)=>(a(),l("module",$t,[t("p-title",null,"● 刻印特技"+o(i.value),1),i.value?n("",!0):(a(),l("table",ft,[t("tr",null,[t("td",null,[t("p-image",{class:m(["_engrav-".concat(e.hero.engrav.image)]),alt:e.hero.engrav.name},null,10,wt),t("p-engrav-text",null,o(e.hero.engrav.name),1),xt,t("p-skill-title",null,[t("img",{src:"./skill/".concat(e.hero.engrav.skillImage,".jpg")},null,8,qt),t("p-skill-name",null,o(e.hero.engrav.skillName),1)]),(a(!0),l(_,null,g(e.hero.engrav.texts,(h,y)=>(a(),l("p-skill-desc",{key:y,innerHTML:h},null,8,Ht))),128))])])]))]))}},Tt=k(jt,[["__scopeId","data-v-d1231c81"]]);const Lt=e=>(x("data-v-92f27cd6"),e=e(),q(),e),It={subli:""},Ct={key:0},Mt=["alt"],St=Lt(()=>t("p-engrav-split",null,">>>",-1)),Ot=["src"],Et=["innerHTML"],Nt={__name:"Subli",props:{hero:{type:Object,default:()=>({})}},setup(e){const u=e,i=T(()=>u.hero.subli.name=="尚未实装"?"（尚未实装）":"");return(c,d)=>(a(),l("module",It,[t("p-title",null,"● 极限觉醒"+o(i.value),1),!i.value&&e.hero.breaks[5]?(a(),l("table",Ct,[t("tr",null,[t("td",null,[t("p-image",{class:m(["_material-".concat(e.hero.breaks[5].image)]),alt:e.hero.breaks[5].name},null,10,Mt),t("p-engrav-text",null,o(e.hero.breaks[5].name),1),St,t("p-skill-title",null,[t("img",{src:"./skill/".concat(e.hero.subli.image,".jpg")},null,8,Ot),t("p-skill-name",null,o(e.hero.subli.name),1)]),e.hero.subli.text?(a(),l("p-skill-desc",{key:0,innerHTML:e.hero.subli.text},null,8,Et)):n("",!0)])])])):n("",!0)]))}},At=k(Nt,[["__scopeId","data-v-92f27cd6"]]);const Dt=e=>(x("data-v-0b5f1ae6"),e=e(),q(),e),Vt={voice:""},Bt=Dt(()=>t("p-title",null,"● 互动语音",-1)),Rt=["innerHTML"],zt={__name:"Voice",props:{hero:{type:Object,default:()=>({})}},setup(e){return(u,i)=>(a(),l("module",Vt,[Bt,t("table",null,[(a(!0),l(_,null,g(e.hero.voice,c=>(a(),l("tr",null,[t("td",null,[t("p-cond",{innerHTML:"🔊 "+c.name},null,8,Rt),(a(!0),l(_,null,g(c.texts,(d,h)=>(a(),l("p-line",{key:h,class:"line"},o(d),1))),128))])]))),256))])]))}},Ft=k(zt,[["__scopeId","data-v-0b5f1ae6"]]);const R=e=>(x("data-v-4bde2626"),e=e(),q(),e),Ut={story:""},Kt=R(()=>t("p-title",null,"● 背景故事",-1)),Wt={key:0},Gt=R(()=>t("td",null,"敬请期待",-1)),Jt=[Gt],Pt={key:1},Qt=["innerHTML"],Xt={key:2},Yt=["innerHTML"],Zt={key:3},ea=["innerHTML"],ta={key:4},aa=["innerHTML"],la={__name:"Story",props:{hero:{type:Object,default:()=>({})}},setup(e){return(u,i)=>(a(),l("module",Ut,[Kt,t("table",null,[e.hero.story[1]=="敬请期待"&&e.hero.story[2]=="敬请期待"&&e.hero.story[3]=="敬请期待"&&e.hero.story[4]=="敬请期待"?(a(),l("tr",Wt,Jt)):n("",!0),e.hero.story[1]&&e.hero.story[1]!="敬请期待"?(a(),l("tr",Pt,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[1])}),innerHTML:e.hero.story[1]},null,10,Qt)])):n("",!0),e.hero.story[2]&&e.hero.story[2]!="敬请期待"?(a(),l("tr",Xt,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[2])}),innerHTML:e.hero.story[2]},null,10,Yt)])):n("",!0),e.hero.story[3]&&e.hero.story[3]!="敬请期待"?(a(),l("tr",Zt,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[3])}),innerHTML:e.hero.story[3]},null,10,ea)])):n("",!0),e.hero.story[4]&&e.hero.story[4]!="敬请期待"?(a(),l("tr",ta,[t("td",{story:"",class:m({_hasTitle:/[\[【]/.test(e.hero.story[4])}),innerHTML:e.hero.story[4]},null,10,aa)])):n("",!0)])]))}},na=k(la,[["__scopeId","data-v-4bde2626"]]);const sa={key:12},oa={__name:"Home",setup(e){const u=w("$get"),i=w("indexs"),c=w("herosNow"),d=I(""),h=I(""),y=w("isOpenMenu"),r=w("isHideTop"),b=w("isHideBot"),H=w("isHideHead"),$=I({属性:"attr",技能:"skills",助战:"captains",组合:"combos",符文:"crystal",戒指:"ring",刻印:"engrav",极限:"subli",台词:"voice",故事:"story"}),z=w("loadHero"),A=async(L,C)=>{const s=await z(L);if(!s)return;const f={hero:s};for(const p of Object.values($.value))f[p]=!1;for(const p of C.length?C:Object.keys($.value)){const j=$.value[p];j&&(f[j]=!0)}c.value.push(f)},D=()=>{const L=(decodeURIComponent(window.location.hash.trim())||d.value).replace(/^#/,"").split("|");if(L.length){c.value=[],r.value=!1,b.value=!1,H.value=!1;for(const C of L){const[s,...f]=C.split(":");if(s=="菜单"){r.value=!0;continue}if(s=="声明"){b.value=!0;continue}if(s=="名称"){H.value=!0;continue}if(s=="全部")for(let p of Object.values(i.value))A(p[0],f);else if(/^\d+$/.test(s)){const p=i.value[s];p&&A(p[0],f)}else Object.values(i.value).forEach(p=>{const j=s.startsWith("'"),O=s.toLowerCase().replace(/^'/g,"");(!j&&p[1].toLowerCase().includes(O)||j&&p[1].toLowerCase()==O||!j&&p[2].toLowerCase().includes(O)||j&&p[2].toLowerCase()==O)&&A(p[0],f)})}}y.value=!!c.value.length};return U(async()=>{window.addEventListener("hashchange",D);try{i.value=await u("./hero.index.json"),d.value=await u("./hash.default.json"),h.value=await u("./hash.credit.json"),D()}catch(L){alert("加载数据失败，请刷新重试")}}),K(()=>window.removeEventListener("hashchange",D)),(L,C)=>(a(),l("module",{home:"","height-full":"",class:m(["container p-1 mx-auto overflow-x-hidden overflow-y-auto",{_showCredit:!E(b)}])},[(a(!0),l(_,null,g(E(c),(s,f)=>(a(),l(_,{key:s.hero.id},[E(H)?n("",!0):(a(),v(P,{key:0,hero:s.hero},null,8,["hero"])),s.attr?(a(),v(fe,{key:1,hero:s.hero},null,8,["hero"])):n("",!0),s.attr?(a(),v(je,{key:2,hero:s.hero},null,8,["hero"])):n("",!0),s.skills?(a(),v(Oe,{key:3,hero:s.hero},null,8,["hero"])):n("",!0),s.captains?(a(),v(De,{key:4,hero:s.hero},null,8,["hero"])):n("",!0),s.combos?(a(),v(et,{key:5,hero:s.hero},null,8,["hero"])):n("",!0),s.crystal?(a(),v(mt,{key:6,hero:s.hero},null,8,["hero"])):n("",!0),s.ring?(a(),v(kt,{key:7,hero:s.hero},null,8,["hero"])):n("",!0),s.engrav?(a(),v(Tt,{key:8,hero:s.hero},null,8,["hero"])):n("",!0),s.subli?(a(),v(At,{key:9,hero:s.hero},null,8,["hero"])):n("",!0),s.voice?(a(),v(Ft,{key:10,hero:s.hero},null,8,["hero"])):n("",!0),s.story?(a(),v(na,{key:11,hero:s.hero},null,8,["hero"])):n("",!0),E(c).length!=f+1?(a(),l("p-split",sa)):n("",!0)],64))),128)),t("p-credit",null,o(h.value),1)],2))}},ca=k(oa,[["__scopeId","data-v-040b8672"]]);export{ca as default};