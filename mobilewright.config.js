// @ts-check
import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: "./tests",
  platform: "android",
  bundleId: "com.expandtesting.practice",
  reporter: [['html', { open: 'never' }]],
});
