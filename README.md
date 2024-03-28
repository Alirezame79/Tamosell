# Tamosell

A very simple app for selling your stuff. Maybe sth like `Divar`.

## Tools

this app is make by:

- Next 14
- Tailwind
- axios
- Context API

## Challenges

Experts know that in a real app, all the parts are challeges. But of course I have sth to tell you in this section.

### 1. App Routing:

For the first time I use `App Routing` and I should say that it was awesome. use static and dynamic routes, both were amazing.

I use dynamic route for each product page: `product/[id]`.

### 2. Tailwind:

I use tailwind for the first time too. It improves my performance and speed. no need to write long css codes.

### 3. Default Image:

you may need to fetch an image from server. but what will happen if image's url will be wrong or not complete. the image will crash. or on the other hand, an account don't have a profile, what should we do?

so I use default image for users default profile image.

### 4. Upload Image and upload progress

actually uploading an image needs some efforts. like using `formData`, managing `headers`, setting `Content-Type` and etc.

after that when we use `axios` it's a good time to use `onUploadProgress` for monitoring upload status specially for uploading files.
