import { Title } from '@solidjs/meta'
import { Hero } from './Hero'
import { css } from 'styled-system/css'

export const Home = () => {
	return (
		<main class={css({ bg: 'bg.canvas' })}>
			<Title>Daniel Filat — Front End Engineer</Title>
			<Hero />
		</main>
	)
}
