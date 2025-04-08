import{a as p,S as y,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="49660989-ba495770243477578b97293ac",h=s=>{const t=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${t}`)},l=document.querySelector(".gallery"),m=document.querySelector(".loader");let b=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const L=s=>{const t=s.map(({id:a,largeImageURL:i,webformatURL:e,tags:r,likes:o,views:u,comments:d,downloads:f})=>`
           <a class="gallery-link" href="${i}">
               <div class="gallery-item" id="${a}">
                   <img class="gallery-item-img" src="${e}" alt="${r}" loading="lazy" />
                   <div class="info">
                       <p class="info-item"><b>Likes </b>${o}</p>
                       <p class="info-item"><b>Views </b>${u}</p>
                       <p class="info-item"><b>Comments </b>${d}</p>
                       <p class="info-item"><b>Downloads </b>${f}</p>
                   </div>
               </div>
           </a>
       `).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()},w=()=>{l.innerHTML=""},P=()=>{m.classList.add("show")},c=()=>{m.classList.remove("show")},S=document.querySelector(".form");document.querySelector(".btn-form");S.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}P(),s.target.reset(),h(t).then(a=>{if(c(),w(),a.data.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(a.data.hits)}).catch(a=>{c(),n.error({title:"Error",message:"There was an error fetching the images. Please try again later."})})});
//# sourceMappingURL=index.js.map
