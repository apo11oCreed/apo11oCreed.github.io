import { describe, it, expect, jest } from '@jest/globals';
import { Dialog, type DialogProps } from '~/components/dialog/dialog';

describe('Dialog Component', () => {
	it('should be a function', () => {
		expect(typeof Dialog).toBe('function');
	});

	it('should render with given props', () => {
		const mockClose = jest.fn();
		const mockDialogRef = { value: undefined };
		const mockContent = {
			value: { Component: () => '<div>Test Content</div>', alt: 'Test' },
		};

		const props: DialogProps = {
			dialogRef: mockDialogRef as DialogProps['dialogRef'],
			content: mockContent as DialogProps['content'],
			close: mockClose as DialogProps['close'],
		};

		const dialogElement = Dialog(props);
		expect(dialogElement).toBeDefined();
	});

	it('matches snapshot', () => {
		const mockClose = jest.fn();
		const mockDialogRef = { value: undefined };
		const mockContent = {
			value: { Component: () => '<div>Test Content</div>', alt: 'Test' },
		};

		const node = Dialog({
			dialogRef: mockDialogRef as DialogProps['dialogRef'],
			content: mockContent as DialogProps['content'],
			close: mockClose as DialogProps['close'],
		});

		expect(node).toMatchSnapshot();
	});
});
