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


// Listen for each animation iteration on the turtle GIF
document.getElementById('turtleGif').addEventListener('animationiteration', function() {
    // This will fire after each iteration of the animation
    this.style.right = '100%'; // Resets the turtle to the right
});

