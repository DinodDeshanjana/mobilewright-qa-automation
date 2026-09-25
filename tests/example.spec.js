import { test, expect } from "@mobilewright/test";

test("Counter can be incremented and reset", async ({ screen }) => {
  const counterDemo = screen.getByTestId(
    "com.expandtesting.practice:id/btn_counter_demo",
  );

  await expect(counterDemo).toBeVisible();

  await counterDemo.tap();

  const counter = screen.getByTestId(
    "com.expandtesting.practice:id/tv_counter",
  );

  await expect(counter).toBeVisible();

  await screen.getByTestId("com.expandtesting.practice:id/btn_reset").tap();

  await expect(counter).toHaveText("0");

  await screen.getByTestId("com.expandtesting.practice:id/btn_increment").tap();

  await expect(counter).toHaveText("1");
});
