import { createEffect, createMemo, createSignal } from 'solid-js'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { visuallyHidden } from 'styled-system/patterns'

const [expectedText, setExpectedText] = createSignal('How fast can you type?')

const [typedText, setTypedText] = createSignal('')

const untypedText = createMemo(() => expectedText().slice(typedText().length))

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
		boxSizing: 'content-box',
		h: '1lh',
		w: `1ch`,
		borderWidth: '1px',
		borderColor: 'white',
		animation: 'pulse',
		animationDuration: '1s',
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
				fontSize: '5xl',
				fontFamily: 'mono',
				lineHeight: '1.25',
			})}
		>
			<Caret
				style={{
					display: untypedText().length ? 'block' : 'none',
					left: `calc(${charCount()}ch - 1px)`,
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
				onInput={({ target: { value } }) =>
					value.length <= expectedText().length && setTypedText(value)
				}
			/>
			<Preview>
				<styled.span css={{ color: 'white' }}>{typedText()}</styled.span>
				{untypedText()}
			</Preview>
		</div>
	)
}
