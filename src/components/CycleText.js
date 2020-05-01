import React, { Fragment, memo } from 'react'
import { useTyping } from 'use-typing'

const OPTIONS = [
	'software engineer',
	'Mexican',
	'AWS Certified',
	'cinephile',
	'casual gamer',
	'bibliophile',
	'Netflix binger',
	'amateur photographer'
]

const CycleText = () => {
	const text = useTyping({ phrases: OPTIONS })
	return (
		<p className='text'>
			and I'm{' '}
			{!text.startsWith('A') &&
				<Fragment>
					{text.startsWith('a') ? 'an' : 'a'}{' '}
				</Fragment>
			}
			<span
				className='accent-text'
			>
				{text}
			</span>.
		</p>
	)
}

export default memo(CycleText)
