type Styles = {
  readonly [key: string]: string;
};

/**
 * @param stylesModule css styles object from `import css from "./file.module.scss" `
 * @param className The name of the class you would like to add to the element
 * @param helperClasses Additional class names you woul like to add.
 * @warning helperClasses will be put as public classes to the DOM element
 */
export const addCSSClassName = (
  stylesModule: Styles,
  className: string,
  ...helperClasses: string[]
) => {
  const finalClass = stylesModule[className];
  const finalClasses = `${finalClass ? finalClass : ''} ${
    helperClasses ? helperClasses.join(' ') : ''
  }`.trim();

  return finalClasses ? finalClasses : '';
};

/**
 * Generates a random ID for the
 * Especially useful when using lists with keys
 */
export const generateID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
