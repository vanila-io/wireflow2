import {
  load,
  getTitle,
  // getViewport,
  // sidebarSelect,
  // root,
} from '../pageObjects/index';
// const puppeteer = require('puppeteer');

// export const root = async () => await page.$(rootSelector);
const timeout = 5000;

// const rootSelector = '#root';
describe('Wireflow', () => {
  let page;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto(URL);
  }, timeout);
  it("should be titled 'Wireflow'", async () => {
    // await load();
    // await page.$(rootSelector);
    const title = await page.title();
    // const viewPort = await sidebarSelect();
    // const browser = await puppeteer.launch({
    //   timeout: 0,
    // });
    // const page = await browser.newPage();
    // await page.goto(URL, {
    //   waitUntil: 'networkidle0',
    //   timeout: 20000,
    // });
    await page.mouse.move(70, 70);
    await page.mouse.down();
    // await page.setDefaultTimeout(800);
    await page.mouse.move(400, 400);
    // await page.waitFor(800);
    // await page.setDefaultTimeout(800);
    // await page.mouse.move(600, 600);
    // await page.waitFor(800);
    // await page.setDefaultTimeout(800);
    await page.mouse.up();
    // await page.waitFor(800);
    // await page.setDefaultTimeout(800);
    // await browser.close();
    // console.log('h', viewPort);
    // console.log('root', await viewPort._page._mouse._y)
    // expect(title).toBe('Wireflow');
  });
});
