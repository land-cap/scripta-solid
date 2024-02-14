import { css } from 'styled-system/css'
import { styled } from 'styled-system/jsx'
import { visuallyHidden } from 'styled-system/patterns'
import {
	charCount,
	isComplete,
	setInputEl,
	setTypedText,
	typedText,
	untypedText,
} from './console.logic'

const ConsoleContainer = styled('div', {
	base: {
		pos: 'relative',
		h: '1lh',
		color: 'white/25',
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
		animation: 'var(--animation)',
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
		<ConsoleContainer>
			<Caret
				style={{
					display: untypedText().length + 1 ? 'block' : 'none',
					left: `calc(${charCount()}ch - 1px)`,
					opacity: isComplete() ? 0 : 1,
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
				disabled={isComplete()}
				onInput={({ target: { value } }) => setTypedText(value)}
			/>
			<Preview>
				<styled.span css={{ h: '1lh', color: 'white' }}>
					{typedText()}
				</styled.span>
				{untypedText()}
			</Preview>
		</ConsoleContainer>
	)
}
