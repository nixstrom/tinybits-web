type CSSModule = Record<string, string>

declare module "*.module.css" {
	const cssModule: CSSModule
	export = cssModule
}
