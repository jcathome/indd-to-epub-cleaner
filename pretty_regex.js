document.getElementById("removeEpubProperties").addEventListener("change",function(){getTextAndReplace()});function removeNumbers(n){const e=[/\s*.*000000;/g,/\s*.*:0;/g,/\s*font-variant:.*;/g,/\s*orphans:.*;/g,/\s*widows:.*;/g,/\s*page-break.*;/g,/\s*line-height.*;/g,/\s*text-transform:none;/g,/\s*text-decoration:none;/g];const s=document.getElementById("removeEpubProperties").checked;if(s){e.push(/\s*-\s*(epub|webkit)-.*:.*;/g)}else{n=n.replace(/-epub-hyphens/g,"hyphens");n=n.replace(/-webkit-hyphens/g,"hyphens");e.push(/\s*-\s*epub-.*:.*;/g);e.push(/\s*-\s*webkit-.*:.*;/g)}e.forEach(e=>{n=n.replace(e,"")});return n;let a=n.replace(pattern,"");function t(e,n=16){const s=parseFloat(e);if(isNaN(s)){return null}return`${s/10}em`}a=a.replace(/([\d\.]+)px/g,(e,n)=>{return t(n)});a=a.replace(/font-family:.*Myungjo.*;/g,"font-family: 'hanserif', '바탕', 'batang', serif;").replace(/font-family:.*Jebi.*;/g,"font-family: 'hanserif', '바탕', 'batang', serif;").replace(/font-family:.*Myeongjo.*;/g,"font-family: 'hanserif', '바탕', 'batang', serif;").replace(/font-family:.*명조.*;/g,"font-family: 'hanserif', '바탕', 'batang', serif;").replace(/font-family:.*고딕.*;/g,"font-family: 'hansans', '돋움', 'dotum', san-serif;").replace(/font-family:.*[G|g]othic.*;/g,"font-family: 'hansans', '돋움', 'dotum', san-serif;").replace(/기본-표/g,"tb_basic").replace(/표-스타일-없음/g,"tb_none");a=a.replace(/border-width:(\d+\.?\d*)em/g,(e,n)=>{const s=parseFloat(n);const a=isNaN(s)?e:`${s*10}px`;return`width: ${a}`});return a}function removeTags(e){const n=[/<div.*?>/g,/<\/div>/g,/<a.*?>/g,/<\/a>/g,/<img.*?>/g,/ xml:lang=".*?"/g,/ lang=".*?"/g];const s=new RegExp(n.map(e=>e.source).join("|"),"g");let a=e.replace(s,"");a=a.replace(/<p class=\"([^\"]*)\"><\/p>/g,'<p class="$1"><br /></p>').replace(/<p class=\"([^\"]*)\"> <\/p>/g,'<p class="$1"><br /></p>').replace(/<p class=\"([^\"]*)\">&#160;<\/p>/g,'<p class="$1"><br /></p>').replace(/<p class=\"([^\"]*)\">(<br\s*\/?>)?\s*<\/p>/g,'<p class="$1"><br /></p>').replace(/<p class=\"([^\"]*)\"><span class=\"[^\"]*\"><\/span><\/p>/g,'<p class="$1"><br /></p>').replace(/<p class=\"([^\"]*)\"><span class=\"[^\"]*\"> <\/span><\/p>/g,'<p class="$1"><br /></p>').replace(/기본-표/g,"tb_basic").replace(/표-스타일-없음/g,"tb_none");return a}function getTextAndReplace(){const e=document.getElementById("cleaning-option").value;const n=document.getElementById("text-input").value;if(e==="html"){const s=removeTags(n);const a=document.getElementById("result");a.innerHTML=s}else{const s=removeNumbers(n);const a=document.getElementById("result");a.innerHTML=s}}// 작업에 사용하던 정규표현식입니다. 베껴 쓰지 마세요. 각각의 속성들은 삭제하게 된 특정한 맥락이 있습니다. 참고 했으면 출처와 함께 인용하세요.
// 작업에 사용하던 정규표현식입니다. 베껴 쓰지 마세요. 각각의 속성들은 삭제하게 된 특정한 맥락이 있습니다. 참고 했으면 출처와 함께 인용하세요.
// 작업에 사용하던 정규표현식입니다. 베껴 쓰지 마세요. 각각의 속성들은 삭제하게 된 특정한 맥락이 있습니다. 참고 했으면 출처와 함께 인용하세요.
// 정규식 참고했을 시 출처, URL 반드시 표기하세요.