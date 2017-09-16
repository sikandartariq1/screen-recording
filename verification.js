lisenceflag = true;

chrome.storage.sync.get(['usermail','key','register_at'], function(data) {
  if (typeof data.usermail === 'undefined') {
    lisenceflag = false;
    chrome.tabs.create({ url: chrome.extension.getURL('Register.html') });
    return;
  } else {
   lisenceflag = true;

    var date1 = new Date(data.register_at);
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if(diffDays/30 >= 6)
    {
        lisenceflag = false;
        chrome.storage.sync.remove(['usermail','key','register_at'], function(data) {
          if (typeof data.usermail === 'undefined') {
            chrome.tabs.create({ url: chrome.extension.getURL('Register.html') });
            return;
          } else {
          }
        });
    }
  }
});

if(!lisenceflag)
  chrome.tabs.create({ url: chrome.extension.getURL('Register.html') });
