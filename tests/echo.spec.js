// @ts-check
import { test, expect } from '@mobilewright/test';

test('Echo screen accepts user input', async ({ screen }) => {

  // Navigate from home to Echo screen
  const echoScreenButton = screen.getByTestId(
    'com.expandtesting.practice:id/btn_echo_screen'
  );

  await expect(echoScreenButton).toBeVisible();
  await echoScreenButton.tap();

  // Now locate the input on EchoActivity
  const nameInput = screen.getByTestId(
    'com.expandtesting.practice:id/et_user_name'
  );

  await expect(nameInput).toBeVisible();

  // Enter text
  await nameInput.fill('Dinod');

  // Submit
  await screen
    .getByTestId('com.expandtesting.practice:id/btn_echo')
    .tap();
});