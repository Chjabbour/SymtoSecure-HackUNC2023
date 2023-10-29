# SymptoSecure

SymptoSecure emerges as a robust medical information profiling tool designed to bridge the initial gap between patients and healthcare providers. Unlike traditional systems, it incorporates cutting-edge machine learning algorithms to facilitate more accurate preliminary diagnoses based on the data provided by the patients before their doctor's visit. The innovative aspect of SymptoSecure lies in its data privacy ethos: all the information provided is stored locally in the user's browser, not on external servers, aligning with the stringent General Data Protection Regulation (GDPR) compliance requirements.

## Use Cases:

Preliminary Diagnostics: By filling out a comprehensive form, patients can receive a more accurate preliminary diagnosis which can be a valuable time-saver during the subsequent doctor's visit.
Doctor's Visit Preparation: SymptoSecure acts as a digital pre-consultation platform, helping patients organize and present their medical history, symptoms, and other pertinent information in a structured manner, aiding in more informed and efficient consultations.
Privacy-Preserved Health Profiling: For individuals concerned about data privacy, especially in the sensitive domain of personal health, SymptoSecure offers a secure environment to manage and share health information without the fear of unauthorized data access or breaches.
Health Awareness and Education: Through its machine learning analysis, SymptoSecure can also provide educational insights, fostering a better understanding of one's health and promoting proactive healthcare engagement.

## Advantages:

GDPR Compliance: The local browser storage feature ensures that user data is handled with the utmost privacy and security, adhering to GDPR guidelines.
Enhanced Diagnostic Accuracy: The integration of machine learning elevates the diagnostic accuracy, assisting healthcare providers in offering more precise and personalized care.
User-Friendly Interface: With a straightforward and intuitive interface, SymptoSecure makes it easy for individuals to input, review, and share their medical information, streamlining the pre-consultation process.
SymptoSecure envisions a more secure, accurate, and efficient pathway to optimal healthcare experiences, embodying a significant stride towards modern, privacy-centric, and technologically enhanced healthcare solutions.



SymtpSecure is an experimental patient-doctor-profile tool, where the data lives in the URL. 

> **Note**
> Since the URL can become very long, it's better to use a link shortener like https://dub.co

The data is converted to a base 64 string which SymtpSecure uses as a query parameter. We have tried to reduce the json keys to be as small as possible

## Setup locally

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
