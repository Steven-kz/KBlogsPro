import{_ as o,r as a,o as t,c as l,a as n,b as e,d as s,f as d}from"./app-eb665f75.js";const m="/KBlogsPro/images/Nvm/1.png",c="/KBlogsPro/images/Nvm/2.png",v="/KBlogsPro/images/Nvm/3.png",p="/KBlogsPro/images/Nvm/4.png",u="/KBlogsPro/images/Nvm/5.png",h="/KBlogsPro/images/Nvm/6.png",b={},_=n("h1",{id:"nvm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvm","aria-hidden":"true"},"#"),e(" NVM")],-1),g=n("br",null,null,-1),f=n("strong",null,"由于编码时，node.js版本不同导致各种依赖无法兼容，使用nvm多版本控制",-1),N=n("br",null,null,-1),x={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),j={href:"https://nvm.uihtm.com/",target:"_blank",rel:"noopener noreferrer"},B=d('<h2 id="一、下载安装" tabindex="-1"><a class="header-anchor" href="#一、下载安装" aria-hidden="true">#</a> 一、下载安装</h2><p>首先卸载Node.js<br> nvm安装位置<br><img src="'+m+'"><br> nodejs 安装位置<br><img src="'+c+'"><br> 环境变量安装完成之后就已存在<br><img src="'+v+'"><br> nvm-version -- 查看是否安装成功<br><img src="'+p+`"></p><h2 id="二、配置淘宝镜像" tabindex="-1"><a class="header-anchor" href="#二、配置淘宝镜像" aria-hidden="true">#</a> 二、配置淘宝镜像</h2><p>方式一：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+u+'"><p>方式二修改配置文件：<br><img src="'+h+`"></p><h2 id="三、常用命令" tabindex="-1"><a class="header-anchor" href="#三、常用命令" aria-hidden="true">#</a> 三、常用命令：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm <span class="token function">install</span> v-14.13.0  -- 安装node.js版本
nvm list -- 查看列表
nvm use <span class="token number">14.13</span>.0 -- 切换node版本


nvm on ：                  打开node.js版本控制
nvm off ：                  关闭node.js版本控制
nvm list ：                  查看已经安装的版本
nvm list available ：   查看网络可以安装的版本
nvm <span class="token function">install</span> <span class="token string">&#39;版本号&#39;</span> ：安装指定版本node.js
nvm uninstall <span class="token string">&#39; &#39;</span> ：      卸载指定版本号
nvm use <span class="token string">&#39; &#39;</span> ：             切换指定的node版本
nvm version ：           查看当前的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function P(V,K){const r=a("ExternalLinkIcon"),i=a("PDF");return t(),l("div",null,[_,n("p",null,[e("NVM (Node Version Manager) 是一个用于管理多个 Node.js 版本的工具。它可以让您在同一台计算机上运行多个 Node.js 版本，并且能够在它们之间快速切换，而无需手动更改 PATH 环境变量。"),g,f,N,e(" 安装包地址："),n("a",x,[e("https://github.com/coreybutler/nvm-windows/releases"),s(r)]),k,e(" NVM文档（非官方，仅参考）:"),n("a",j,[e("https://nvm.uihtm.com/"),s(r)])]),B,s(i)])}const M=o(b,[["render",P],["__file","Nvm.html.vue"]]);export{M as default};
