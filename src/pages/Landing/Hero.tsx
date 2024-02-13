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
				class={css({
					fontSize: '7xl',
					fontFamily: 'mono',
				})}
			>
				<span class={css({ bg: 'white', color: 'black' })}>H</span>
				<span class={css({ opacity: '0.25' })}>ow fast can you type?</span>
			</span>
		</h1>
	</section>
)
