(()=>{"use strict";document.getElementById("saveTabs").addEventListener("click",(function(){chrome.tabs.query({},(function(e){const t=e.map((e=>e.url));chrome.storage.sync.set({savedTabs:t},(function(){alert("Tabs saved successfully! ✔")}))}))})),document.getElementById("retrieveTabs").addEventListener("click",(function(){chrome.storage.sync.get(["savedTabs"],(function(e){const t=e.savedTabs;t?t.forEach((e=>{chrome.tabs.create({url:e})})):alert("No saved tabs found! ❌")}))}))})();