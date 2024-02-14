import { createEffect, createMemo, createSignal } from 'solid-js'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { visuallyHidden } from 'styled-system/patterns'

const [expectedText, setExpectedText] = createSignal('How fast can you type?')

const [typedText, setTypedText] = createSignal('')

const displayedText = createMemo(
	() => `${typedText()}${expectedText().slice(typedText().length)}`,
)

const [inputEl, setInputEl] = createSignal<HTMLInputElement | null>(null)

const charCount = createMemo(() => typedText().length)

createEffect(() => {
	if (inputEl()) {
		inputEl()?.focus()
		inputEl()?.addEventListener('blur', () => inputEl()?.focus())
	}
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

const Preview = styled('pre', {
	base: { h: 'full', lineHeight: 'inherit', fontFamily: 'mono' },
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
				ref={setInputEl}
				class={css({
					all: 'unset',
				})}
				type={'text'}
				autoCapitalize={'off'}
				autocorrect={'off'}
				value={typedText()}
				onInput={({ target: { value } }) => setTypedText(value)}
			/>
			<Preview>{displayedText()}</Preview>
		</div>
	)
}
