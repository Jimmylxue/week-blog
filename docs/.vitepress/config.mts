import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '吉米的生活日记',
	description: "Introduce Jimmy's weekend life",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
		],

		sidebar: {
			'/cycling': [
				{
					text: '周末休闲骑',
					items: [
						{ text: '刷新记忆中的地图', link: '/cycling/weeks/24_12_01' },
					],
				},
			],
			'/cooks': [
				{
					text: 'cook',
					items: [
						{ text: 'Markdown Examples', link: '/markdown-examples' },
						{ text: 'Runtime API Examples', link: '/api-examples' },
					],
				},
			],
			'/': [
				{
					text: 'Examples',
					items: [
						{ text: 'Markdown Examples', link: '/markdown-examples' },
						{ text: 'Runtime API Examples', link: '/api-examples' },
					],
				},
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
		],
	},
})
