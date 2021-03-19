import React, {useEffect, useRef} from 'react';
import PrismJS from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const Prism = ({
  code,
  component: Component = 'code',
  className = 'language-javascript'
}) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      PrismJS.highlightElement(container.current);
    }
  }, []);

  return (
    <Component ref={container} className={className}>
      {code}
    </Component>
  );
};

export default Prism;
