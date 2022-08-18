import styled from 'styled-components';

export const LoginContainer = styled.div`
    margin: 0 auto;
    width: 640px;
`

interface DisplayProps {
    errMsg?: string
}

export const ErrorWrapper = styled.div<DisplayProps>`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding-left: 1.25rem;
    background-color: #F5E9E9;
    border: 1px solid #E26F6F;
    border-radius: .5rem;
    margin-bottom: 1.625rem;
    scale: ${({ errMsg }) => errMsg === '' ? '0' : '1'}}
`
export const ErrorSign = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.25rem;
    width: 1.25rem;
    background-color: #FFC8C8;
    color: #EE6565;
    border-radius: 50%;
    font-size: 0.875rem;
`
export const ErrorMessage = styled.p`
    font-size: 0.875rem;
`
export const FormContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const FormWrapper = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
`
export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    input {
        margin-top: 0.625rem;
        background-color: #F5F5F5;
        padding: 1.25rem;
        border-radius: .5rem;
    }
`
interface InstructionsProps {
    emptyUser?: boolean;
}

export const Instructions = styled.p<InstructionsProps>`
    margin-top: .5rem;
    font-size: 0.875rem;
    color: #E26F6F;
    scale: ${({ emptyUser }) => emptyUser ? '0' : '1'}
`
export const RememberContainer = styled.div`
    margin-block: 1.25rem 2.5rem;
    position: relative;
    height: 1.25rem;

    label {
		cursor: pointer;
		display: flex;
		height: 100%;
		align-items: center;
		&::before {
			content: '';
			height: 1.125rem;
			width: 1.125rem;
			border: 1px solid transparent;
			outline: 1px solid black;
			border-radius: .25rem;
			margin-right: 0.875rem;
		}
	}
	input[type='checkbox'] {
		cursor: pointer;
		opacity: 0;
		position: absolute;
	}
	input[type='checkbox']:checked {
		& + label {
			&::before {
				content: '';
				outline: 1px solid black;
				border: 3px solid #ffffff;
				border-radius: .25rem;
				width: 0.875rem;
				height: 0.875rem;
				background-color: #4A67FF;
			}
		}
	}
`
interface ButtonProps {
    disabled?: boolean
}

export const Button = styled.button<ButtonProps>`
    height: 60px;
    font-size: 1.125rem;
    border-radius: .5rem;
    background-color: ${({ disabled }) => disabled ? '#99A9FF' : '#4A67FF'};
    color: #ffffff;
    width: 100%;
    cursor: pointer;
`