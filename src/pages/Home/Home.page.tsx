import { Title } from '@solidjs/meta'
import { Hero } from './Hero'
import { css } from 'styled-system/css'
import { Navbar } from '~/pages/Home/Navbar'

export const Home = () => {
	return (
		<>
			<Navbar />
			<main class={css({ bg: 'bg.canvas' })}>
				<Title>Daniel Filat — Front End Engineer</Title>
				<Hero />
			</main>
		</>
	)
}
