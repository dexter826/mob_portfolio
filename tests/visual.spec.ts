import { expect, test } from '@playwright/test';
import { preparePage, revealPage, waitForStablePortfolio } from './test-utils';

test.beforeEach(async ({ page }) => {
  await preparePage(page);
});

test('home visual baseline', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('PRODUCTBUILDER');
  await waitForStablePortfolio(page);
  await revealPage(page);
  await expect(page).toHaveScreenshot('home.png', { fullPage: true });
});

test('project detail visual baseline', async ({ page }) => {
  await page.goto('/projects/cinemob');
  await waitForStablePortfolio(page);
  await revealPage(page);
  await expect(page).toHaveScreenshot('project-cinemob.png', { fullPage: true });
});

test('light theme smoke baseline', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-1440');

  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('PRODUCTBUILDER');
  await page.evaluate(() => {
    document.documentElement.dataset.theme = 'light';
  });
  await waitForStablePortfolio(page);
  await revealPage(page);
  await expect(page).toHaveScreenshot('home-light.png', { fullPage: true });
});
