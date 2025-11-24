# Options Considered

Multer (File Uploads) - Upload book cover images; easy to integrate with Books endpoint.
Nodemailer (Email) - Send notifications to members.
Node-cron (Scheduled Tasks) - Automate reminders or reports.

## Chosen Component
In-Memory Caching

## In-Memory Caching using node-cache
I chose this feature to make my API faster and reduce repeated Firestore reads.

## Why I Selected It

Firestore requests can be slow when done repeatedly
Caching improves performance
API responses become faster
Easy to implement and fits my project

How It Works

When a user requests data (ex: all books), the API first checks the cache
If the data is found → return it immediately (cache hit)
If not found → fetch from Firestore and save it to cache (cache miss)
When a book is created/updated/deleted → the cache is cleared so data stays fresh

Implementation Plan

Install node-cache
Create a cache instance in a utils file
Add caching in GET /books

Future Improvements

Add caching for individual books

