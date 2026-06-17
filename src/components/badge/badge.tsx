import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export interface BadgeProps {
    text: string;
    context?: 'tech' | 'default';
    mode?: 'light' | 'dark';
}

export const Badge = component$<BadgeProps>(({ text, context = 'tech', mode = 'light' }) => {
    return (
        <span class={`${styles.badge} ${context === 'tech' ? styles.tech : ''} ${mode === 'dark' ? styles.dark : ''}`}>
            {text}
        </span>
    );
});