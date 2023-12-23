document.addEventListener('DOMContentLoaded', function() {
    var emailPopup = document.getElementById("emailPopup");
    emailPopup.onmouseover = showEmailPopup;
    emailPopup.onmouseout = hideEmailPopup;
});

function showEmailPopup() {
    document.getElementById("emailPopup").style.visibility = 'visible';
}

function hideEmailPopup() {
    document.getElementById("emailPopup").style.visibility = 'hidden';
}

function copyToClipboard() {
    var email = document.getElementById("emailPopup").textContent.trim();
    var textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    var notification = document.createElement("div");
    notification.id = 'copyNotification';
    notification.innerText = "copied to clipboard";
    document.body.appendChild(notification);
    notification.style.display = 'block';
    
    setTimeout(function(){
        notification.remove();
    }, 1500);
}

