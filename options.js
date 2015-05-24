// Saves options to chrome.storage
function save_options() {
  var wpt_base_url = document.getElementById('wpt_base_url').value;
  chrome.storage.sync.set({
    wpt_base_url: wpt_base_url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    document.getElementById('save').disabled = true;
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores the preferences stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    wpt_base_url: "http://www.webpagetest.org/"
  }, function(items) {
    document.getElementById('wpt_base_url').value = items.wpt_base_url;
    document.getElementById('wpt_base_url').disabled = false;
  });
}

function enable_save_button() {
  document.getElementById('save').disabled = false;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

// enable save button to indicate that changes need to be saved
document.getElementById('wpt_base_url').addEventListener('keydown', enable_save_button);
