export const ConditionalRender = ({
  condition,
  fallback,
  children,
}) => (condition ? children : fallback || null);
