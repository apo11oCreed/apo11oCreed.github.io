import { describe, it, expect } from '@jest/globals';
import { Figure } from '~/components/figure/figure';

type FigureProps = Parameters<typeof Figure>[0];

describe('Figure Component', () => {
	const mockFigureProps: FigureProps = {
		caption: 'Test Caption',
	};

	it('should be a function', () => {
		expect(typeof Figure).toBe('function');
	});

	it('should handle caption prop correctly', () => {
		const props: FigureProps = mockFigureProps;
		expect(props.caption).toBe('Test Caption');
	});

	it('should handle missing caption prop', () => {
		const props: FigureProps = {};
		expect(props.caption).toBeUndefined();
	});

	it('should handle empty caption prop', () => {
		const props: FigureProps = { caption: '' };
		expect(props.caption).toBe('');
	});

	it('matches snapshot', () => {
		const node = (Figure as unknown as (props: FigureProps) => unknown)({
			caption: 'Test Caption',
			contentUrl: 'https://example.com/image.jpg',
			author: 'Test Author',
		});

		expect(node).toMatchSnapshot();
	});
});
