# The Internet - Comprehensive Test Plan

## Application Overview

The Internet is a web application designed to provide test automation practitioners with a wide range of UI elements and scenarios for practicing test automation skills. It includes various interactive elements, forms, alerts, frames, and dynamic content that require different testing approaches. The application serves as an excellent practice platform for learning and validating Playwright test automation techniques.

## Test Scenarios

### 1. Navigation and Homepage

**Seed:** `mytests/seed.spec.ts`

#### 1.1. Verify Homepage Loads Successfully

**File:** `tests/navigation/homepage.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com
    - expect: Page title should be 'The Internet'
    - expect: URL should be 'http://the-internet.herokuapp.com/'
    - expect: Page should load without errors
  2. Verify main heading visibility
    - expect: Heading 'Welcome to the-internet' should be visible
    - expect: Heading 'Available Examples' should be visible
  3. Verify key navigation links are present
    - expect: 'Form Authentication' link should be visible
    - expect: 'Checkboxes' link should be visible
    - expect: 'Dropdown' link should be visible
    - expect: 'JavaScript Alerts' link should be visible

#### 1.2. Verify All Available Examples Display

**File:** `tests/navigation/examples-list.spec.ts`

**Steps:**
  1. Navigate to the homepage
    - expect: Homepage loads successfully
  2. Count and verify all example links are displayed
    - expect: All 44+ example links should be visible on the page
    - expect: Links should include testing scenarios like A/B Testing, Add/Remove Elements, Basic Auth, etc.
  3. Verify links are clickable and properly formatted
    - expect: Each link should have an href attribute
    - expect: Links should be accessible to users

### 2. Form Authentication

**Seed:** `mytests/seed.spec.ts`

#### 2.1. Submit Form with Valid Credentials

**File:** `tests/forms/authentication-valid.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/login
    - expect: Login page loads successfully
    - expect: Username and Password input fields are visible
    - expect: Login button is visible
  2. Enter username 'tomsmith' in the Username field
    - expect: Username field contains 'tomsmith'
  3. Enter password 'SuperSecretPassword!' in the Password field
    - expect: Password field contains the entered password (masked or visible based on field type)
  4. Click the Login button
    - expect: Page redirects to secure area
    - expect: Success message 'You logged into a secure area!' should be visible
    - expect: Heading 'Secure Area' should be visible

#### 2.2. Submit Form with Invalid Credentials

**File:** `tests/forms/authentication-invalid.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/login
    - expect: Login page loads successfully
  2. Enter invalid username 'invalid' in the Username field
    - expect: Username field contains 'invalid'
  3. Enter invalid password 'wrong' in the Password field
    - expect: Password field contains the entered password
  4. Click the Login button
    - expect: Error message 'Your username is invalid!' should be displayed
    - expect: User remains on login page

#### 2.3. Submit Form with Empty Credentials

**File:** `tests/forms/authentication-empty.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/login
    - expect: Login page loads successfully
  2. Leave Username and Password fields empty and click Login button
    - expect: Appropriate error message should display
    - expect: Form should not submit without credentials

### 3. Checkbox Interactions

**Seed:** `mytests/seed.spec.ts`

#### 3.1. Select and Deselect Checkboxes

**File:** `tests/interactive-elements/checkboxes.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/checkboxes
    - expect: Checkboxes page loads successfully
    - expect: At least two checkboxes should be visible
  2. Verify initial state of the first checkbox
    - expect: First checkbox should be unchecked initially
  3. Click the first checkbox to select it
    - expect: First checkbox should be checked after clicking
  4. Click the first checkbox again to deselect it
    - expect: First checkbox should be unchecked again
  5. Verify the state of the second checkbox independently
    - expect: Second checkbox state should not be affected by first checkbox interactions

#### 3.2. Verify Multiple Checkbox States

**File:** `tests/interactive-elements/checkboxes-multiple.spec.ts`

**Steps:**
  1. Navigate to the checkboxes page
    - expect: Page loads successfully
  2. Select all checkboxes one by one
    - expect: Each checkbox should become checked when clicked
    - expect: Previously checked checkboxes should remain checked
  3. Deselect all checkboxes
    - expect: All checkboxes should be unchecked after deselection

### 4. Dropdown Selection

**Seed:** `mytests/seed.spec.ts`

#### 4.1. Select Option from Dropdown

**File:** `tests/interactive-elements/dropdown.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/dropdown
    - expect: Dropdown page loads successfully
    - expect: Dropdown element should be visible
  2. Verify default dropdown value
    - expect: Dropdown should have an empty or default value initially
  3. Select 'Option 1' from the dropdown
    - expect: Dropdown value should change to '1' after selection
    - expect: Selected option should be visible in the dropdown
  4. Select 'Option 2' from the dropdown
    - expect: Dropdown value should change to '2' after selection

#### 4.2. Verify All Dropdown Options Are Available

**File:** `tests/interactive-elements/dropdown-options.spec.ts`

**Steps:**
  1. Navigate to the dropdown page
    - expect: Page loads successfully
  2. Click the dropdown to see all available options
    - expect: All options should be displayed and selectable
  3. Verify each option can be selected
    - expect: Each option should be selectable and reflect the selection in the dropdown value

### 5. JavaScript Interactions

**Seed:** `mytests/seed.spec.ts`

#### 5.1. Handle JavaScript Alert

**File:** `tests/javascript/alert-handling.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/javascript_alerts
    - expect: JavaScript alerts page loads successfully
    - expect: 'Click for JS Alert' button should be visible
  2. Set up a listener for the dialog/alert event
    - expect: Dialog listener is ready to capture alerts
  3. Click the 'Click for JS Alert' button
    - expect: JavaScript alert dialog should appear with message 'I am a JS Alert'
  4. Accept the alert by clicking OK
    - expect: Alert should close
    - expect: Success message 'You successfully clicked an alert' should be visible

#### 5.2. Handle JavaScript Confirm Dialog

**File:** `tests/javascript/confirm-handling.spec.ts`

**Steps:**
  1. Navigate to the JavaScript alerts page
    - expect: Page loads successfully
    - expect: 'Click for JS Confirm' button should be visible
  2. Set up listener for confirm dialog
    - expect: Dialog listener is ready
  3. Click the 'Click for JS Confirm' button
    - expect: Confirm dialog should appear
  4. Click OK on the confirm dialog
    - expect: Dialog should close
    - expect: Success message should display indicating OK was clicked

#### 5.3. Handle JavaScript Prompt Dialog

**File:** `tests/javascript/prompt-handling.spec.ts`

**Steps:**
  1. Navigate to the JavaScript alerts page
    - expect: Page loads successfully
    - expect: 'Click for JS Prompt' button should be visible
  2. Set up listener for prompt dialog
    - expect: Dialog listener is ready
  3. Click the 'Click for JS Prompt' button
    - expect: Prompt dialog should appear with input field
  4. Enter text in the prompt and click OK
    - expect: Entered text should be captured
    - expect: Success message with entered text should display

### 6. Form Elements

**Seed:** `mytests/seed.spec.ts`

#### 6.1. Interact with Text Input Fields

**File:** `tests/forms/input-fields.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/inputs
    - expect: Inputs page loads successfully
    - expect: Various input fields should be visible
  2. Enter text into a text input field
    - expect: Text should appear in the input field
    - expect: Input value should match entered text
  3. Clear the input field
    - expect: Input field should be empty after clearing

#### 6.2. Test Hover Interactions

**File:** `tests/interactive-elements/hovers.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/hovers
    - expect: Hovers page loads successfully
    - expect: Hoverable elements should be visible
  2. Hover over an image element
    - expect: Hidden text or additional information should appear on hover
  3. Move mouse away from the element
    - expect: Hidden content should disappear or return to original state

### 7. Frame Handling

**Seed:** `mytests/seed.spec.ts`

#### 7.1. Interact with iFrame Content

**File:** `tests/frames/iframe-interaction.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/frames
    - expect: Frames page loads successfully
  2. Select the iFrame option from available frames
    - expect: iFrame should be accessible
  3. Interact with elements inside the iFrame
    - expect: Elements within iFrame should be accessible and interactive
    - expect: Changes should be reflected in the iFrame content

#### 7.2. Handle Nested Frames

**File:** `tests/frames/nested-frames.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/nested_frames
    - expect: Nested frames page loads successfully
  2. Access content in the top-level frame
    - expect: Top frame content should be accessible
  3. Access content in nested frames
    - expect: Nested frame content should be accessible from parent frame context

### 8. Dynamic Content

**Seed:** `mytests/seed.spec.ts`

#### 8.1. Test Dynamic Loading Elements

**File:** `tests/dynamic/dynamic-loading.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/dynamic_loading/1
    - expect: Dynamic loading page loads successfully
    - expect: Loading button should be visible
  2. Click the Start button to trigger loading
    - expect: Loading indicator should appear
    - expect: Page should wait for content to load
  3. Wait for the dynamic content to appear
    - expect: Loading indicator should disappear
    - expect: Loaded content should become visible after delay

#### 8.2. Handle Dynamic Controls

**File:** `tests/dynamic/dynamic-controls.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/dynamic_controls
    - expect: Dynamic controls page loads successfully
    - expect: Enable/Disable buttons should be visible
  2. Click to enable a disabled element
    - expect: Loading animation should display
    - expect: Element should become enabled after loading completes
  3. Click to disable the enabled element
    - expect: Loading animation should display
    - expect: Element should become disabled again

### 9. Navigation and Windows

**Seed:** `mytests/seed.spec.ts`

#### 9.1. Handle Multiple Windows/Tabs

**File:** `tests/navigation/multiple-windows.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/windows
    - expect: Windows page loads successfully
    - expect: 'Click Here' link should be visible
  2. Click the link to open new window
    - expect: New window/tab should open
    - expect: Original page should remain accessible
  3. Switch between windows and verify content
    - expect: Both windows should have different content
    - expect: Window switching should be handled correctly

#### 9.2. Test Redirect and Status Codes

**File:** `tests/navigation/status-codes.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/status_codes
    - expect: Status codes page loads successfully
    - expect: Links with different status codes should be visible
  2. Click on a link that returns a specific status code
    - expect: Page should handle the status code appropriately
    - expect: Response headers should reflect the correct status code

### 10. File Handling

**Seed:** `mytests/seed.spec.ts`

#### 10.1. Upload File

**File:** `tests/file-handling/file-upload.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/upload
    - expect: File upload page loads successfully
    - expect: File input field should be visible
  2. Click on file input to open file chooser
    - expect: File chooser dialog should open
  3. Select a file to upload
    - expect: Selected file should be shown in the input
    - expect: File should be ready for upload
  4. Click the Upload button
    - expect: File should be uploaded successfully
    - expect: Confirmation message should appear with filename

#### 10.2. Download File

**File:** `tests/file-handling/file-download.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/download
    - expect: Download page loads successfully
    - expect: Download links should be visible
  2. Intercept download by listening for download event
    - expect: Download listener should be set up
  3. Click on a download link
    - expect: File download should be initiated
    - expect: Downloaded file should be accessible

### 11. Visual Elements

**Seed:** `mytests/seed.spec.ts`

#### 11.1. Test Image Loading and Broken Images

**File:** `tests/visual/broken-images.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/broken_images
    - expect: Broken images page loads successfully
    - expect: Multiple image elements should be displayed
  2. Verify images load or fail gracefully
    - expect: Broken images should show broken image indicators
    - expect: Valid images should display correctly

#### 11.2. Test Drag and Drop

**File:** `tests/interactive-elements/drag-drop.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/drag_and_drop
    - expect: Drag and drop page loads successfully
    - expect: Draggable elements should be visible
  2. Drag element A to element B position
    - expect: Elements should swap positions after drag
    - expect: Drag operation should complete successfully

### 12. Data Tables and Sorting

**Seed:** `mytests/seed.spec.ts`

#### 12.1. Interact with Sortable Data Tables

**File:** `tests/tables/sortable-tables.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/tables
    - expect: Tables page loads successfully
    - expect: Sortable data tables should be displayed
  2. Click on a table header to sort by that column
    - expect: Table rows should be sorted by the selected column
    - expect: Sort indicator should show sorting direction
  3. Click the same header again to reverse sort order
    - expect: Table should be sorted in reverse order
    - expect: Sort indicator should show reverse direction

### 13. Special Features

**Seed:** `mytests/seed.spec.ts`

#### 13.1. Test Context Menu

**File:** `tests/special/context-menu.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/context_menu
    - expect: Context menu page loads successfully
    - expect: Clickable area should be visible
  2. Right-click on the designated area
    - expect: Context menu should appear
    - expect: Alert dialog should display with specific message

#### 13.2. Test Key Press Handling

**File:** `tests/special/key-presses.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/key_presses
    - expect: Key presses page loads successfully
    - expect: Input field should be visible
  2. Press various keyboard keys in the input field
    - expect: Page should detect and display the pressed key
    - expect: Key code should be correctly identified

#### 13.3. Test Slow Loading Resources

**File:** `tests/special/slow-resources.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/slow
    - expect: Slow loading page should start loading
  2. Wait for slow resources to load
    - expect: Page should eventually load completely
    - expect: Slow resources should appear without timeouts

#### 13.4. Test Horizontal Slider

**File:** `tests/special/slider.spec.ts`

**Steps:**
  1. Navigate to http://the-internet.herokuapp.com/horizontal_slider
    - expect: Slider page loads successfully
    - expect: Horizontal slider should be visible
  2. Move the slider to different positions
    - expect: Slider value should update based on position
    - expect: Value display should reflect slider position
