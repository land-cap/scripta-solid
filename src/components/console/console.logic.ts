import { createMemo, createSignal } from 'solid-js'
import { signalFamily } from '~/utils'

const [textToType] = createSignal('How fast can you type?')

export const [typedText, setTypedText] = createSignal('')

export const untypedText = createMemo(() =>
	textToType().substring(typedText().length),
)

export const typedTextCorrected = createMemo(() =>
	textToType().substring(0, typedText().length),
)

export const typedCharCount = createMemo(() => typedText().length)

export const typedCharList = createMemo(() => {
	const correctCharList = [...typedTextCorrected()]
	const typedCharList = [...typedText()]
	return typedCharList.map((char, index) => ({
		char,
		isMistyped: correctCharList[index] !== char,
	}))
})

export type TTypingError = {
	index: number
	char: string
}

const typingErrorFamily = signalFamily<number, string | null>(() => null)

export const typingErrorList = createMemo(() =>
	typedCharList().reduce(
		(acc, { char, isMistyped }, index) =>
			isMistyped ? [...acc, { index, char }] : acc,
		[] as TTypingError[],
	),
)

export const isInStandBy = createMemo(() => !typedText().length)

export const hasCompletedTest = createMemo(
	() => textToType().length === typedText().length,
)
