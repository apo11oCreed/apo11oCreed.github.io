import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

interface BadgeProps {
    text: string;
}

export const Badge = component$<BadgeProps>(({ text }) => {
    return (
        <span class={styles.badge}>
            {text}
        </span>
    );
});