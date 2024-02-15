import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js'

const [expectedText] = createSignal('How fast can you type?')

export const [typedText, setTypedText] = createSignal('')

export const untypedText = createMemo(() =>
	expectedText().substring(typedText().length),
)

export const typedTextCorrected = createMemo(() =>
	expectedText().substring(0, typedText().length),
)

export const [inputEl, setInputEl] = createSignal<HTMLInputElement | null>(null)

export const charCount = createMemo(() => typedText().length)

export const isStandBy = createMemo(() => !typedText().length)

export const isComplete = createMemo(
	() => expectedText().length === typedText().length,
)

createEffect(() => {
	const handleBlur = () => inputEl()?.focus()

	const handleKeyDown = (e: KeyboardEvent) => {
		{
			if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
				e.preventDefault()
			}
		}
	}

	if (inputEl()) {
		inputEl()?.focus()
		inputEl()?.addEventListener('blur', handleBlur)
		inputEl()?.addEventListener('keydown', handleKeyDown)
	}

	onCleanup(() => {
		inputEl()?.removeEventListener('blur', handleBlur)
		inputEl()?.removeEventListener('keydown', handleKeyDown)
	})
})
