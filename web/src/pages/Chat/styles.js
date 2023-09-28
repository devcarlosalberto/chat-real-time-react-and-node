import styled from "styled-components";

export const Container = styled.main`
	display: grid;
	grid-template-rows: auto 1fr auto;

	width: 100vw;
	max-width: 60rem;
	height: 100dvh;

	padding: 4.8rem 3.6rem;

	background-color: ${({ theme }) => theme.COLORS.BG_CHAT};

	h1 {
		color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
		font-size: 3.6rem;
		font-weight: lighter;
	}
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;

	padding-bottom: 2.8rem;

	color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

	div:nth-child(2) p {
		font-weight: lighter;
		font-size: 1.8rem;
	}

	div:nth-child(2) p span {
		font-weight: normal;
	}
`;

export const ChatMessages = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	max-height: 100%;
	overflow: scroll;
`;

export const MessageReceived = styled.div`
	font-size: 1.5rem;
	font-weight: lighter;
	color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

	width: fit-content;
	padding: 1.2rem 1.4rem;

	background-color: ${({ theme }) => theme.COLORS.BG_MESSAGES_RECEIVED};

	border-radius: 2rem;

	span {
		font-weight: normal;
	}
`;

export const MessageSent = styled.div`
	font-size: 1.5rem;
	font-weight: lighter;
	color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

	width: fit-content;
	padding: 1.2rem 1.4rem;

	margin-left: auto;

	background-color: ${({ theme }) => theme.COLORS.BG_MESSAGES_SENT};

	border-radius: 2rem;

	span {
		font-weight: normal;
	}
`;

export const Bottom = styled.div`
	display: flex;
	gap: 0.8rem;

	padding-top: 1.4rem;

	input {
		flex: 1;

		color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

		padding: 1.6rem 1.4rem;

		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;

		border: none;
		border-radius: 0.8rem;
		background-color: ${({ theme }) => theme.COLORS.BG_INPUT_SEND_MESSAGE};
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;

		padding: 1.6rem;

		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;
		color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

		border: none;
		border-radius: 0.8rem;
		background-color: ${({ theme }) => theme.COLORS.BG_BTN_JOIN_CHAT};
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

		cursor: pointer;
	}
`;
