export const CREDENTIALS = {
  VALID: {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
  },
  INVALID: {
    username: 'invalid',
    password: 'wrong',
  },
};

export const TIMEOUTS = {
  SHORT: 3000,
  DEFAULT: 5000,
  LONG: 10000,
};

export const SELECTORS = {
  HOME: {
    HEADING: 'h1:has-text("Welcome to the-internet")',
    EXAMPLES_HEADING: 'h2:has-text("Available Examples")',
  },
  LOGIN: {
    USERNAME_INPUT: 'input[name="username"]',
    PASSWORD_INPUT: 'input[name="password"]',
    LOGIN_BUTTON: 'button[type="submit"]',
    SUCCESS_MESSAGE: 'text=You logged into a secure area!',
    ERROR_MESSAGE: 'text=Your username is invalid!',
  },
  CHECKBOXES: {
    CHECKBOX: 'input[type="checkbox"]',
  },
  DROPDOWN: {
    DROPDOWN: '#dropdown',
  },
  ALERTS: {
    ALERT_BUTTON: 'button:has-text("Click for JS Alert")',
    CONFIRM_BUTTON: 'button:has-text("Click for JS Confirm")',
    PROMPT_BUTTON: 'button:has-text("Click for JS Prompt")',
    RESULT: '#result',
  },
};
