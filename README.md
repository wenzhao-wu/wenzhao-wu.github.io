# 也无风雨也无晴

> 回首向来萧瑟处，归去，也无风雨也无晴。—— 苏轼《定风波》

个人博客，基于 [GitHub Pages](https://pages.github.com) + [Jekyll](https://jekyllrb.com)。

## 写文章

所有文章在 `_posts/` 文件夹中，文件名格式：`YYYY-MM-DD-标题.md`

### 文章模板

```markdown
---
title: "文章标题"
date: 2025-06-24 15:30:00 +0800
category: 思想随笔
tags:
  - 标签1
  - 标签2
cover: /assets/images/cover.jpg   # 可选封面图
---

在这里写正文（Markdown 格式）...
```

### 方法一：直接在 GitHub 网页上写

1. 打开 GitHub 仓库
2. 进入 `_posts/` 文件夹
3. 点击 "Add file" → "Create new file"
4. 按格式命名，写内容，点 "Commit changes"
5. 一分钟内自动发布到博客

### 方法二：本地写 + Git 推送

```bash
# 在 _posts/ 下新建 .md 文件
git add .
git commit -m "新文章"
git push
```

## 修改设置

编辑 `_config.yml` 可修改博客名称、作者等信息。

## 分类

可用分类：思想随笔、读书笔记、生活记录、技术思考、时事评论、文学创作（也可自定义）
