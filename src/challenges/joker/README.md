# Challenge: Dad Joke Querying and Refetching

In this challenge, you will build a React component that displays a random dad joke and allows the user to fetch a new joke by clicking a button.

## Requirements

-   The component should be named `DadJoke`.
-   The component should use a custom hook named `useDadJokes` to fetch the dad joke from an API.
-   The `useDadJokes` hook should return the following values as an object:
    -   `joke (string)`: The text of the dad joke.
    -   `isLoading (boolean)`: Whether the dad joke is currently being fetched.
    -   `error (string | undefined)`: If an error occurred while fetching the dad joke, this should contain an error message. Otherwise, it should be undefined.
    -   `refetchJoke (function)`: A function that can be called to refetch the dad joke.
-   The DadJoke component should display the dad joke text and a button labeled "New joke".
-   When the "New joke" button is clicked, the `refetchJoke` function should be called to fetch a new dad joke.
-   While the dad joke is being fetched, the `isLoading` flag should be set to true and the component should display the text "Loading joke...".
-   If an error occurs while fetching the dad joke, the `error` flag should be set to an error message and the component should display the error message instead of the joke text.

## API

Use the following API to fetch dad jokes:

-   Base URL: `https://icanhazdadjoke.com`
-   Endpoint: /
-   Headers:
    -   `Accept: application/json`

The response will be a JSON object with the following structure:

```json
Copy code
{
  "id": "QnG6Sjqwvc",
  "joke": "Why did the coffee file a police report? It got mugged.",
  "status": 200
}
```
