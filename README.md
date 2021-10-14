This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Permulaan

Install Node.js: [Node.js](https://nodejs.org/en/)

Buka Terminal/PowerShell/Command Prompt

Clone repository ini ke dalam komputer lokal:

```bash
git clone https://github.com/AarRidho/frontend-test-elemes.git
```

Masuk ke dalam repositori yang sudah di-clone di komputer lokal:

```bash
cd /path/to/react-app
```

Tutorial Masuk ke dalam direktori:

- [Terminal Linux](https://www.linuxid.net/25053/tutorial-penggunaan-perintah-cd-di-terminal-linux/)
- [CMD Windows](https://utekno.com/cara-mengubah-direktori-cmd-9678/)

Jalankan perintah ini untuk install repositori:

```bash
yarn install
#use yarn for faster download and install
```

Jalankan perintah berikut di command prompt:

```bash
npm run dev
# or
yarn dev
```

Buka alamat [http://localhost:3000](http://localhost:3000) dengan browser untuk melihat hasil.

## Deploy on Heroku

Install CLI Heroku di sini: [CLI Heroku](https://devcenter.heroku.com/articles/heroku-cli)

Login ke dalam Heroku dengan perintah ini (browser akan terbuka dengan sendirinya):

```bash
heroku login
```

Masuk ke dalam repositori dengan Terminal atau Command Prompt:

```bash
cd /path/to/react-app
```

Tutorial Masuk ke dalam direktori:

- [Terminal Linux](https://www.linuxid.net/25053/tutorial-penggunaan-perintah-cd-di-terminal-linux/)
- [CMD Windows](https://utekno.com/cara-mengubah-direktori-cmd-9678/)

Jalankan perintah berikut untuk membuat aplikasi baru di heroku:

```bash
heroku create $APP_NAME
#contoh 'heroku create frontend-test'
```

Lalu jalankan perintah ini untuk melakukan deploy ke aplikasi heroku:

```bash
git push heroku master
```

Setelah selesai, kamu dapat mengakses aplikasi yang sudah kamu deploy di url dengan format berikut https//[APP_NAME].herokuapp.com/

Contoh: https://frontend-test.herokuapp.com

## Learn More

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
