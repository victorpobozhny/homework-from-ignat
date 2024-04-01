const initState = {
    themeId: 1,
}
type ThemeStateType = typeof initState

export const themeReducer = (state = initState, action: ChangeThemeIdACType): ThemeStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}
type ChangeThemeIdACType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdACType => ({type: 'SET_THEME_ID', id}) // fix any
