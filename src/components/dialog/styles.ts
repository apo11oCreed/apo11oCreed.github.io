import { mediaQueries } from '../../constants';

export const dialogStyles = `
/* Dialog Backdrop */
::backdrop {
  background-image: linear-gradient(
    90deg, var(--background-color), var(--background-color)
  );
  opacity: 0.75;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

dialog {
  height: auto;
  width: 50vw;
}

@media ${mediaQueries.mobile} {
  dialog {
    width: 100vw !important;
  }
}

/* Dialog Content */
.dialog-content {
  background: var(--background-color);
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease-out;
  position: relative;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dialog Sizes */
.dialog-small {
  width: 100%;
  max-width: 400px;
}

.dialog-medium {
  width: 100%;
  max-width: 600px;
}

.dialog-large {
  width: 100%;
  max-width: 900px;
}

/* Dialog Header */
.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.dialog-header h2 {
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  color: var(--primary-color);
  flex: 1;
}

.dialog-close {
  background: none;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: var(--text-color);
  cursor: pointer;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  margin-left: 1rem;
}

.dialog-close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dialog-close:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Dialog Body */
.dialog-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

/* Mobile Responsive */
@media ${mediaQueries.mobile} {
  .dialog-backdrop {
    padding: 0.5rem;
  }

  .dialog-content {
    max-height: 95vh;
  }

  .dialog-header {
    padding: 1rem;
  }

  .dialog-body {
    padding: 1rem;
  }

  .dialog-header h2 {
    font-size: 1.25rem;
  }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .dialog-backdrop {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .dialog-header {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .dialog-close:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
`;