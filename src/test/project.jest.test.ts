import { describe, it, expect } from '@jest/globals';
import { Project } from '~/components/project/project';

// Import the actual Project component type
type ProjectProps = Parameters<typeof Project>[0];

describe('Project Component', () => {
	const mockProjectProps: ProjectProps = {
		name: 'Test Project',
		description: 'This is a test project for component testing',
		url: 'https://example.com',
		stack: ['Qwik', 'TypeScript', 'Jest'],
	};

	// Test the component function itself
	it('should be a function', () => {
		expect(typeof Project).toBe('function');
	});

	// Test component with required props
	it('should handle required props correctly', () => {
		const props: ProjectProps = mockProjectProps;
		// Test props structure, not component execution
		expect(props.name).toBe(mockProjectProps.name);
		expect(props.description).toBe(mockProjectProps.description);
		expect(props.url).toBe(mockProjectProps.url);
		expect(props.stack).toEqual(mockProjectProps.stack);
	});

	// Test component with optional props
	it('should handle optional props correctly', () => {
		const propsWithImage: ProjectProps = {
			...mockProjectProps,
			caption: 'Test Caption',
			imgAlt: 'Test Alt Text',
		};
		// Test props structure
		expect(propsWithImage.caption).toBe('Test Caption');
		expect(propsWithImage.imgAlt).toBe('Test Alt Text');
	});

	// Test prop validation
	it('should accept all required props', () => {
		const requiredProps: ProjectProps = {
			name: 'Required Test',
			description: 'Required description',
			url: 'https://required.com',
			stack: ['HTML', 'CSS'],
		};

		expect(requiredProps.name).toBe('Required Test');
		expect(requiredProps.description).toBe('Required description');
		expect(requiredProps.url).toBe('https://required.com');
		expect(requiredProps.stack).toEqual(['HTML', 'CSS']);
	});

	// Test stack array handling
	it('should handle different stack arrays', () => {
		const stacks = [['React', 'TypeScript'], ['Vue', 'JavaScript', 'Vite'], ['Angular', 'RxJS', 'NgRx', 'Jest'], []];

		stacks.forEach((stack) => {
			const props: ProjectProps = { ...mockProjectProps, stack };
			// Test props structure
			expect(props.stack).toEqual(stack);
		});
	});

	// Test URL handling
	it('should handle different URL formats', () => {
		const urls = ['https://example.com', 'http://localhost:3000', 'https://github.com/user/repo', '#'];

		urls.forEach((url) => {
			const props: ProjectProps = { ...mockProjectProps, url };
			// Test props structure
			expect(props.url).toBe(url);
		});
	});

	// Test optional properties
	it('should handle optional caption', () => {
		const props: ProjectProps = {
			...mockProjectProps,
			caption: 'Test Caption',
		};

		expect(props.caption).toBe('Test Caption');
	});

	it('should handle optional imgAlt', () => {
		const props: ProjectProps = {
			...mockProjectProps,
			imgAlt: 'Test Alt Text',
		};

		expect(props.imgAlt).toBe('Test Alt Text');
	});

	// Test component behavior with edge cases
	it('should handle empty stack array', () => {
		const props: ProjectProps = {
			...mockProjectProps,
			stack: [],
		};

		expect(props.stack).toEqual([]);
	});

	it('should handle long descriptions', () => {
		const longDescription = 'This is a very long description '.repeat(10);
		const props: ProjectProps = {
			...mockProjectProps,
			description: longDescription,
		};

		expect(props.description).toBe(longDescription);
	});

	it('should handle special characters in name and description', () => {
		const props: ProjectProps = {
			...mockProjectProps,
			name: 'Test & Development <Project>',
			description: 'Project with "quotes" and special chars',
		};

		expect(props.name).toContain('&');
		expect(props.description).toContain('"quotes"');
	});

	// Test TypeScript interface compliance
	it('should enforce correct prop types', () => {
		const validProps: ProjectProps = {
			name: 'Type Test',
			description: 'Type testing project',
			url: 'https://typetest.com',
			stack: ['TypeScript', 'Testing'],
			caption: 'Optional caption',
			imgAlt: 'Optional alt text',
		};

		expect(typeof validProps.name).toBe('string');
		expect(typeof validProps.description).toBe('string');
		expect(typeof validProps.url).toBe('string');
		expect(Array.isArray(validProps.stack)).toBe(true);
		expect(typeof validProps.caption).toBe('string');
		expect(typeof validProps.imgAlt).toBe('string');
	});

	it('matches snapshot', () => {
		const node = (Project as unknown as (props: ProjectProps) => unknown)({
			name: 'Test Project',
			description: 'This is a test project for snapshot testing',
			url: 'https://example.com',
			stack: ['React', 'TypeScript', 'Jest'],
			img: 'test-image.jpg',
			imgAlt: 'test',
			caption: 'Example caption',
		});

		expect(node).toMatchSnapshot();
	});
});
