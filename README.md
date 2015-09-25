This site use hugo: http://gohugo.io

```
go get -u -v github.com/spf13/hugo
```

Install syntax hightlight

```
sudo pip install Pygments
```

Clone to use the default theme before we have one

```
git clone --recursive https://github.com/spf13/hugoThemes themes
 
```

Edit Content

```
hugo server --theme=purehugo --buildDrafts --watch
```

View Table of Content: http://127.0.0.1:1313/toc/
