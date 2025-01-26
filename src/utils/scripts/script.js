function copyCode(button) {
    var codeSnippet = button.previousElementSibling;
    var codeContent = codeSnippet.textContent.trim();
    var tempTextArea = document.createElement("textarea");
    document.body.appendChild(tempTextArea);
    tempTextArea.value = codeContent;
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    showPopup(button);
}

function showPopup(button) {
    var popup = document.getElementById("popup");
    var buttonRect = button.getBoundingClientRect();
    popup.style.left = (buttonRect.right + window.scrollX + 10) + "px";
    popup.style.top = (buttonRect.top + window.scrollY) + "px";
    popup.classList.add("show");
    setTimeout(function () {
        popup.classList.remove("show");
    }, 3000);
}