import{a as f,S as p,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="49660989-ba495770243477578b97293ac",y=o=>{const t=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return f(`https://pixabay.com/api/?${t}`)},g=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const L=o=>{const t=o.map(({id:s,largeImageURL:i,webformatURL:e,tags:r,likes:a,views:m,comments:u,downloads:d})=>`
           <a class="gallery-link" href="${i}">
               <div class="gallery-item" id="${s}">
                   <img class="gallery-item-img" src="${e}" alt="${r}" loading="lazy" />
                   <div class="info">
                       <p class="info-item"><b>Likes </b>${a}</p>
                       <p class="info-item"><b>Views </b>${m}</p>
                       <p class="info-item"><b>Comments </b>${u}</p>
                       <p class="info-item"><b>Downloads </b>${d}</p>
                   </div>
               </div>
           </a>
       `).join("");g.insertAdjacentHTML("beforeend",t),b.refresh()},v=()=>{l.classList.add("show")},c=()=>{l.classList.remove("show")},w=document.querySelector(".form");document.querySelector(".btn-form");w.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}v(),y(t).then(s=>{if(c(),s.data.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.data.hits)}).catch(s=>{c(),n.error({title:"Error",message:"There was an error fetching the images. Please try again later."})})});
//# sourceMappingURL=index.js.map
