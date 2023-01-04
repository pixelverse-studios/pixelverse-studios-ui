export const JWT_SECRET = 'ezpz-jwt'
export const DARK = 'DARK'
export const LIGHT = 'LIGHT'
export const STORED_THEME_KEY = 'EZPZ-THEME'
export const LOGGED_IN_PAGES = ['dashboard']

// Reducer constants
export const UPDATE = 'UPDATE'
export const REPLACE = 'REPLACE'
export const ADD_ERROR = 'ADD ERROR'
export const REMOVE_ERROR = 'REMOVE ERROR'

export const PROJECT_PHASES = {
    'Phase 1: Information Gathering': 20,
    'Phase 2: Structure & Design': 40,
    'Phase 3: Initial Development': 60,
    'Phase 4: Testing/QA': 80,
    'Phase 5: Post Launch Maintenance': 100
} as {
    [key: string]: number
}
