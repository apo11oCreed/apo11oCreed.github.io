import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

interface BadgeProps {
    text: string;
    context?: 'tech' | 'default';
    mode?: 'light' | 'dark';
}

export const Badge = component$<BadgeProps>(({ text, context = 'tech' }) => {
    return (
        <span class={`${styles.badge} ${context === 'tech' ? styles.tech : ''}`}>
            {text}
        </span>
    );
});