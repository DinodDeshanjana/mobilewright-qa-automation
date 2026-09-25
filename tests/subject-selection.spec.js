import { test, expect } from "@mobilewright/test";

test("User can select a subject and submit", async ({ screen }) => {
  const appName = screen.getByTestId(
    "com.expandtesting.practice:id/tv_app_name",
  );

  await expect(appName).toBeVisible();

  const languagesButton = screen.getByTestId(
    "com.expandtesting.practice:id/btn_languages_screen",
  );

  await expect(languagesButton).toBeVisible();
  await languagesButton.tap();

  const subjectTitle = screen.getByRole("text", {
    name: "Select your Subject ?",
  });

  await expect(subjectTitle).toBeVisible();

  const language1 = screen.getByTestId(
    "com.expandtesting.practice:id/rb_language_1",
  );

  await expect(language1).toBeVisible();
  await language1.tap();

  await expect(language1).toBeChecked();

  const submitButton = screen.getByTestId(
    "com.expandtesting.practice:id/btn_submit",
  );

  await expect(submitButton).toBeVisible();
  await submitButton.tap();

  const result = screen.getByTestId("com.expandtesting.practice:id/tv_result");

  await expect(result).toBeVisible();
});
