import { css } from 'styled-system/css'

export const Hero = () => (
	<section
		class={css({
			display: 'grid',
			h: 'dvh',
			gridTemplateColumns: 'repeat(12,1fr)',
			gridTemplateRows: 'repeat(12,1fr)',
		})}
	>
		<h1
			class={css({
				gridColumn: '2 / -2',
				gridRow: '6 / span 2',
				alignSelf: 'center',
				fontFamily: 'mono',
				fontSize: '6xl',
				fontVariationSettings: '"wght" 1000',
				color: 'fg',
			})}
		>
			<span>Hi, I'm Daniel.</span>
			<br />
			<span class={css({ color: 'electricBlue' })}>
				I design and build apps and interfaces.
			</span>
		</h1>
	</section>
)
