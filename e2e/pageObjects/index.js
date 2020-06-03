const rootSelector = '#root';
// var sel = document.getElementsByClassName('sidebar');

// const x = sel.offsetLeft;

export const root = async () => await page.$(rootSelector);

export const load = async () => {
  await page.goto(URL, {
    waitUntil: 'networkidle0',
    timeout: 15000,
  });
};

export const getTitle = async () => await page.title();

export const getViewport = async () => await page.viewport();

export const sidebarSelect = async () => await page.$('div.details');
