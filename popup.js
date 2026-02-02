document.getElementById("readPage").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: extractPageText
  }, (results) => {
    if (results && results[0]) {
      document.getElementById("output").value = results[0].result;
    }
  });
});

function extractPageText() {
  return document.body.innerText;
}
