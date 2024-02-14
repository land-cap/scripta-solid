import { createEffect, createMemo, createSignal } from 'solid-js'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { visuallyHidden } from 'styled-system/patterns'

const [consoleText, setConsoleText] = createSignal('How fast ca')

const [inputEl, setInputEl] = createSignal<HTMLInputElement | null>(null)

const charCount = createMemo(() => consoleText().length)

createEffect(() => {
	window.addEventListener('keyup', (e) => {
		console.log(e)
	})
})

const Caret = styled('div', {
	base: {
		pos: 'absolute',
		h: '1lh',
		w: `1ch`,
		borderWidth: '1px',
		borderColor: 'white',
	},
})

const Input = styled('input', {
	base: visuallyHidden.raw({ all: 'unset', pointerEvents: 'none' }),
})

const Preview = styled('p', {
	base: { h: 'full', lineHeight: 'inherit' },
})

export const Console = () => {
	return (
		<div
			class={css({
				pos: 'relative',
				h: '1lh',
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
			<Input
				ref={(el) => el.focus()}
				class={css({
					all: 'unset',
				})}
				type={'text'}
				autoCapitalize={'off'}
				autocorrect={'off'}
				value={consoleText()}
				onInput={({ target: { value } }) => setConsoleText(value)}
			/>
			<Preview>{consoleText()}</Preview>
		</div>
	)
}
