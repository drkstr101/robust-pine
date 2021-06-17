import React from 'react';

export type ServerErrorProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function ServerError({ text }: ServerErrorProps) {
  return (
    <div>
      {text}
    </div>
  );
}
