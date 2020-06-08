import { clientXY, moveDown, moveUp } from '../pageObjects';

const NODE_SELECT_ONE = 'div.sidebar div:nth-child(1)';
const NODE_SELECT_TWO = 'div.sidebar div:nth-child(2)';

const NODE_DELETE_BUTTON = 'div.toolbar';

describe('Wireflow', () => {
  beforeAll(async () => {
    await page.goto(URL);
    await page.setViewport({ width: 1280, height: 800 });
  });

  const navigationPromise = page.waitForNavigation();

  it('should be add node (1) on canvas', async (done) => {
    const [, clientY] = await clientXY(NODE_SELECT_ONE);

    await moveDown(70, clientY + 30);
    await moveUp(200, 200);

    await navigationPromise;

    done();
  });

  it('should be add node (2) on canvas', async (done) => {
    const [, clientY] = await clientXY(NODE_SELECT_TWO);

    await moveDown(70, clientY + 30);
    await moveUp(400, 400);

    await navigationPromise;

    done();
  });

  it('should be add edge between two nodes', async (done) => {
    await moveDown(210, 210);
    await page.mouse.up();

    await navigationPromise;

    await moveDown(200, 250);
    await page.mouse.move(300, 200);
    await moveUp(400, 450);

    await navigationPromise;

    done();
  });

  it('should be delete node (1) from canvas', async () => {
    const [x, y] = await clientXY(NODE_DELETE_BUTTON);

    await moveDown(210, 210);
    await page.mouse.up();

    await navigationPromise;

    await page.mouse.click(x + 10, y + 15);

    await page.waitFor(2000);

    await navigationPromise;
  });
});