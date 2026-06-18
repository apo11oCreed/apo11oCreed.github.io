import { component$ } from '@builder.io/qwik';
import styles from './styles.module.css';

export interface EngagementContextProps {
  text: string;
}

export const EngagementContext = component$<EngagementContextProps>(({ text }) => {
  return (
    <p class={styles.wrapper}>
      <small>
        <em>{text}</em>
      </small>
    </p>
  );
});
