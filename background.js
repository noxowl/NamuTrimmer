/**
 * NamuTrimmer-Background
 * @author Mirai Kim(Suyeong Rhie) <me@euc-kr.net>
 * @license MIT
 */

function trimmerListener(details) {
    browser.tabs.executeScript(details.tabId, {file: "namutrimmer.js"}, function(){});
}

browser.webNavigation.onHistoryStateUpdated.addListener(
    trimmerListener,
    {url: [{hostContains: "namu.wiki"}]}
)