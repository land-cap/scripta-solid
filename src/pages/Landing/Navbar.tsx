import { hstack, macrogrid } from 'styled-system/patterns'
import { css } from 'styled-system/css'

export const Navbar = () => (
	<div class={macrogrid({ pos: 'fixed', top: 0, w: 'full' })}>
		<nav
			class={hstack({
				column: 'content',
				h: '20',
				borderBottomWidth: '4px',
				borderColor: 'fg',
			})}
		>
			<div
				class={css({
					fontSize: '2xl',
					fontVariationSettings: '"wght" 900',
				})}
			>
				scripta
			</div>
		</nav>
	</div>
)
