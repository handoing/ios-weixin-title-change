function setTitle(title) {

    document.title = title;

    var iframe = document.createElement("iframe");
    iframe.style.display = 'none';
    iframe.src = '/i.jpg';

    iframe.addEventListener("load", function() {
        setTimeout(function() {
            iframe.removeEventListener('load');
            document.body.removeChild(iframe);
        }, 0);
    });
    
    document.body.appendChild(iframe);
}
