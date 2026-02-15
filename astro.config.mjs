// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import mermaid from 'astro-mermaid';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://bot-chronicles.marlburrow.io',
	integrations: [mdx(), sitemap(), mermaid({
		theme: 'dark',
		config: {
			themeVariables: {
				darkMode: true,
				background: '#0d1117',
				primaryColor: '#1a1a2e',
				primaryTextColor: '#e0e0e8',
				primaryBorderColor: '#00ff88',
				secondaryColor: '#16161f',
				secondaryTextColor: '#e0e0e8',
				secondaryBorderColor: '#06b6d4',
				tertiaryColor: '#12121a',
				tertiaryTextColor: '#e0e0e8',
				lineColor: '#00ff88',
				textColor: '#e0e0e8',
				mainBkg: '#1a1a2e',
				nodeBorder: '#00ff88',
				clusterBkg: '#0d1117',
				clusterBorder: '#00ff88',
				titleColor: '#e0e0e8',
				edgeLabelBackground: '#12121a',
				nodeTextColor: '#e0e0e8',
				actorTextColor: '#e0e0e8',
				actorBkg: '#1a1a2e',
				actorBorder: '#00ff88',
				actorLineColor: '#00ff88',
				signalColor: '#e0e0e8',
				signalTextColor: '#e0e0e8',
				labelBoxBkgColor: '#12121a',
				labelBoxBorderColor: '#00ff88',
				labelTextColor: '#e0e0e8',
				loopTextColor: '#e0e0e8',
				noteBkgColor: '#1a1a2e',
				noteTextColor: '#e0e0e8',
				noteBorderColor: '#06b6d4',
				activationBkgColor: '#1a1a2e',
				activationBorderColor: '#00ff88',
				sequenceNumberColor: '#0d1117',
			},
		},
	})],
});
