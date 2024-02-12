import { defineTokens } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'

export const colors = defineTokens.colors({
	black: { value: '{colors.neutral.900}' },
	white: { value: 'white' },
	primary: pandaPreset.theme.tokens.colors.purple,
	accent: pandaPreset.theme.tokens.colors.teal,
})
