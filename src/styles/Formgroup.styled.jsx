import styled from 'styled-components'

const StyledFormgroup = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
	justify-items: start;
	gap: 0.25rem;
	transition: var(--transition-2);
	position: relative;

	.input {
		font-size: 1rem;
		font-weight: var(--medium);
		line-height: 26px;
		width: 100%;
		padding: 1rem;
		outline: none;
		border: none;
		border-bottom: 1px solid var(--bodyColor);
		color: var(--bodyColor);
		background-color: transparent;
		transition: var(--transition-2);
		&::placeholder {
			text-transform: uppercase;
			font-size: 1rem;
			font-weight: var(--medium);
		}

		&:valid {
			border-bottom: 1px solid var(--accent);
		}

		&:invalid[focused='true'] {
			border-bottom: 1px solid var(--error);
		}
		&:invalid[focused='true'] ~ .error {
			display: block;
		}
		&:invalid[focused='true'] ~ .icon {
			display: block;
		}
	}
	.textArea {
		resize: none;
		min-height: 100px;
		font-size: 1rem;
		font-weight: var(--medium);
		line-height: 26px;
		width: 100%;
		padding: 1rem;
		outline: none;
		border: none;
		border-bottom: 1px solid var(--bodyColor);
		color: var(--bodyColor);
		background-color: transparent;
		transition: var(--transition-2);
		&::placeholder {
			text-transform: uppercase;
			font-size: 1rem;
			font-weight: var(--medium);
		}
		&:valid {
			border-bottom: 1px solid var(--accent);
		}

		&:invalid[focused='true'] {
			border-bottom: 1px solid var(--error);
		}
		&:invalid[focused='true'] ~ .error {
			display: block;
		}
		&:invalid[focused='true'] ~ .icon {
			display: block;
		}
	}

	.icon {
		position: absolute;
		top: 2rem;
		right: 0;
		color: var(--error);
		display: none;
	}

	.error {
		font-size: 0.75rem;
		font-weight: var(--medium);
		line-height: 1rem;
		justify-self: end;
		color: var(--error);
		text-transform: initial;
		display: none;
	}
`

export default StyledFormgroup
