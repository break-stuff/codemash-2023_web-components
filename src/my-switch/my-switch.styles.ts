import { css } from 'lit';

export const styles = css`
:host {
  --size: 1rem;
  display: inline-block;
}

.control {
  padding: 0;
  background-color: transparent;
  border: 0;
}

[disabled] {
  cursor: not-allowed;
}

[disabled] .track {
  background-color: lightgray;
  border-color: lightgray;
}

.track {
  width: calc(var(--size) * 2);
  height: var(--size);
  background-color: var(--primary-color);
  border-radius: var(--size);
  border: solid teal calc(var(--size) / 8);
}

.switch {
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-color: white;
}

[aria-checked="true"] .switch {
  margin-left: auto;
}

`;