# Mobilewright QA Automation

Mobile UI test automation project using **Mobilewright**, **JavaScript**, and a **real Android device**.

This project explores a Playwright-style approach to Android mobile application testing, including UI inspection, locator identification, user interactions, assertions, and automated test execution.

## Overview

The project is designed to evaluate and demonstrate Mobilewright for practical mobile QA automation.

### Objectives

- Automate Android mobile UI test scenarios
- Inspect mobile UI elements
- Identify reliable locators
- Automate common user interactions
- Validate expected application behavior
- Execute tests on a real Android device
- Generate automated test reports
- Explore a Playwright-style workflow for mobile testing

## Technology Stack

- **Mobilewright**
- **JavaScript**
- **Node.js**
- **Android**
- **ADB (Android Debug Bridge)**
- **Real Android Device**
- **GitHub**

## Application Under Test

The project uses the **Expand Testing Practice App** as the demonstration application.

**Package ID**

```text
com.expandtesting.practice
```

The application provides several features suitable for mobile automation practice:

- Counter Demo
- Echo Screen
- Languages
- Countries
- Gesture Demo
- Multi-touch
- Scale Image
- Drag & Drop
- Alert Dialog
- WebView
- Animation Demo
- Bank App

## Project Structure

```text
mobilewright-qa-automation/
│
├── tests/
│   ├── example.spec.js
│   └── echo.spec.js
│
├── mobilewright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Prerequisites

Before running the project, install and configure:

- Node.js
- npm
- Android SDK
- Android Debug Bridge (ADB)
- A physical Android device
- USB debugging enabled on the device

Check Node.js and npm:

```bash
node --version
npm --version
```

Check ADB:

```bash
adb --version
```

Check the connected Android device:

```bash
adb devices
```

The device should appear with the status:

```text
device
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mobilewright-qa-automation.git
```

Navigate to the project:

```bash
cd mobilewright-qa-automation
```

Install dependencies:

```bash
npm install
```

## Android Device Setup

For real-device automation:

1. Enable **Developer Options** on the Android device.
2. Enable **USB Debugging**.
3. Connect the device to the computer using USB.
4. Accept the USB debugging authorization prompt.
5. Verify the connection:

```bash
adb devices
```

## Mobilewright Inspector

Mobilewright Inspector can be used to inspect the application's UI and identify suitable locators.

Start the Inspector:

```bash
npx mobilewright inspect
```

The Inspector provides a live view of the connected device and helps identify:

- UI elements
- Test IDs
- Roles
- Text
- Labels
- Element hierarchy
- Recommended locators

Example:

```javascript
screen.getByTestId(
  'com.expandtesting.practice:id/btn_increment'
)
```

## Locator Examples

### Test ID

```javascript
screen.getByTestId(
  'com.expandtesting.practice:id/btn_increment'
)
```

### Text

```javascript
screen.getByText('Counter Demo')
```

### Role

```javascript
screen.getByRole(
  'button',
  { name: 'Submit' }
)
```

### Label

```javascript
screen.getByLabel('Email')
```

Stable identifiers such as Test IDs are preferred when they are available.

## Example Test

The Counter Demo test verifies that the counter can be reset and incremented.

```javascript
import { test, expect } from '@mobilewright/test';

test('Counter can be incremented and reset', async ({ screen }) => {

  const counterDemo = screen.getByTestId(
    'com.expandtesting.practice:id/btn_counter_demo'
  );

  await expect(counterDemo).toBeVisible();

  await counterDemo.tap();

  const counter = screen.getByTestId(
    'com.expandtesting.practice:id/tv_counter'
  );

  await expect(counter).toBeVisible();

  await screen
    .getByTestId('com.expandtesting.practice:id/btn_reset')
    .tap();

  await expect(counter).toHaveText('0');

  await screen
    .getByTestId('com.expandtesting.practice:id/btn_increment')
    .tap();

  await expect(counter).toHaveText('1');
});
```

## Echo Screen

The Echo test demonstrates mobile text input and button interaction.

The scenario covers:

1. Opening the Echo screen
2. Verifying the input field
3. Entering test data
4. Tapping the Echo button
5. Validating the resulting behavior

Example locators:

```javascript
screen.getByTestId(
  'com.expandtesting.practice:id/et_user_name'
)
```

```javascript
screen.getByTestId(
  'com.expandtesting.practice:id/btn_echo'
)
```

## Running Tests

Run all tests:

```bash
npx mobilewright test
```

Run a specific test:

```bash
npx mobilewright test tests/example.spec.js
```

Run the Echo test:

```bash
npx mobilewright test tests/echo.spec.js
```

## Test Reports

After test execution, the generated HTML report can be opened using:

```bash
npx playwright show-report
```

The report can be used to review:

- Test results
- Passed and failed tests
- Test duration
- Failure details
- Execution information

## QA Automation Workflow

```text
Android Application
        ↓
Real Android Device
        ↓
ADB
        ↓
Mobilewright
        ↓
Inspector
        ↓
UI Element Inspection
        ↓
Locator Identification
        ↓
JavaScript Test
        ↓
User Interaction
        ↓
Assertions
        ↓
Test Execution
        ↓
HTML Report
```

## Current Test Coverage

| Area | Scenario | Status |
|---|---|---|
| Counter | Open Counter Demo | Completed |
| Counter | Reset counter | Completed |
| Counter | Increment counter | Completed |
| Echo | Open Echo screen | In Progress |
| Echo | Enter text | In Progress |
| Echo | Submit text | In Progress |
| Gestures | Gesture interactions | Planned |
| Drag & Drop | Drag and drop | Planned |
| Alert Dialog | Alert handling | Planned |
| WebView | WebView interaction | Planned |
| Animation | Animation testing | Planned |
| Bank App | Banking workflow | Planned |

## Mobile QA Areas

Future test coverage can include:

### Functional Testing

- Button interactions
- Form input
- Navigation
- Dialog handling
- Input validation
- Error handling

### Gesture Testing

- Swipe
- Scrolling
- Drag and drop
- Multi-touch

### UI Testing

- Element visibility
- Text validation
- Screen navigation
- UI state validation

### Application Testing

- WebView
- Authentication
- Banking workflows
- Form workflows

## Future Improvements

- Expand automated test coverage
- Add negative test scenarios
- Add gesture automation
- Add WebView test scenarios
- Add authentication scenarios
- Add screenshot evidence
- Integrate tests with CI/CD
- Explore multiple Android devices
- Explore APK installation automation
- Compare Mobilewright with Appium
- Explore AI-assisted mobile test automation
- Improve test reporting
- Introduce reusable screen/page objects

## Learning Outcomes

This project provides practical experience with:

- Mobilewright setup and configuration
- Android real-device automation
- ADB device communication
- Mobile UI inspection
- Mobile locator strategies
- Mobile user interactions
- Test assertions
- Automated test execution
- Test reporting
- Mobile QA automation practices

## Author

**Dinod Deshanjana Kumarasingha**

Software QA Intern | QA Automation

GitHub: [@DinodDeshanjana](https://github.com/DinodDeshanjana)
