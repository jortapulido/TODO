(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(a=o.key,i=void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(a,"string"),"symbol"===e(i)?i:String(i)),o)}var a,i}t.d({},{L:()=>b});var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var e,n,o;return e=t,o=[{key:"fromJson",value:function(e){var r=e.id,n=e.tarea,o=e.completado,a=e.creado,i=new t(n);return i.completado=o,i.id=r,i.creado=new Date(a),i}}],(n=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&r(e.prototype,n),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(a=n.key,i=void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"),"symbol"===o(i)?i:String(i)),n)}var a,i}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var e,r,o;return e=t,r=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos.splice(this.todos.findIndex((function(e){return e.id==t})),1),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e=this.todos.find((function(e){return e.id==t}));e.completado=!e.completado,this.guardarLocalStorage()}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){var t=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[];this.todos=t.map(n.fromJson)}}],r&&a(e.prototype,r),o&&a(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),f=document.querySelector(".clear-completed"),d=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),y=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n            <label>").concat(t.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),r=document.createElement("div");return r.innerHTML=e,u.append(r.firstElementChild),r.firstElementChild};function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}s.addEventListener("keyup",(function(t){if(13===t.keyCode&&s.value.length>0){console.log(s.value);var e=new n(s.value);b.nuevoTodo(e),y(e),s.value="",console.log(b)}})),u.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,n=r.getAttribute("data-id");e.includes("input")?(b.marcarCompletado(n),r.classList.toggle("completed")):e.includes("button")&&(b.eliminarTodo(n),u.removeChild(r))})),f.addEventListener("click",(function(t){b.eliminarCompletados(),console.log(b);for(var e=u.children.length-1;e>=0;e--){var r=u.children[e];r.classList.contains("completed")&&u.removeChild(r)}})),d.addEventListener("click",(function(t){var e=t.target.text;if(e){m.forEach((function(t){t.classList.remove("selected")})),t.target.classList.add("selected");var r,n=l(u.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(e){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(t){n.e(t)}finally{n.f()}}}));var p,b=new i,g=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}(b.todos);try{for(g.s();!(p=g.n()).done;){var h=p.value;y(h)}}catch(t){g.e(t)}finally{g.f()}document.getElementById("test").addEventListener("click",(function(t){})),console.log(b)})();