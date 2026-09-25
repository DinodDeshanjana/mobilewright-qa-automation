import { test, expect } from "@mobilewright/test";

test("Echo screen accepts user input", async ({ screen }) => {
  const echoScreenButton = screen.getByTestId(
    "com.expandtesting.practice:id/btn_echo_screen",
  );

  await expect(echoScreenButton).toBeVisible();
  await echoScreenButton.tap();

  const nameInput = screen.getByTestId(
    "com.expandtesting.practice:id/et_user_name",
  );

  await expect(nameInput).toBeVisible();

  await nameInput.fill("Dinod");

  await screen.getByTestId("com.expandtesting.practice:id/btn_echo").tap();
});
