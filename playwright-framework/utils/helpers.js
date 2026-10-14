async function takeScreenshot(page, fileName) {
  await page.screenshot({ path: `./screenshots/${fileName}.png`, fullPage: true });
}

module.exports = {
  takeScreenshot,
};
