// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'farp.dbuckley.dev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/buckldav/farp' }],
			sidebar: [
				{
					label: 'FARP Stack',
					items: [
						{ label: 'Getting Started', slug: 'farp/getting-started' },
						{ label: "1. FastAPI and SQLModel", slug: "farp/1-fastapi-sqlmodel" },
						{ label: "2. Docker and PostgreSQL", slug: "farp/2-docker-pgsql" },
						{ label: "3. Alembic", slug: "farp/3-alembic" },
						{ label: "4. React Admin", slug: "farp/4-react-admin" },
						{ label: "5. React and FastAPI", slug: "farp/5-react-fastapi" },
						{ label: "6. Casdoor Authentication", slug: "farp/6-casdoor-auth" }
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
