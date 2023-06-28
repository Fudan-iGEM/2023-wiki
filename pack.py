import os
import shutil

print('moving files...')
dir_list = ["../wikis", "../static"]
for dir_name in dir_list:
    try:
        shutil.rmtree(dir_name)
    except:
        pass
    if not os.path.isdir(dir_name):
        os.makedirs(dir_name)
for file in os.listdir("src/.vuepress/dist"):
    if ".html" in file:
        shutil.move(os.path.join("src/.vuepress/dist", file), "../wikis")
for file in os.listdir("src/.vuepress/dist"):
    shutil.move(os.path.join("src/.vuepress/dist", file), "../static")
shutil.rmtree("src/.vuepress/dist")
