if (typeof visited !== 'undefined') {
    var links = document.getElementsByTagName('a');
    for (var link in links) {
        var element = links[link];
        if (isVisited(element.href)) {
            element.style.color = linkColor;
        }
    }
}

function isVisited(url) {
    if (url) {
        var key = getKey(url);
        if (visited[key]) {
            var path = getPath(url)
            return visited[key].includes(path);
        }
    }
    return false;
}

function getKey(url) {
    urlObj = new URL(url);
    return urlObj.hostname;
}

function getPath(url) {
    urlObj = new URL(url);
    return urlObj.pathname;
}
