// Lightweight React-like library for educational app
(function () {
  const React = {};

  // Create React elements (type, props, children)
  React.createElement = function (type, props, ...children) {
    return { type, props: { ...(props || {}), children } };
  };

  // Hook storage and indexing
  let hooks = [];
  let hookIndex = 0;

  // useState hook for state management
  React.useState = function (initial) {
    const i = hookIndex;
    hooks[i] = hooks[i] !== undefined ? hooks[i] : initial;
    function setState(value) {
      hooks[i] = typeof value === 'function' ? value(hooks[i]) : value;
      scheduleRender();
    }
    hookIndex++;
    return [hooks[i], setState];
  };

  // useEffect hook for side effects
  React.useEffect = function (callback, deps) {
    const i = hookIndex;
    const oldDeps = hooks[i];
    let hasChanged = true;
    if (oldDeps) {
      if (deps) {
        hasChanged = deps.some((dep, index) => !Object.is(dep, oldDeps[index]));
      } else {
        hasChanged = true;
      }
    }
    if (hasChanged) {
      setTimeout(callback, 0);
    }
    hooks[i] = deps;
    hookIndex++;
  };

  // useRef hook for holding mutable references
  React.useRef = function (initial) {
    const i = hookIndex;
    if (hooks[i] === undefined) {
      hooks[i] = { current: initial };
    }
    hookIndex++;
    return hooks[i];
  };

  // useMemo hook for memoization
  React.useMemo = function (factory, deps) {
    const i = hookIndex;
    const entry = hooks[i];
    if (entry) {
      const [oldDeps, oldValue] = entry;
      if (deps && oldDeps && deps.every((dep, idx) => Object.is(dep, oldDeps[idx]))) {
        hookIndex++;
        return oldValue;
      }
    }
    const newValue = factory();
    hooks[i] = [deps, newValue];
    hookIndex++;
    return newValue;
  };

  // useCallback hook for function memoization
  React.useCallback = function (callback, deps) {
    return React.useMemo(() => callback, deps);
  };

  // Root component and container references
  let rootComponent = null;
  let rootContainer = null;

  // Schedule re-render of root component
  function scheduleRender() {
    if (rootComponent && rootContainer) {
      requestAnimationFrame(() => {
        hookIndex = 0;
        const element = rootComponent({});
        rootContainer.innerHTML = '';
        renderElement(element, rootContainer);
      });
    }
  }

  // Render element to DOM (recursive)
  function renderElement(element, container) {
    if (element === null || element === undefined || typeof element === 'boolean') {
      return;
    }
    if (typeof element === 'string' || typeof element === 'number') {
      const textNode = document.createTextNode(element);
      container.appendChild(textNode);
      return;
    }
    if (typeof element.type === 'function') {
      const child = element.type({ ...(element.props || {}) });
      renderElement(child, container);
      return;
    }
    const { type, props } = element;
    const dom = document.createElement(type);
    if (props) {
      Object.keys(props).forEach(name => {
        if (name === 'children') {
          return;
        }
        const value = props[name];
        if (name === 'className') {
          dom.setAttribute('class', value);
        } else if (name === 'style' && typeof value === 'object') {
          Object.assign(dom.style, value);
        } else if (name.startsWith('on') && typeof value === 'function') {
          const eventType = name.substring(2).toLowerCase();
          dom.addEventListener(eventType, value);
        } else {
          dom.setAttribute(name, value);
        }
      });
    }
    if (props && props.children) {
      props.children.forEach(child => renderElement(child, dom));
    }
    container.appendChild(dom);
  }

  // Main render function for root component
  function render(component, container) {
    rootComponent = component;
    rootContainer = container;
    scheduleRender();
  }

  // Expose React and ReactDOM globally
  window.React = React;
  window.ReactDOM = { render };
})();