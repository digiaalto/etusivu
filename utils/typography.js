import Typography from "typography"
import githubTheme from "typography-theme-github"
//import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'


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

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	"h1, h2, h3, h4, h5, h6": {
		borderBottom: "none"
	},
	"h2": {
		fontWeight: "900",
		letterSpacing: "0.025rem",
		textTransform: "uppercase"
	},
	"h2::after": {
		display: "block",
		content: " ",
		width: "3rem",
		height: "1rem",
		backgroundColor: "#000"
	}
})

githubTheme.baseFontSize = "18px"

const typography = new Typography(githubTheme)

export default typography
