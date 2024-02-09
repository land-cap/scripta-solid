// @refresh reload
import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start'
import { Suspense } from 'solid-js'
import './index.css'
import '/fonts/GeistVariableVF.ttf'
import '/fonts/GeistVariableVF.woff2'
import '/fonts/GeistMonoVariableVF.ttf'
import '/fonts/GeistMonoVariableVF.woff2'

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Daniel Filat — Portfolio</Title>
					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	)
}
