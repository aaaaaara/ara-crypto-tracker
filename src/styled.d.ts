import "styled-components";

// and extend them! styled-componets 테마 정의를 확장
declare module "styled-components" {
	export interface DefaultTheme {
		textColor?: string;
		bgColor?: string;
		btnColor?: string;
		accentColor?: string;
		cardBgColor?: string;
		styledTestColor?: {
			header: string;
			body: string;
			footer: string;
		};
	}
}
