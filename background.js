const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getword(info) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "https://eksisozluk.com/" + info.selectionText
  });
}
chrome.contextMenus.create({
  title: "Ekşi Sözlük'te Ara: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getword)