import { test, expect } from "@mobilewright/test";

test("User can clear the selected subject", async ({ screen }) => {
  const languagesButton = screen.getByTestId(
    "com.expandtesting.practice:id/btn_languages_screen",
  );

  await expect(languagesButton).toBeVisible();
  await languagesButton.tap();

  const language1 = screen.getByTestId(
    "com.expandtesting.practice:id/rb_language_1",
  );

  await expect(language1).toBeVisible();
  await language1.tap();

  await expect(language1).toBeChecked();

  const clearButton = screen.getByTestId(
    "com.expandtesting.practice:id/btn_clear",
  );

  await expect(clearButton).toBeVisible();
  await clearButton.tap();

  await expect(language1).not.toBeChecked();
});
