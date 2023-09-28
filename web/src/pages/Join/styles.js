import styled from "styled-components";

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

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

export const GroupInput = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;

	label {
		font-size: 1.4rem;
		font-weight: lighter;
		color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
		opacity: 0.4;
	}

	label:hover {
		opacity: 1;
	}

	input {
		color: ${({ theme }) => theme.COLORS.TEXT_BLACK};

		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;

		padding: 1.6rem 1.2rem;

		border: none;
		border-radius: 0.8rem;

		background-color: ${({ theme }) => theme.COLORS.BG_INPUT_JOIN_CHAT};

		outline: 0;
	}

	input::placeholder {
		color: ${({ theme }) => theme.COLORS.TEXT_BLACK};
	}

	input:focus {
		color: ${({ theme }) => theme.COLORS.TEXT_BLACK};
		background-color: ${({ theme }) =>
			theme.COLORS.BG_INPUT_JOIN_CHAT_FOCUSED};
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;

	padding: 1.6rem 0;

	font-family: "Roboto", sans-serif;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

	border: none;
	border-radius: 0.8rem;
	background-color: ${({ theme }) => theme.COLORS.BG_BTN_JOIN_CHAT};
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
