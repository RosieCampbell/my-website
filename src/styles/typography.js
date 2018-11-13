import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"
import lawtonTheme from "typography-theme-lawton"
import stAnnesTheme from 'typography-theme-st-annes'

stAnnesTheme.overrideThemeStyles = (options) => ({
    'a': {
        color: '#2779bd',
    }
})

const typography = new Typography(stAnnesTheme)

export default typography