import {defineConfig} from "@pandacss/dev"
import pandaPreset from '@pandacss/preset-panda'
import {pandaPresetLocal} from "~/pandaPresetLocal";

export default defineConfig({
    emitPackage: true,
    exclude: [],
    include: ['./src/**/*.{ts,tsx,js,jsx}'],
    jsxFramework: 'react',
    outdir: 'styled-system',
    preflight: true,
    presets: ['@pandacss/dev/presets', pandaPreset, pandaPresetLocal],
})