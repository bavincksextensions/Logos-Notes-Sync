/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Obsidian Vault Path - Path to your Obsidian vault's Logos folder */
  "obsidianVaultPath": string,
  /** Excluded Resources - Comma-separated list of resource IDs to exclude (e.g., LLS:ESV,LLS:NIV) */
  "excludedResources": string,
  /** Include Highlight Color - Show highlight color in notes (e.g., [yellow]) */
  "includeHighlightColor": boolean,
  /** Readwise Access Token - Your Readwise access token (get it from readwise.io/access_token). Leave empty to disable Readwise sync. */
  "readwiseToken": string,
  /** Sync to Readwise - Send highlights to Readwise in addition to Obsidian */
  "syncToReadwise": boolean,
  /** Auto-Sync Daily - Automatically sync highlights once per day in the background */
  "autoSyncEnabled": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `sync-notes` command */
  export type SyncNotes = ExtensionPreferences & {}
  /** Preferences accessible in the `login` command */
  export type Login = ExtensionPreferences & {}
  /** Preferences accessible in the `background-sync` command */
  export type BackgroundSync = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `sync-notes` command */
  export type SyncNotes = {}
  /** Arguments passed to the `login` command */
  export type Login = {}
  /** Arguments passed to the `background-sync` command */
  export type BackgroundSync = {}
}

