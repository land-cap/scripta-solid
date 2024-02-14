import { createEffect, createMemo, createSignal } from 'solid-js'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'

const [consoleText, setConsoleText] = createSignal('')

const [inputEl, setInputEl] = createSignal<HTMLInputElement | null>(null)

const charCount = createMemo(() => consoleText().length)

createEffect(() => {
	window.addEventListener('keyup', (e) => {
		console.log(e)
	})
})

const Caret = styled('div', {
	base: { pos: 'absolute', h: '1lh', w: `1ch`, bg: 'white' },
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
			<Caret
				style={{
					left: `${charCount()}ch`,
				}}
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
