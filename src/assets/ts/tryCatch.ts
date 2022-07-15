/**
 * More organized way of handling errors instead of writing duplicate code in multiple places.
 * Logs the error message to the console
 * @param err Error object passed by the catch method
 */
export const handleAsyncAwaitErrors = (err: unknown) => {
  if (err instanceof Error) {
    console.error(err.message);
  } else if (typeof err === 'string') {
    console.log(err);
  }
};
