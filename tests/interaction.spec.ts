import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { preparePage, waitForStablePortfolio } from './test-utils';

test.beforeEach(async ({ page }) => {
  await preparePage(page);
});

test('supports language switching and contact navigation', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-1440');

  await page.goto('/');
  await waitForStablePortfolio(page);

  const languageButton = page.getByRole('button', { name: 'EN', exact: true });
  await languageButton.click();
  await expect(page.getByRole('button', { name: 'VI', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'About' })).toBeVisible();

  const contact = page.getByRole('link', { name: 'Contact Now' });
  await expect(contact).toHaveAttribute('href', 'mailto:tcongminh1604@gmail.com');
});

test('opens and closes the mobile navigation', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-390');

  await page.goto('/');
  await waitForStablePortfolio(page);

  const toggle = page.getByRole('button', { name: 'Toggle menu' });
  await toggle.click();
  await expect(page.getByRole('navigation').filter({ visible: true }).getByRole('link', { name: 'Giới thiệu' })).toBeVisible();
  await toggle.click();
  await expect(page.getByRole('link', { name: 'Giới thiệu' })).toBeHidden();
});

test('provides visible keyboard focus and reduced motion', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-1440');

  const hydrationErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error' && /hydration failed|didn't match/i.test(message.text())) {
      hydrationErrors.push(message.text());
    }
  });

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await waitForStablePortfolio(page);
  for (let attempt = 0; attempt < 5; attempt += 1) {
    await page.keyboard.press('Tab');
    if (await page.evaluate(() => Boolean(document.activeElement?.closest('header')))) break;
  }

  const focusState = await page.evaluate(() => {
    const active = document.activeElement;
    if (!(active instanceof HTMLElement)) return null;
    const styles = getComputedStyle(active);
    return { tagName: active.tagName, outlineStyle: styles.outlineStyle, outlineWidth: styles.outlineWidth };
  });

  expect(focusState?.tagName).toBe('A');
  expect(focusState?.outlineStyle).not.toBe('none');
  expect(focusState?.outlineWidth).not.toBe('0px');
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
  await expect(page.locator('.ds-typing-cursor').first()).toHaveCSS('animation-name', 'none');
  expect(hydrationErrors).toEqual([]);
});

test('applies the M.O.B Signal expressive recipes', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-1440');

  await page.goto('/');
  await waitForStablePortfolio(page);
  await page.mouse.move(0, 0);

  const media = page.locator('.ds-media-reveal').first();
  const image = media.locator('img');
  await expect(image).toHaveCSS('filter', 'grayscale(1)');
  await media.hover();
  await expect(image).toHaveCSS('filter', 'grayscale(0)');

  const distortion = page.locator('.ds-distortion-hover').first();
  await distortion.hover();
  expect(await distortion.evaluate((element) => getComputedStyle(element, '::before').animationName)).toBe('ds-distort-left');
  expect(await page.locator('.ds-signal-label').count()).toBeGreaterThan(3);
});

test('renders project actions and not-found state', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-1440');

  await page.goto('/projects/cinemob');
  await waitForStablePortfolio(page);
  await expect(page.getByRole('heading', { level: 1, name: /CineMOB/ })).toBeVisible();
  await expect(page.getByRole('link', { name: /GitHub/ })).toHaveAttribute('target', '_blank');

  await page.goto('/projects/not-a-project');
  await expect(page.getByText('404_PROJECT_NOT_FOUND')).toBeVisible();
});

test('has no detectable accessibility violations', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-1440');

  await page.goto('/');
  await waitForStablePortfolio(page);
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
