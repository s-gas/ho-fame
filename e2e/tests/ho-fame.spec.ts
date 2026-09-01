import { test, expect, request } from '@playwright/test';

test.describe("ho-fame", async () => {
  test.beforeEach(async ({ page, request }) => {
    await request.post('http://localhost:3000/api/reset');
    await page.goto('http://localhost:5173');
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("ho-fame");
  });

  test("displays 'No recipes' with empty database", async ({ page }) => {
    const noRecipes = page.getByText("No recipes");
    await expect(noRecipes).toBeVisible();
  });

  test("does not display 'No recipes' after adding a recipe", async ({ page }) => {
    await page.getByLabel("name").fill("pizza");
    const noRecipes = page.getByText("No recipes");
    const submitButton = page.getByRole("button", { name: "create" });
    await submitButton.click();
    await expect(noRecipes).not.toBeVisible();
  })
});
