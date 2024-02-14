import { createEffect, createSignal } from 'solid-js'
import { css } from 'styled-system/css'

const [consoleText, setConsoleText] = createSignal('')

const [inputEl, setInputEl] = createSignal<HTMLInputElement | null>(null)

createEffect(() => {
	window.addEventListener('keyup', (e) => {
		console.log(e)
	})
})

export const Console = () => {
	return (
		<div
			class={css({
				pos: 'relative',
				color: 'white/25',
				fontSize: '7xl',
				fontFamily: 'mono',
				lineHeight: '1.25',
			})}
		>
			<div
				class={css({
					pos: 'absolute',
					left: '10ch',
					h: '1lh',
					w: '1ch',
					bg: 'white',
				})}
			/>
			<input
				ref={setInputEl}
				class={css({
					all: 'unset',
					h: 'full',
					lineHeight: 'inherit',
					caretColor: 'transparent',
				})}
				type={'text'}
				autoCapitalize={'off'}
				autocorrect={'off'}
				value={consoleText()}
				onInput={({ target: { value } }) => setConsoleText(value)}
			/>
		</div>
	)
}
