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
				fontSize: '7xl',
				fontWeight: 'light',
				lineHeight: '1.25',
				color: 'fg',
			})}
		>
			How fast can you type?
		</h1>
	</section>
)
