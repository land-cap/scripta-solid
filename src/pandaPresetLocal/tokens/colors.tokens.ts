import { defineTokens } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	white: { value: 'white' },
	neutral: pandaPreset.theme.tokens.colors.gray,
	primary: pandaPreset.theme.tokens.colors.violet,
	accent: pandaPreset.theme.tokens.colors.teal,
})
