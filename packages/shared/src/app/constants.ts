export enum SnapPoint {
  "pt-0.95" = 0.95,
  // "pt-0.5" = 0.5,
  "pt-150px" = "150px",
}

export const DAY_ORDER = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const SHORT_DAY_ORDER = ["Su", "M", "Tu", "W", "Th", "F", "Sa"] as const;

export const DEFAULT_ZOOM = 2.9;
export const DEFAULT_CENTER = [35, -80.955] as [number, number];

export const CLOSE_ZOOM = 13;
export const FAR_ZOOM = 3;

export enum BreakPoints {
  LG = 1024,
}

export const HEADER_HEIGHT = 96;
export const SIDEBAR_WIDTH = 360;

export const MAX_PLACES_AUTOCOMPLETE_RADIUS = 50000;

export const Z_INDEX = {
  NAVIGATION_MENU: 1,
  NAVIGATION_MENU_ROOT: 10,
  CALENDAR_CELL: 20,
  SELECT_CONTENT: 50,
  SHEET_OVERLAY: 50,
  SHEET_VARIANTS: 50,
  HOVER_CARD_CONTENT: 50,
  DROPDOWN_MENU_SUBCONTENT: 50,
  DROPDOWN_MENU_CONTENT: 50,
  DRAWER_OVERLAY: 50,
  DRAWER_CONTENT: 50,
  DIALOG_CONTENT: 50,
  ALERT_DIALOG_OVERLAY: 50,
  CONTEXT_MENU_CONTENT: 50,
  CONTEXT_MENU_SUBCONTENT: 50,
  ALERT_DIALOG: 50,
  POPOVER_CONTENT: 50,
  DEBUG_INFO: 1000,
  MOBILE_SEARCH_RESULTS: 1000,
  USER_LOCATION_ICON: 1000,
  USER_LOCATION_INFO_MODAL: 1201,
  HOW_TO_JOIN_MODAL: 1201,
  MOBILE_ALL_FILTERS_CONTAINER: 2001,
  // MOBILE_SIDEBAR: 2,
  // FEATURED_BLOG_POST: 20,
  NON_HOVERED_MAP_MARKER: 1000,
  // MAP_CONTAINER: 9000,

  // Mobile and desktop
  HEADER_CONTAINER: 7000,

  // For the admin page
  PUBLISHED_DIALOG_OVERLAY: 7500,

  MAP_HIDE_BUTTON: 8000,
  // PAYWALL_OVERLAY: 10000,
  // PAYWALL: 10001,

  // Favorites
  // Golfball o meter
  TOOLTIP: 9000,

  // Default station button
  HOVER_CARD: 9000,

  // MDCalendar and MDCombobox
  POPOVER: 9000,

  // None
  CONTEXT_MENU_SUBTRIGGER: 9001,

  // Full screen photo
  DIALOG_OVERLAY: 9003,
  DIALOG: 9004,

  HOVERED_MAP_MARKER: 10000,
} as const;

export const MOBILE_SEARCH_RESULT_ITEM_HEIGHT = 128;
