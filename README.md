# DEPRESSING MESS 2.0

## LIST OF TASKS

### General
- [x] Make design
- [x] Make the respository
- [x] Make page (HTML5 & CSS3)
 
### NF requirements
- [x] Responsive (bootstrap)
- [ ] Good user experience
- [x] working in phones
- [x] working in pc

### Page Structure
- [x] Index
  - [x] List of products
  - [x] Inventary
  - [x] Price
  - [ ] Discounts
  - [x] Add to cart

- [x] Cart (Under a Registered User)
  -  [ ] Total
  -  [ ] Buy
  -  [ ] Cancel

- [x] Suscription (Under a Registered User)
  - [ ] Suscribe or Cancel Subcription
 
- [ ] Usuario 
  - [ ] Add a product
  - [ ] Delete a product
  - [ ] Edit a product

- [ ] Follow Product (Under a Registered User)
  - [ ] Item(s)
  - [ ] Show date of arrival
  - [ ] State


## [Git Tutorial](https://docs.github.com/en/get-started/using-git/about-git)

download a repository on GitHub to our machine
Replace `owner/repo` with the owner and name of the repository to clone
```
git clone https://github.com/owner/repo.git
```
change into the `repo` directory
```
cd repo
```

create a new branch to store any new changes
```
git branch my-branch

```
switch to that branch (line of development)
```
git checkout my-branch

```
make changes, for example, edit `file1.md` and `file2.md` using the text editor

stage the changed files
```
git add file1.md file2.md
```

take a snapshot of the staging area (anything that's been added)
```
git commit -m "my snapshot"
```

push changes to github (After using it for the first time, you can simply push git ```git push```)
```
git push --set-upstream origin my-branch
```

## Nomal Use

After you created your branch, if you want to start working on it you need to specify it to git, you can use the command.

```
git branch -a
```

This command list all the branchs in the respository.

To start working on it use the command :
```
git checkout name-of-the-branch
```
The command **checkout** let's us move between branches.


