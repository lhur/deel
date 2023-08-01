import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import Wrapper from './components/Wrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Wrapper/>
  </StrictMode>
);
