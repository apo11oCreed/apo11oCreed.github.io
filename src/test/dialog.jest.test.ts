import type { QRL } from '@builder.io/qwik';
import { describe, it, expect, jest } from '@jest/globals';
import { Dialog, type DialogProps } from '~/components/dialog/dialog';

function mockQRL<T extends (...args: unknown[]) => unknown>(fn: T): QRL<T> {
  return Object.assign(fn, {
    __brand__QRL__: fn as T,
    resolve: () => Promise.resolve(fn as T),
    resolved: fn as T,
    getCaptured: (): null => null,
    getSymbol: () => 'mock',
    getHash: () => 'mock',
    dev: null,
  }) as unknown as QRL<T>;
}

describe('Dialog Component', () => {
	it('should be a function', () => {
		expect(typeof Dialog).toBe('function');
	});

	it('should render with given props', () => {
		const mockDialogRef = { value: undefined };
		const mockContent = {
			value: { Component: () => '<div>Test Content</div>', alt: 'Test' },
		};

		const props: DialogProps = {
			dialogRef: mockDialogRef as DialogProps['dialogRef'],
			content: mockContent as DialogProps['content'],
			close: mockQRL(jest.fn<() => void>()),
		};

		const dialogElement = (Dialog as unknown as (props: DialogProps) => unknown)(props);
		expect(dialogElement).toBeDefined();
	});

	it('matches snapshot', () => {
		const mockDialogRef = { value: undefined };
		const mockContent = {
			value: { Component: () => '<div>Test Content</div>', alt: 'Test' },
		};

		const node = (Dialog as unknown as (props: DialogProps) => unknown)({
			dialogRef: mockDialogRef as DialogProps['dialogRef'],
			content: mockContent as DialogProps['content'],
			close: mockQRL(jest.fn<() => void>()),
		});

		expect(node).toMatchSnapshot();
	});
});
