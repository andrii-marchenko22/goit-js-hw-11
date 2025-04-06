import{a as d,S as f,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="49660989-ba495770243477578b97293ac",y=s=>{const t=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return d(`https://pixabay.com/api/?${t}`)},h=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=s=>{h.innerHTML=s.map(({id:t,largeImageURL:o,webformatURL:i,tags:e,likes:r,views:a,comments:m,downloads:u})=>`
           <a class="gallery-link" href="${o}">
               <div class="gallery-item" id="${t}">
                   <img class="gallery-item-img" src="${i}" alt="${e}" loading="lazy" />
                   <div class="info">
                       <p class="info-item"><b>Likes </b>${r}</p>
                       <p class="info-item"><b>Views </b>${a}</p>
                       <p class="info-item"><b>Comments </b>${m}</p>
                       <p class="info-item"><b>Downloads </b>${u}</p>
                   </div>
               </div>
           </a>
       `).join(""),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},b=()=>{l.classList.add("show")},c=()=>{l.classList.remove("show")},L=document.querySelector(".form");document.querySelector(".btn-form");L.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query!"});return}b(),y(t).then(o=>{if(c(),o.data.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o.data.hits)}).catch(o=>{c(),n.error({title:"Error",message:"There was an error fetching the images. Please try again later."})})});
//# sourceMappingURL=index.js.map
