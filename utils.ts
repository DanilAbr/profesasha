export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toSnakeCase(text: string): string {
  const splittedUrl: Array<string> = text.split('-');

  if ( splittedUrl.length === 1 ) {
    return splittedUrl[0];
  }

  const wordsToCapitalize = splittedUrl.slice(1);
  const capitalizedWords = wordsToCapitalize.map(( word ) => {
    return capitalizeFirstLetter(word);
  });

  return `${ splittedUrl[0] }${ capitalizedWords.join('') }`;
}
