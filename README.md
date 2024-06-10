# Markdown It 黑幕

Markdown It 插件，类似于萌娘百科的黑幕。

## 安装
```shell
```

## 使用
```markdown
@@你知道的太多了@@
```

> [!IMPORTANT]
> 该插件为 markdown-it 提供了解析上述语法的能力。它将 `@@` 包裹的内容渲染为 span，
> 并添加 `heimu` 类。你需要通过 CSS 调整其样式。
> 
> 例如：
> 
> ```css
> .heimu {
>   position: relative;
> }
> .heimu::before {
>   position: absolute;
>   content: "";
>   top: 0;
>   left: 0;
>   width: 100%;
>   height: 100%;
>   background-color: black;
>   transition: background-color 0.2s;
> }
> 
> .heimu:hover::before {
>   background-color: transparent;
> }
> ```