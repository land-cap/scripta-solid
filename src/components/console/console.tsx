import { For } from 'solid-js'
import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { center, visuallyHidden } from 'styled-system/patterns'
import {
	charCount,
	isComplete,
	isStandBy,
	mistypedLetterList,
	setInputEl,
	setTypedText,
	TTypingError,
	typedText,
	typedTextCorrected,
	untypedText,
} from './console.logic'

const ConsoleContainer = styled('div', {
	base: {
		pos: 'relative',
		h: '1lh',
		fontSize: '5xl',
		fontFamily: 'mono',
		lineHeight: '1.25',
	},
})

const Caret = styled('div', {
	base: {
		pos: 'absolute',
		boxSizing: 'content-box',
		h: '1lh',
		w: '1ch',
		borderWidth: '1px',
		borderColor: 'white/50',
		transition: 'all',
		transitionDuration: 'faster',
		transitionTimingFunction: 'ease-out',
		'&:after': {
			content: '""',
			pos: 'absolute',
			inset: 0,
			transition: 'all',
			transitionDuration: 'faster',
			transitionTimingFunction: 'ease-out',
			animation: 'blink 1.5s infinite',
		},
	},
	variants: {
		isStandBy: {
			true: {
				'&:after': {
					bg: 'white/25',
				},
			},
		},
	},
})

const Input = styled('input', {
	base: visuallyHidden.raw({ all: 'unset', pointerEvents: 'none' }),
})

const Preview = styled('pre', {
	base: {
		h: 'full',
		whiteSpace: 'break-spaces',
		lineHeight: 'inherit',
		fontFamily: 'mono',
		color: 'white/25',
	},
})

const MistypedLetter = (props: { error: TTypingError }) => (
	<styled.div
		css={center.raw({
			pos: 'absolute',
			bottom: 0,
			w: '1ch',
			color: 'white/50',
			transform: 'translateY(100%)',
			animation: 'fadeIn 0.25s ease-out',
		})}
		style={{ left: `calc(${props.error.index}ch - 1px)` }}
	>
		<styled.div css={{ fontSize: '2xl' }}>{props.error.char}</styled.div>
	</styled.div>
)

export const Console = () => {
	return (
		<ConsoleContainer>
			<Caret
				isStandBy={isStandBy()}
				style={{
					display: untypedText().length + 1 ? 'block' : 'none',
					left: `calc(${charCount()}ch - 1px)`,
					opacity: isComplete() ? 0 : 1,
				}}
			/>
			<For each={mistypedLetterList()}>
				{(error) => <MistypedLetter error={error} />}
			</For>
			<Input
				ref={setInputEl}
				class={css({
					all: 'unset',
				})}
				type={'text'}
				autoCapitalize={'off'}
				autocorrect={'off'}
				value={typedText()}
				disabled={isComplete()}
				onInput={({ target: { value } }) => setTypedText(value)}
			/>
			<Preview>
				<styled.span css={{ h: '1lh', color: 'white' }}>
					{typedTextCorrected()}
				</styled.span>
				{untypedText()}
			</Preview>
		</ConsoleContainer>
	)
}
