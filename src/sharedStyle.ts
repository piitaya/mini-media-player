import { css } from 'lit';

const sharedStyle = css`
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon-button {
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color 0.25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: 0.5;
  }
  ha-icon-button ha-icon,
  mmp-icon-button ha-icon {
    display: flex;
  }
`;

export default sharedStyle;
