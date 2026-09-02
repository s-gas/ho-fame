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

  test("displays recipe name after adding a recipe", async ({ page }) => {
    await page.getByRole("button", { name: "new" }).click();
    await page.getByLabel("Name").fill("pizza");
    const submitButton = page.getByRole("button", { name: "create" });
    await submitButton.click();
    const recipe = page.getByText("pizza");
    await expect(recipe).toBeVisible();
  });

  test("displays error message with empty name input", async ({ page }) => {
    await page.getByRole("button", { name: "new" }).click();
    await page.getByLabel("Name").fill("");
    const submitButton = page.getByRole("button", { name: "create" });
    await submitButton.click();
    const errorMessage = page.getByText("Name field cannot be empty");
    await expect(errorMessage).toBeVisible();
  })
});
