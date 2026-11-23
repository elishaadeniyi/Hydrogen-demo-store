import {init} from '@sentry/remix';
import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';

init({
  dsn: 'https://8280872ef3fc80d4340368e0290d4dd2@o4512477354393600.ingest.us.sentry.io/4512477359374336',
});

if (!window.location.origin.includes('webcache.googleusercontent.com')) {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    );
  });
}
