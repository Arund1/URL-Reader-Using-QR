chrome.tabs.getSelected(null, function(tab) {
  tabUrl = tab.url;
  apiUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+tabUrl;
    //alert($('#image-result').attr('src'));
  $('#image-result').attr('src',apiUrl);
  //alert(tabUrl);
});