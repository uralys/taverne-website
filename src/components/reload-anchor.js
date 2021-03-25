import {useEffect} from 'react';

export default function ReloadAnchor() {
  useEffect(() => {
    // force to got to anchor on first mount
    // eslint-disable-next-line no-self-assign
    window.location.hash = window.location.hash;
  }, []);

  return null;
}
