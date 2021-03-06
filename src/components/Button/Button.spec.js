import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './';

describe('Button component', () => {
	it('should render children', () => {
		render(<Button>save</Button>);
		const button = screen.getByRole('button', {name: 'save'});
		expect(button).toBeInTheDocument();
	});
});

describe('Button component', () => {
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>save</Button>);
		const button = screen.getByRole('button', {name: 'save'});
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
