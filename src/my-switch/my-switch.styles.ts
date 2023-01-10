import { css } from 'lit';

export const styles = css`
:host {
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
  width: 2rem;
  height: 1rem;
  background-color: teal;
  border-radius: 1rem;
  border: solid teal 0.125rem;
}

.switch {
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: white;
}

[aria-checked="true"] .switch {
  margin-left: auto;
}

`;