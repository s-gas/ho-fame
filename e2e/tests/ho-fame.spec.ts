import { test, expect } from '@playwright/test';

test.describe("ho-fame", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("ho-fame");
  });

  test("displays 'No recipes' with empty database", async ({ page }) => {
    const noRecipes = page.getByText("No recipes");
    await expect(noRecipes).toBeVisible();
  });
});
