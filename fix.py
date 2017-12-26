# -*- coding: utf-8 -*-
#!/usr/bin/python

if __name__ == '__main__':

    filename = "dist/index.html"
    file_str = ""
    with open(filename, "r") as file:
        file_str = file.read()

    file_str = file_str.replace('<link rel="stylesheet" href="/static/css/styles.min.css">', '<link rel="preload" href="/static/css/styles.min.css" as="style"><link rel="stylesheet" href="/static/css/styles.min.css">')

    with open(filename, "w") as f:
        f.write(file_str)