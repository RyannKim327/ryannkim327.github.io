### Ryann Kim Sesgundo's portfolio
#### MPOP Reverse II [Ryann Kim Sesgundo]

![](https://wakatime.com/badge/github/RyannKim327/ryannkim327.github.io.svg?style=for-the-badge)

---
### Introduction
> So from my nth version of portfolio which build with `HTML`, `CSS`, and `JavaScript`, I've decided to use `ReactJs` and `TailwindCSS` for the front-end.
This is just to adopt the current and latest technologies, and to practice migrations for me to enhance my skills in programming and critical thinking.

---
### Inspiration
> This portfolio was originally idea from `Sir Richard Henrick`, which I don't claim as mine. This was just professional looking, as well as complete
design practice for some web designs based on my taste and experience.

---
### Project Initiation
1. To initiate the react app, kindly install `npx` using `npm install npx -g`. These command may only used once, and once you want to create another new project it is not required.
2. Execute the create react app using `npx create-react-app <project_name>` where the project name is your project you want example is `npx create-react-app my_app`.
3. Once you installed those things, you may now start your project, just go to the project directory, and run `npm start` for you to see how to start
4. To close the program, kindly use `CTRL+c` to terminate the process.

---
### Github deployment
1. Install gh-pages using `npm install --save-dev gh-pages`
2. Edit `homepage` from your `package.json` like this example
```JSON
"homepage": "https://<github_username>.github.io/"
```
3. Add these scripts in your `package.json` under script key
```JSON
"scripts": {
  ...,
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
4. Execute to your terminal `npm run build`
5. Push to your github
6. Deploy with Github Pages `npm run deploy`
7. Go to your repository settings, go to `Pages`, and choose gh-pages into the `Branch` section
8. If you have your custom domain, kindly modify the value of `deploy` under `scripts` with this format `gh-pages -d build --cname <yourdomain>`, it looks like this.
```JSON
"scripts": {
  ...,
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build --cname mydomain.com"
}

```

---
### Additionals
> If ever you want to deploy your react app to your github, it was default to have two branches, the `main` or `master` and the `gh-pages`.

---
### Credits

1. Sir Gem Rey Rañola
2. Sir Leonard Mesiera
3. Sir John Rovie Balingbing
4. Code with Mosh
5. Sir Menard Menemedez
6. Sir Richard Henrick

7. John Roy Lapida Calimlim
8. Salvador
9. Mart Anthony Salazar
10. Sanz Dinopol

11. BossRod [Roderick Alcantara]
12. Kuya Dev

---
### License

### MIT License
#### Copyright (c) 2024 Ryann Kim Sesgundo

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


