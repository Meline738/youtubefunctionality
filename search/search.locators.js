function getSearchLocators(page) {
    return {
        searchInput: page.locator('//input[@id="search"]'),
        searchButton: page.locator('//button[@class="style-scope ytd-searchbox"]'),
        firstVideo: page.locator(`[title="Amy Winehouse - You Know I'm No Good"]`),

    };
}

module.exports = getSearchLocators;