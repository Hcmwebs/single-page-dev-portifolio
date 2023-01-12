import React from 'react'
import { StyledFormWrapper } from '../styles'
import { FormIntro, Form } from './index'

const FormWrapper = () => {
	return (
		<StyledFormWrapper>
			<FormIntro />
      <Form />
		</StyledFormWrapper>
	)
}

export default FormWrapper
