import { hstack, macrogrid } from 'styled-system/patterns'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'

const navLinkCls = cx(
	button({ onDark: true, visual: 'ghost' }),
	css({ h: '16' }),
)

export const Navbar = () => (
	<div class={macrogrid({ pos: 'fixed', top: 0, w: 'full' })}>
		<nav
			class={hstack({
				column: 'content',
				justify: 'space-between',
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
					<a class={cx(navLinkCls, css({ color: 'white/50' }))}>English</a>
				</li>
				<li>
					<a class={navLinkCls}>Donate</a>
				</li>
				<li>
					<a class={navLinkCls}>Learn to type</a>
				</li>
			</ul>
		</nav>
	</div>
)
