import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import { Console } from '~/components'

export const Hero = () => (
	<section
		class={vstack({
			justify: 'center',
			gap: '8',
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
			<span class={css({ fontSize: '2xl' })}>Are you wondering</span>
		</h1>
		<Console />
	</section>
)
