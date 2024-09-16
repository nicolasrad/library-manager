import { test, expect } from "@playwright/test";

test.describe("Library manager application", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("Should load the book list page", async ({ page }) => {
    await expect(page.locator("text=Book List")).toBeVisible();
  });

  test("Should add a new book to the list", async ({ page }) => {
    await page.click("text=Add new book");

    await page.fill('input[name="title"]', "New Book Title");
    await page.fill('input[name="author"]', "New Author");
    await page.fill('input[name="genre"]', "Science Fiction");
    await page.fill('textarea[name="description"]', "A great new book.");

    await page.click("text=Add book");

    await expect(page.locator("text=New Book Title")).toBeVisible();
  });

  test.only("Should edit an existing book", async ({ page }) => {
    await page.click("text=Edit");

    await page.fill('input[name="title"]', "Updated Book Title");

    await page.click("text=Update book");

    await expect(page.locator("text=Updated Book Title")).toBeVisible();
  });

  test("Should delete a book from the list", async ({ page }) => {
    await page.click("text=Delete");

    await page.click("text=Delete the book");

    await expect(page.locator("text=Deleted Book Title")).toHaveCount(0);
  });
});
