!function(){var t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),n=null;t.addEventListener("click",(function(){n=setInterval((function(){var t;(t=document.body).style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),console.log(t.style.backgroundColor)}),1e3)})),o.addEventListener("click",(function(){clearInterval(n),console.log("Interval with id ".concat(n," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.395a359e.js.map
