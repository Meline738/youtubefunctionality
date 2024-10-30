import { test, expect } from "@playwright/test";
import { searchYouTube, clickVideoByTitle } from '../search/search.methods';

test("search the video on YouTube", async ({ page }) => {
    await page.goto('/');
    await searchYouTube(page, "Amy Winehouse You Know I'm No Good");
    await page.waitForTimeout(6000);
    await clickVideoByTitle(page, "Amy Winehouse You Know I'm No Good");
    await page.waitForTimeout(4000);
    await page.close();

});