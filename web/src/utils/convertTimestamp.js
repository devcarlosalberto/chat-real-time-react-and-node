export function convertTimestamp(timestamp, timezone) {
	const options = {
		hour: "2-digit",
		minute: "2-digit",
		timezone,
	};
	const { format } = new Intl.DateTimeFormat("pt-BR", options);
	return format(timestamp);
}
