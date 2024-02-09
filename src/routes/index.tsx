import { Title } from '@solidjs/meta'
import { css } from 'styled-system/css'

export default function Home() {
	return (
		<main>
			<Title>Daniel Filat — Front End Engineer</Title>
			<h1 class={css({ color: 'red.500' })}>Hi, I'm Daniel.</h1>
		</main>
	)
}
