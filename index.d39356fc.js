function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,a=Array(e);t<e;t++)a[t]=r[t];return a}for(var e,t,a=document.querySelectorAll("li"),n=((t=function(e){if(Array.isArray(e))return r(e)}((e=[],a.forEach(function(r){var t=r.innerText,a=r.dataset.position,n=r.dataset.salary,o=r.dataset.age;e.push({employeename:t,value:a,salary:n,age:o})}),e))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(r,e){return parseInt(r.salary.replace(/[^0-9.-]+/g,""))-parseInt(e.salary.replace(/[^0-9.-]+/g,""))}),t.reverse()),o=0;o<n.length;o++)a[o].innerHTML=n[o].employeename,a[o].dataset.position=n[o].position,a[o].dataset.salary=n[o].salary,a[o].dataset.age=n[o].age;
//# sourceMappingURL=index.d39356fc.js.map
