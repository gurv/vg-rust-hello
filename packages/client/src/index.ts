import { Link } from "@oscartbeaumont-sd/rspc-client/v2";

declare global {
	// eslint-disable-next-line
	var isDev: boolean;
	// eslint-disable-next-line
	var rspcLinks: Link[];
	// eslint-disable-next-line
	var onHotReload: (cb: () => void) => void | undefined;
}

if (
	globalThis.localStorage === undefined ||
	globalThis.isDev === undefined ||
	globalThis.rspcLinks === undefined
)
	throw new Error(
		"Please ensure you have patched `globalThis` before importing `@vg/client`!",
	);

declare global {
	// Tauri is cringe and returns a Promise breaking compatibility with the browser API
	// export function confirm(): never; // boolean | Promise<boolean>;
	export function confirm(): boolean | Promise<boolean>;
}

export * from "./hooks";
export * from "./stores";
export * from "./rspc";
export * from "./rspc-cursed";
export * from "./core";
export * from "./utils";
export * from "./lib";
export * from "./form";
export * from "./cache";
export * from "./color";
export * from "./solid";
export * from "./explorer";
