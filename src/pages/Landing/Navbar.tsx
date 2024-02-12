import { hstack, macrogrid } from 'styled-system/patterns'
import { css } from 'styled-system/css'

export const Navbar = () => (
	<div class={macrogrid({ pos: 'fixed', top: 0, w: 'full' })}>
		<nav
			class={hstack({
				column: 'content',
				justify: 'space-between',
				h: '20',
			})}
		>
			<div
				class={css({
					fontSize: '2xl',
					fontWeight: 'black',
					color: 'primary.500',
				})}
			>
				scripta
			</div>
			<ul class={hstack()}>
				<li>
					<a>Donate</a>
				</li>
				<li>
					<a>Learn to type</a>
				</li>
			</ul>
		</nav>
	</div>
)
