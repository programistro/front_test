import{G as E,j as t,k as rs,l as as,r as a,a as cs,e as ns,L as Q}from"./index-DjYsua6Q.js";import{B as ds,S as ls}from"./SendEmail-CnaK5zam.js";import{u as Y}from"./store-BmABum_Q.js";import{S as us}from"./index-D67u9EAM.js";import{H as ps,T as q,C as J}from"./Helmet-C_2k5nwZ.js";const hs="/assets/NewCollection-Dir2tLfr.svg",K="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.125%202.81982L16%200.944824L21%205.94482L6%2020.9448L1%2015.9448L2.875%2014.0698M14.125%202.81982L2.875%2014.0698M14.125%202.81982L8.5%208.44482M8.5%208.44482L10.5%2010.4448M8.5%208.44482L2.875%2014.0698M3.5%2013.4448L5.5%2015.4448M6%2010.9448L9%2013.9448M11%205.94482L14%208.94482M13.5%203.44482L15.5%205.44482'%20stroke='%23262626'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",U="/assets/popup-pc-yMEN1vOf.svg";function W(r){return E({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"},child:[]}]})(r)}function X(r){return E({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"},child:[]}]})(r)}function xs({img:r,setImg:s}){return t.jsx("div",{onClick:()=>s({open:!1,img:null}),className:"ImageCom",children:t.jsx("img",{src:r,alt:"img"})})}const y=r=>{const[s,_]=a.useState(window.matchMedia(r).matches);return a.useEffect(()=>{const c=window.matchMedia(r),l=()=>_(c.matches);return c.addEventListener("change",l),()=>c.removeEventListener("change",l)},[r]),s};function Ns(){var M,P,z,D,V;rs();const{id:r}=as(),{findeElement:s,findeProduct:_}=Y(),[c,l]=a.useState(0),[ms,C]=a.useState(()=>localStorage.getItem("colorVibor")||""),[N,ss]=a.useState(!0),[w,ts]=a.useState(!1),{dataGelary:h,setDataGelary:L}=cs(),[x,is]=a.useState([]),{photos:S,fetchPhotos:gs}=Y(),[m,I]=a.useState(x[0]),[f,g]=a.useState({open:!1,img:null});a.useEffect(()=>{var i;x.length>0&&(I(x[0]),C((i=s==null?void 0:s.attributes.find(e=>e.product_attribute_id==1))==null?void 0:i.attribute_values[0].name))},[x,s]);const es=()=>{ss(!N)};a.useEffect(()=>{_(r);const e=document.getElementById("topSity").getBoundingClientRect().top+window.scrollY;window.scrollTo({top:e-100,behavior:"smooth"})},[r]),a.useEffect(()=>{var i;if(s!=null&&s.attributes){const e=[];(i=s==null?void 0:s.attributes.find(n=>(n==null?void 0:n.product_attribute_id)==2))==null||i.attribute_values.map(n=>{e.push(n.name)}),is(e)}},[s==null?void 0:s.attributes]);const j=i=>{console.log(h);const e=h.find(n=>n.id===i);if(console.log(e),e){const n=h.filter(b=>b.id!==e.id);L([...n,{...e,count:c+1}])}else L([...h,{id:i,title:s==null?void 0:s.name,name:s==null?void 0:s.short_description,price:s==null?void 0:s.price,size:m,count:c||1,titleImg:s.images[0],countPrice:s==null?void 0:s.price}])},v="1020px",os={className:"slider1 product-gelary variable-width-menu",dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},k=ns(),d={title:s==null?void 0:s.meta_title,description:s==null?void 0:s.meta_keywords,url:k==null?void 0:k.pathname,image:(P=(M=s==null?void 0:s.images)==null?void 0:M[0])==null?void 0:P.src,siteName:"ELEVEN ISLANDS",keywords:s==null?void 0:s.meta_descriptioт};return a.useEffect(()=>{var i,e,n,b,B,T,H,O,G,$,A,F,R,Z;(H=(T=(B=(b=(n=(e=(i=s==null?void 0:s.attributes)==null?void 0:i.find(o=>(o==null?void 0:o.product_attribute_id)==1))==null?void 0:e.attribute_values)==null?void 0:n.filter(o=>{var u,p;return((p=(u=o==null?void 0:o.name)==null?void 0:u.split("|"))==null?void 0:p[1])===r}))==null?void 0:b[0])==null?void 0:B.name)==null?void 0:T.split("|"))!=null&&H[0]&&localStorage.setItem("colorVibor",(Z=(R=(F=(A=($=(G=(O=s==null?void 0:s.attributes)==null?void 0:O.find(o=>(o==null?void 0:o.product_attribute_id)==1))==null?void 0:G.attribute_values)==null?void 0:$.filter(o=>{var u,p;return((p=(u=o==null?void 0:o.name)==null?void 0:u.split("|"))==null?void 0:p[1])===r}))==null?void 0:A[0])==null?void 0:F.name)==null?void 0:R.split("|"))==null?void 0:Z[0])},[s]),console.log(c),t.jsxs(t.Fragment,{children:[t.jsxs(ps,{children:[t.jsx("meta",{property:"og:title",content:d.title}),t.jsx("meta",{property:"og:description",content:d.description}),t.jsx("meta",{property:"og:url",content:d.url}),t.jsx("meta",{property:"og:image",content:d.image}),t.jsx("meta",{property:"og:site_name",content:d.siteName}),t.jsx("meta",{name:"description",content:d.description}),t.jsx("meta",{name:"keywords",content:d.keywords}),t.jsx("title",{children:d.title})]}),s&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"contectProductId",id:"topSity",children:[y(`(min-width: ${v})`)&&t.jsx("div",{className:"contectProductId__img",children:s.images&&(s==null?void 0:s.images.map((i,e)=>t.jsx("img",{onClick:()=>g({open:!0,img:i.src}),src:i.src,alt:"imgProduct"},e)))}),y(`(max-width: ${v})`)&&t.jsx("div",{className:"contectProductId_phone",children:t.jsx(us,{...os,children:(z=s==null?void 0:s.images)==null?void 0:z.map((i,e)=>(console.log(i.src),t.jsx("img",{className:"img_phone_items",src:i.src,alt:"imgProduct"},e)))})}),t.jsxs("div",{className:"contectProductId__info",children:[t.jsxs("div",{className:"header-div-product",children:[t.jsx("img",{src:hs,alt:"NewCollection"}),t.jsxs("div",{style:{width:"300px"},children:[t.jsx("h1",{children:s==null?void 0:s.name}),t.jsx("p",{children:s==null?void 0:s.short_description})]}),t.jsxs("div",{className:"price-product",children:[s.old_price!=0&&t.jsxs("h4",{className:"skitka",children:[" ",t.jsxs(t.Fragment,{children:[s==null?void 0:s.old_price," ₽"]})]}),t.jsxs("h4",{children:[t.jsx("span",{children:s==null?void 0:s.price})," ₽"]})]})]}),t.jsxs("div",{className:"color-div-product",children:[t.jsx("h1",{children:"Другие цвета"}),t.jsx("div",{children:(s==null?void 0:s.attributes)&&((D=s==null?void 0:s.attributes.find(i=>i.product_attribute_id==1))==null?void 0:D.attribute_values.map((i,e)=>t.jsx(Q,{to:`/product/${i.name.split("|")[1]}`,style:{borderColor:localStorage.getItem("colorVibor")==i.name.split("|")[0]&&"#000"},children:t.jsx("nav",{onClick:()=>{localStorage.setItem("colorVibor",i.name.split("|")[0]),C(i.name.split("|")[0])},style:{background:i.name.split("|")[0]}})},e)))})]}),t.jsxs("div",{className:"size-div-product",children:[t.jsxs("nav",{className:"size-div-product-nav",children:[t.jsx("h1",{children:"Размер"}),y(`(max-width: ${v})`)&&t.jsxs("p",{style:{cursor:"pointer"},onClick:()=>g({open:!0,img:U}),children:[t.jsx("img",{src:K,alt:"lineyka"})," Размерная сетка"]})]}),t.jsx("div",{children:(s==null?void 0:s.attributes)&&((V=s==null?void 0:s.attributes.find(i=>(i==null?void 0:i.product_attribute_id)==2))==null?void 0:V.attribute_values.map((i,e)=>t.jsx("nav",{className:i.quantity==0&&"size-none",onClick:()=>{i.quantity!=0&&I(i.name)},style:{background:i.name==m&&"#408759",color:i.name==m&&"#fff",borderColor:i.name==m&&"transparent"},children:i.name},e)))}),y(`(min-width: ${v})`)&&t.jsxs("p",{style:{cursor:"pointer"},onClick:()=>g({open:!0,img:U}),children:[t.jsx("img",{src:K,alt:"lineyka"})," Размерная сетка"]})]}),t.jsxs("div",{className:"button-div-product",children:[t.jsx("div",{children:c?t.jsxs("div",{className:"add-to-basket button-product count-product",children:[t.jsx("button",{onClick:()=>{if(c>1)return l(c-1);j(s.id)},children:"-"}),t.jsx("span",{children:c}),t.jsx("button",{onClick:()=>{l(c+1),j(s.id)},children:"+"})]}):t.jsx("button",{className:"add-to-basket button-product",onClick:()=>{j(s.id),l(1)},children:"Добавить в корзину"})}),t.jsx(Q,{onClick:()=>{j(s.id)},to:"/placing-an-order",className:"on-click-buy button-product",children:"Купить в один клик"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",gap:"20px "},children:[t.jsxs("div",{className:"dop-info-product",children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"10px 0"},onClick:es,children:[t.jsx("h2",{style:{margin:0},children:"Описание"}),t.jsx("span",{style:{fontSize:"24px"},children:N?t.jsx(W,{}):t.jsx(X,{})})]}),t.jsx(q,{style:{height:"auto"},children:N&&t.jsx(J,{timeout:300,classNames:"fade",children:t.jsx("div",{className:"info-d-product",style:{padding:"10px 0"},children:t.jsx("div",{style:{fontSize:"14px"},dangerouslySetInnerHTML:{__html:s==null?void 0:s.full_description}})})})})]}),t.jsxs("div",{className:"dop-info-product",children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"10px 0"},onClick:()=>ts(!w),children:[t.jsx("h2",{style:{margin:0},children:"Доставка и возврат"}),t.jsx("span",{style:{fontSize:"24px"},children:w?t.jsx(W,{}):t.jsx(X,{})})]}),t.jsx(q,{style:{height:"auto"},children:w&&t.jsx(J,{timeout:300,classNames:"fade",children:t.jsx("div",{className:"info-d-product",style:{padding:"10px 0"},children:t.jsx("div",{style:{fontSize:14},children:'Стандартная доставка занимает 3-7 рабочих дней. Экспресс-доставка возможна за дополнительную плату и займет 1-3 рабочих дня. Вернуть или обменять товары возможно в течение 14 дней с момента получения заказа. Подробности о возвратах и обменах можно найти на нашей странице "Возвраты и обмены"'})})})})]})]})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"header headerBox2 headerBoxProbucts",style:{marginTop:"60px"},children:[t.jsx("div",{className:"headerCom1",children:t.jsx("h1",{children:"Дополни свой образ"})}),t.jsx("div",{className:"headerCom2"})]}),t.jsx(ds,{arrDataImg:S==null?void 0:S.filter((i,e)=>e<9&&e>4)}),t.jsx(ls,{})]})]}),f.open&&t.jsx(xs,{img:f.img,setImg:g})]})}export{Ns as default};
