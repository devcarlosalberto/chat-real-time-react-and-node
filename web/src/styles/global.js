import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	:root {
		font-size: 62.5%;
	}

	body {
		display: grid;
		place-content: center;
		
		max-height: 100dvh;
		height: 100dvh;
		
		font-size: 1.6rem;
		font-family: 'Roboto', sans-serif;

		background-color: ${({ theme }) => theme.COLORS.BG_PRIMARY};
	}

	@media (max-width: 768px) {
		body {
			background-color: ${({ theme }) => theme.COLORS.BG_CHAT};
		}
	}
`;
