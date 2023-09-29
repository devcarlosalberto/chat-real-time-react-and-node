export function getUserTimeZone() {
	if (typeof Intl === "object" && typeof Intl.DateTimeFormat === "function") {
		const userLocale = navigator.language;
		const userDateTimeFormat = new Intl.DateTimeFormat(userLocale);
		const userTimeZone = userDateTimeFormat.resolvedOptions().timeZone;
		return userTimeZone;
	} else {
		return null;
	}
}
