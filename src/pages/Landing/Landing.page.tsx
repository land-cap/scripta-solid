import { Hero } from './Hero'
import { css } from 'styled-system/css'
import { Navbar } from '~/pages/Landing/Navbar'

export const Landing = () => {
	return (
		<>
			<Navbar />
			<main class={css({ bg: 'bg.canvas' })}>
				<Hero />
			</main>
		</>
	)
}
