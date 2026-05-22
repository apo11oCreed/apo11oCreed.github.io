import { mediaQueries } from '../../constants';

export const dialogStyles = `

@media ${mediaQueries.mobile} {
  dialog {
    width: 100vw !important;
  }
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
`;