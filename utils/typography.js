import Typography from "typography"
import theme from "typography-theme-github"
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'


/*
theme.overrideThemeStyles = ({ rhythm }, options) => ({
	"a": {
		color: "#0074de",
		textDecoration: "none !important",
		transition: "opacity 0.1s ease"
	},
	"a:hover": {
		color: "#3894e8",
	},
})

theme.scaleRatio = 2
theme.baseFontSize = "18px"
*/

const typography = new Typography(usWebDesignStandardsTheme)

export default typography
