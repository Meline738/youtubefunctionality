const getSearchLocators = require('./search.locators');

async function searchYouTube(page, query) {
    const locators = getSearchLocators(page);
    await getSearchLocators(page).searchInput.fill(query);
    await locators.searchButton.click();
}

async function clickVideoByTitle(page) {
    const locators = getSearchLocators(page);
    await getSearchLocators(page).searchButton.click(
        {force: true}
    );
    await page.waitForTimeout(10000);
    const video = locators.firstVideo;
    await video.first().click();
}

module.exports = { searchYouTube, clickVideoByTitle };