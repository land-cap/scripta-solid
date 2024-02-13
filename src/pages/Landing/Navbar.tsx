import { hstack, macrogrid } from 'styled-system/patterns'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

export const Navbar = () => (
	<div class={macrogrid({ pos: 'fixed', top: 0, w: 'full' })}>
		<nav
			class={hstack({
				column: 'content',
				justify: 'space-between',
				h: '20',
				color: 'white',
			})}
		>
			<div
				class={css({
					fontSize: 'xl',
					fontWeight: 'black',
				})}
			>
				scripta
			</div>
			<ul class={hstack({ gap: '0' })}>
				<li>
					<a
						class={cx(
							button({ onDark: true, visual: 'ghost' }),
							css({ color: 'white/50' }),
						)}
					>
						English
					</a>
				</li>
				<li>
					<a class={button({ onDark: true, visual: 'ghost' })}>Donate</a>
				</li>
				<li>
					<a class={button({ onDark: true, visual: 'ghost' })}>Learn to type</a>
				</li>
			</ul>
		</nav>
	</div>
)
