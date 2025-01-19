import{_ as e,c as p,a6 as n,j as a,a as r,G as l,B as i,o as s}from"./chunks/framework.B1keMFNq.js";const q=JSON.parse('{"title":"备份","description":"","frontmatter":{"lang":"zh-cn","title":"备份"},"headers":[],"relativePath":"config/backup.md","filePath":"config/backup.md","lastUpdated":1723442587000}'),d={name:"config/backup.md"};function u(b,t,f,m,k,x){const o=i("Badge");return s(),p("div",null,[t[12]||(t[12]=n('<h1 id="备份" tabindex="-1">备份 <a class="header-anchor" href="#备份" aria-label="Permalink to &quot;备份&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">本节内容</p><p>本节将介绍关于备份、自动备份、自动清理旧备份的相关设置。</p><p>在本节中的一些部分，你将使用到 cron 表达式。这是一种表达一个或一系列时间点的语法。你可以参考以下内容以学习 cron 表达式。</p><p><strong>请注意</strong>，海豹核心使用<strong>不含秒数、由 5 个部分组成</strong>的 cron 格式，这也是 Linux 系统中使用的格式；而不是包含秒数、由 6 个部分组成的格式。</p><ul><li><a href="https://crontab.guru/" target="_blank" rel="noreferrer">Cron 解释器</a>（英文）</li><li><a href="https://www.runoob.com/w3cnote/linux-crontab-tasks.html" target="_blank" rel="noreferrer">菜鸟教程</a></li></ul></div><h2 id="关于备份" tabindex="-1">关于备份 <a class="header-anchor" href="#关于备份" aria-label="Permalink to &quot;关于备份&quot;">​</a></h2><p>经常备份是避免数据损失的最佳手段。海豹核心默认提供每 12 小时一次的自动备份。海豹核心产生的所有备份都位于 <code>backups/</code> 目录下。</p>',4)),a("p",null,[t[0]||(t[0]=r("从 ")),l(o,{type:"tip",text:"v1.4.6"}),t[1]||(t[1]=r(" 起，备份文件的命名遵循以下格式：")),t[2]||(t[2]=a("code",null,"bak_年月日_时分秒[_auto]_rXX_XXXXXXXX.zip",-1)),t[3]||(t[3]=r("。"))]),a("p",null,[t[4]||(t[4]=r("如果你使用的是 ")),l(o,{type:"tip",text:"v1.4.5"}),t[5]||(t[5]=r(" 或之前版本，文件名格式是：")),t[6]||(t[6]=a("code",null,"bak-年月日_时分秒[_auto]_随机数.zip",-1)),t[7]||(t[7]=r("。"))]),t[13]||(t[13]=a("p",null,[r("文件名中含有 "),a("code",null,"auto"),r(" 字样的是自动生成的备份。")],-1)),t[14]||(t[14]=a("p",null,"你也可以对备份行为进行设置。相关设置均位于 WebUI 的「综合设置 - 备份」页面。",-1)),t[15]||(t[15]=a("p",null,"在此页面上，你将看到：自动备份设置、自动清理设置、当前备份文件列表。在更改任何设置后，你需要点击右上角的「保存设置」使之生效。",-1)),t[16]||(t[16]=a("h2",{id:"手动备份",tabindex:"-1"},[r("手动备份 "),a("a",{class:"header-anchor",href:"#手动备份","aria-label":'Permalink to "手动备份"'},"​")],-1)),t[17]||(t[17]=a("p",null,"点击页面右上角的「立即备份」按钮，可以立即生成一份备份。",-1)),a("p",null,[t[8]||(t[8]=r("从 ")),l(o,{type:"tip",text:"v1.4.6"}),t[9]||(t[9]=r(" 起，你可以在手动备份时调整备份范围。"))]),t[18]||(t[18]=a("h2",{id:"自动备份",tabindex:"-1"},[r("自动备份 "),a("a",{class:"header-anchor",href:"#自动备份","aria-label":'Permalink to "自动备份"'},"​")],-1)),t[19]||(t[19]=a("p",null,"勾选「开启」启用自动备份。",-1)),t[20]||(t[20]=a("p",null,"在「备份间隔」项可以通过 cron 表达式规定自动备份的时机。",-1)),a("p",null,[t[10]||(t[10]=r("从 ")),l(o,{type:"tip",text:"v1.4.6"}),t[11]||(t[11]=r(" 起，在「备份范围」项，你可选择每次自动备份的范围。"))]),t[21]||(t[21]=n('<h2 id="自动清理" tabindex="-1">自动清理 <a class="header-anchor" href="#自动清理" aria-label="Permalink to &quot;自动清理&quot;">​</a></h2><p>在「清理模式」中选择「保留一定数量」或「保留一定时间内」启用自动清理。</p><h3 id="配置清理范围" tabindex="-1">配置清理范围 <a class="header-anchor" href="#配置清理范围" aria-label="Permalink to &quot;配置清理范围&quot;">​</a></h3><p>在「保留一定数量」模式下，自动清理时将保留最新的指定数量的备份文件，更老的文件将被删除。</p><p>在「保留一定时间内」模式下，自动清理时将保留创建时间在指定时间范围内的备份文件，更老的文件将被删除。</p><h3 id="配置清理时机" tabindex="-1">配置清理时机 <a class="header-anchor" href="#配置清理时机" aria-label="Permalink to &quot;配置清理时机&quot;">​</a></h3><p>勾选「触发方式」中的「自动备份后」和/或「定时」以设置自动清理时机。两种触发方式可以同时使用。</p><p>如果勾选了「自动备份后」，在每次自动备份完成后将执行一次自动清理。</p><p>如果勾选了「定时」，按输入的 cron 表达式指定自动清理的时机。</p><h2 id="备份列表" tabindex="-1">备份列表 <a class="header-anchor" href="#备份列表" aria-label="Permalink to &quot;备份列表&quot;">​</a></h2><p>在「已备份文件」中按时间从新到旧列出了当前存在的备份文件。</p><p>你可通过「进入批量删除页面」进行手动批量删除。</p><p>点击每一个备份文件右边的「下载」以下载对应文件，点击垃圾桶图标按钮以删除单个备份文件。</p>',13))])}const P=e(d,[["render",u]]);export{q as __pageData,P as default};
