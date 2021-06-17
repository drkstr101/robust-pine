import React from 'react';

export type NotFoundProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function NotFound({ text }: NotFoundProps) {
  return (
    <div>
      {text}
    </div>
  );
}
