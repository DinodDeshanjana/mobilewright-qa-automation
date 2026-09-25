// @ts-check
import { test, expect } from '@mobilewright/test';

test('Counter can be incremented and reset', async ({ screen }) => {

  // 1. Verify Counter Demo button is available
  const counterDemo = screen.getByTestId(
    'com.expandtesting.practice:id/btn_counter_demo'
  );

  await expect(counterDemo).toBeVisible();

  // 2. Open Counter Demo
  await counterDemo.tap();

  // 3. Get the counter value
  const counter = screen.getByTestId(
    'com.expandtesting.practice:id/tv_counter'
  );

  // 4. Verify counter is visible
  await expect(counter).toBeVisible();

  // 5. Reset counter before testing
  await screen
    .getByTestId('com.expandtesting.practice:id/btn_reset')
    .tap();

  // 6. Verify initial value
  await expect(counter).toHaveText('0');

  // 7. Increment counter
  await screen
    .getByTestId('com.expandtesting.practice:id/btn_increment')
    .tap();

  // 8. Verify counter changed to 1
  await expect(counter).toHaveText('1');
});