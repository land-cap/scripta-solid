import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
	className: 'button',
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		px: '4',
		h: '12',
		lineHeight: '1',
		transition: 'colors',
		transitionDuration: 'normal',
		transitionTimingFunction: 'ease-out',
		'& *': {
			transition: 'colors',
			transitionDuration: 'normal',
			transitionTimingFunction: 'ease-out',
		},
		'&[aria-disabled=true]': {
			pointerEvents: 'none',
		},
	},
	variants: {
		visual: {
			ghost: {},
			solid: {
				bg: 'bg.muted',
				_active: { bg: 'bg.more_muted', color: 'fg.subtle' },
				_canHover: { _hover: { bg: 'bg.more_muted' } },
				'&[aria-disabled=true]': {
					color: 'fg.faded',
				},
			},
		},
		icon: {
			true: {
				px: '0',
				h: '14',
				aspectRatio: 'square',
			},
		},
		onDark: {
			true: {},
			false: {},
		},
	},
	defaultVariants: {
		visual: 'ghost',
		icon: false,
	},
	compoundVariants: [
		{
			onDark: false,
			visual: 'ghost',
			css: {
				_active: { bg: 'bg.subtle', color: 'fg.subtle' },
				_canHover: { _hover: { bg: 'bg.subtle' } },
				'&[aria-disabled=true]': {
					color: 'fg.moreFaded',
				},
			},
		},
		{
			onDark: true,
			visual: 'ghost',
			css: {
				pos: 'relative',
				color: 'white',
				_after: {
					content: '""',
					pos: 'absolute',
					inset: 0,
					bg: 'white',
					opacity: 0,
				},
				_active: { _after: { opacity: 0.1 } },
				_canHover: {
					_hover: {
						_after: { opacity: 0.1 },
					},
				},
			},
		},
	],
})
