import { expect, type Page } from '@playwright/test';

export async function preparePage(page: Page) {
  await page.addInitScript(() => {
    window.sessionStorage.setItem('splash_shown', 'true');
    window.localStorage.setItem('portfolio-lang', 'vi');
  });
}

export async function waitForStablePortfolio(page: Page) {
  await expect(page.locator('body')).toBeVisible();
  await page.waitForFunction(() => document.fonts.status === 'loaded');
  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete));
  await page.addStyleTag({
    content: `
      html { scroll-behavior: auto !important; }
      *, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }
    `,
  });
}

export async function revealPage(page: Page) {
  await page.evaluate(async () => {
    const step = Math.max(window.innerHeight / 2, 320);
    for (let position = 0; position < document.documentElement.scrollHeight; position += step) {
      window.scrollTo(0, position);
      await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0));
  await page.evaluate(() => Promise.all(Array.from(document.images).map((image) => image.decode().catch(() => undefined))));
  await page.waitForTimeout(100);
}
