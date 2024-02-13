import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'

export const Hero = () => (
	<section
		class={vstack({
			justify: 'center',
			h: 'dvh',
		})}
	>
		<h1
			class={vstack({
				gap: '8',
				gridColumn: '2 / -2',
				gridRow: '6 / span 2',
				alignSelf: 'center',

				lineHeight: '1',
				textAlign: 'center',
				color: 'white',
			})}
		>
			<span class={css({ fontSize: 'xl' })}>Do you wonder</span>
			<span
				class={css({ fontSize: '7xl', fontFamily: 'mono', opacity: '0.5' })}
			>
				how fast can you type?
			</span>
		</h1>
	</section>
)
