// import {
//   load,
//   getTitle,
//   // getViewport,
//   // sidebarSelect,
//   // root,
// } from '../pageObjects/index';

describe('Wireflow', () => {
  beforeAll(async () => {
    await page.goto(URL);
    await page.setViewport({ width: 1280, height: 800 });
  });

  const navigationPromise = page.waitForNavigation();

  it('should be add node (1) on canvas', async (done) => {
    const clientY = await page.$eval(
      'div.sidebar div:nth-child(1)',
      (e) => e.offsetTop
    );

    await navigationPromise;

    await page.mouse.move(70, clientY + 30);
    await page.mouse.down();
    await page.mouse.move(200, 200);
    await page.mouse.up();

    await navigationPromise;

    done();
  });

  it('should be add node (2) on canvas', async (done) => {
    const clientY = await page.$eval(
      'div.sidebar div:nth-child(2)',
      (e) => e.offsetTop
    );
    await navigationPromise;

    await page.mouse.move(70, clientY + 30);
    await page.mouse.down();
    await page.mouse.move(400, 400);
    await page.mouse.up();

    await navigationPromise;

    done();
  });

  it('should be add edge between two nodes', async (done) => {
    await page.mouse.move(210, 210);
    await page.mouse.down();
    await page.mouse.up();

    await navigationPromise;

    await page.mouse.move(200, 250);
    await page.mouse.down();
    await page.mouse.move(300, 200);
    await page.mouse.move(400, 450);
    await page.mouse.up();

    await page.waitFor(2000);

    await navigationPromise;

    done();
  });
});
