import{p as d,g as l,f as p}from"./index-DjYsua6Q.js";const f=d((t,r)=>({photos:[],loading:!1,fetchPhotos:async e=>{const n=localStorage.getItem("token"),o=new URLSearchParams;if(e.CategoryId&&o.append("CategoryId",e.CategoryId),e.limit&&o.append("limit",e.limit),(e.page||e.page===1)&&o.append("page",e.page),!n){console.warn("No token available. Cannot fetch photos.");return}t({loading:!0});try{const s=(await l.get(`products?${o}`,{headers:{Authorization:`Bearer ${n}`}})).data.products.filter(i=>!r().photos.some(c=>c.id===i.id));t(()=>({photos:s}))}catch(a){console.error("Error fetching photos:",a)}finally{t({loading:!1})}},findeElement:{},findeProduct:async e=>{const n=localStorage.getItem("token");try{const a=(await p.get(`https://elevenislands.ru/api/products/${e}`,{headers:{Authorization:`Bearer ${n}`}})).data.products[0];t({findeElement:a})}catch(o){console.error(o)}}}));export{f as u};
