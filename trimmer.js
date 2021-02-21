/**
 * NamuTrimmer
 * @author Mirai Kim(Suyeong Rhie) <me@euc-kr.net>
 * @license MIT
 */

function trimmer() {
    let article = fetchArticle()
    let strikes = article.getElementsByTagName("del")
    let links = article.getElementsByTagName("a")
    trimStrike(strikes)
    trimRedirectTitle(links)
}

function trimStrike(strikes) {
    for (let strike of strikes) {
        strike.style.visibility = "hidden"
        strike.style.display = "none"
    }
}

function trimRedirectTitle(links) {
    for (let link of links) {
        if (link.className === "wiki-link-internal" && !link.text.includes("<img")) {
            let split = splitRedirect(link)
            if (!split[1].includes(split[0])) {
                link.text = split[0] + "(" + split[1] + ")"
            }
        }
    }
}

function fetchShortAnnotation() {

}

function checkExternalLinkAlive() {

}

function splitRedirect(redirect) {
    let describeTitle = redirect.text
    let destinationTitle = decodeURIComponent(redirect.href.replace(redirect.origin + "/w/", ""))
    return [describeTitle, destinationTitle]
}

function fetchArticle() {
    let origin = top.document.getElementsByTagName("article").item(0)
    return origin.children.item(4).children.item(origin.children.item(4).children.length - 1).children.item(0).children.item(0)
}

trimmer()