```
# PromptVerse

## Introduction

PromptVerse is an open-source AI prompting tool that allows users to discover, create, and share creative prompts. It is built using Next.js and React, and uses Google Authentication for user authentication. The app is fully responsive and works on both desktop and mobile devices.

## Getting Started

To get started with PromptVerse, clone the repository and install the dependencies:

```

git clone https://github.com/OmJadhav1/PromptVerse.git
cd PromptVerse
npm install

```

Once the dependencies are installed, you can start the development server by running:

```

npm run dev

```

The app will be available at http://localhost:3000.

## Code Structure

The codebase is structured as follows:

* `app/`: Contains the main Next.js application code.
* `components/`: Contains the React components used in the app.
* `models/`: Contains the Mongoose models used for the database.
* `pages/`: Contains the Next.js pages.
* `utils/`: Contains utility functions used in the app.

## Authentication

PromptVerse uses Google Authentication for user authentication. To set up authentication, you will need to create a new Google OAuth client ID and secret. You can do this by following the instructions [here](https://developers.google.com/identity/sign-in/web/creating-client-ids-and-secrets).

Once you have created your client ID and secret, you will need to add them to the `.env.local` file. The `.env.local` file is a local environment file that is used to store sensitive information, such as API keys and passwords.

The following code shows how to add your Google OAuth client ID and secret to the `.env.local` file:

```

NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET

```

## Database

PromptVerse uses MongoDB for its database. To set up the database, you will need to create a new MongoDB database and user. You can do this by following the instructions [here](https://docs.mongodb.com/manual/tutorial/install-mongodb/).

Once you have created your MongoDB database and user, you will need to add the database connection string to the `.env.local` file.
```
