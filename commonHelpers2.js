import"./assets/styles-1a2421f2.js";const c="feedback-form-state",o=document.querySelector(".feedback-form");o.addEventListener("input",t=>{if(t.target.matches("input, textarea")){const e=new FormData(o),r={};e.forEach((s,m)=>{r[m]=typeof s=="string"?s.trim():s}),localStorage.setItem(c,JSON.stringify(r))}});try{const t=JSON.parse(localStorage.getItem(c));Array.from(o.elements).forEach(a=>{const e=t[a.name];e&&(a.value=e)})}catch{console.error("PARSE STORAGE FORM ERROR")}o.addEventListener("submit",t=>{t.preventDefault();const a=new FormData(o),e=a.get("email"),r=a.get("message");e&&r?(console.log({email:e,message:r}),localStorage.removeItem(c),o.reset()):alert("Please fill in both fields.")});
//# sourceMappingURL=commonHelpers2.js.map
