import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('article').filter({ hasText: '❌🤨What do we call variables' }).getByRole('heading').click();
  await page.getByRole('heading', { name: '🤯' }).click();
  await page.getByRole('article').filter({ hasText: '❌🤨What do we call variables' }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Enter question' }).click();
  await page.getByRole('textbox', { name: 'Enter question' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter question' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter question' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter answer' }).click();
  
});