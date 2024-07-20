import { createSignal, Signal } from 'solid-js'

export const signalFamily = <K extends string | number | symbol, T>(
	defaultValue: (key: K) => T,
) => {
	const keyToSignal = {} as Record<K, Signal<T>>

	const keyList = Object.keys(keyToSignal) as K[]

	const registerSignal = (key: K) => {
		keyToSignal[key] = createSignal(defaultValue(key))
	}

	return (key: K) => {
		if (!keyList.includes(key)) {
			registerSignal(key)
		}
		return keyToSignal[key]
	}
}
