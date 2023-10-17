import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,f as u}from"./app-eb665f75.js";const k={},d=n("h1",{id:"beetl",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#beetl","aria-hidden":"true"},"#"),s(" Beetl")],-1),v={href:"https://www.kancloud.cn/xiandafu/beetl3_guide/1992542",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"一、模板引擎概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、模板引擎概述","aria-hidden":"true"},"#"),s(" 一、模板引擎概述")],-1),g=n("br",null,null,-1),b=n("br",null,null,-1),h=n("br",null,null,-1),_=n("br",null,null,-1),f=n("br",null,null,-1),q=n("br",null,null,-1),w=n("br",null,null,-1),y=n("br",null,null,-1),x={href:"http://freemarker.foofun.cn/",target:"_blank",rel:"noopener noreferrer"},j=n("br",null,null,-1),T=n("br",null,null,-1),B=n("br",null,null,-1),L={href:"https://www.thymeleaf.org/",target:"_blank",rel:"noopener noreferrer"},E=n("br",null,null,-1),$=n("br",null,null,-1),C=n("br",null,null,-1),I={href:"http://bbs.ibeetl.com/",target:"_blank",rel:"noopener noreferrer"},M=u(`<h2 id="二、依赖jar" tabindex="-1"><a class="header-anchor" href="#二、依赖jar" aria-hidden="true">#</a> 二、依赖jar</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>        <span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
            <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>com<span class="token punctuation">.</span>ibeetl<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>beetl<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
            <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">3.8</span><span class="token number">.0</span><span class="token punctuation">.</span><span class="token constant">RELEASE</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-编写模板文件" tabindex="-1"><a class="header-anchor" href="#三、-编写模板文件" aria-hidden="true">#</a> 三、.编写模板文件</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>head<span class="token punctuation">&gt;</span></span>
<span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>title<span class="token punctuation">&gt;</span></span>$<span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>body<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span><span class="token class-name">Beetl</span>模板引擎<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">&gt;</span></span>
 恭喜<span class="token operator">&lt;</span>span style<span class="token operator">=</span><span class="token string">&quot;font-size:30px;color:red&quot;</span><span class="token operator">&gt;</span>$<span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>，荣获<span class="token operator">&lt;</span>span
style<span class="token operator">=</span><span class="token string">&quot;font-size:30px;color:red&quot;</span><span class="token operator">&gt;</span>$<span class="token punctuation">{</span>grade<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>班级的勤劳⼩蜜蜂！
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">&gt;</span></span>
<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">&gt;</span></span>基本类型：<span class="token generics"><span class="token punctuation">&lt;</span>h2<span class="token punctuation">&gt;</span></span>$<span class="token punctuation">{</span>num<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">&gt;</span></span>字符串：<span class="token generics"><span class="token punctuation">&lt;</span>h2<span class="token punctuation">&gt;</span></span>$<span class="token punctuation">{</span>str<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">&gt;</span></span>分⽀语句：
<span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">if</span><span class="token punctuation">(</span>sex<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span>男<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>div<span class="token punctuation">&gt;</span></span>
循环语句：
    <span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">for</span><span class="token punctuation">(</span>s in persons<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>h1<span class="token punctuation">&gt;</span></span>获奖名单：$<span class="token punctuation">{</span>s<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、编写代码" tabindex="-1"><a class="header-anchor" href="#四、编写代码" aria-hidden="true">#</a> 四、编写代码</h2><p>根据模板⽂件，设置对应变量数据，最终⽣成⽂件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">t1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
<span class="token comment">//1.创建模板对象</span>
<span class="token class-name">ClasspathResourceLoader</span> loader<span class="token operator">=</span><span class="token keyword">new</span>
<span class="token class-name">ClasspathResourceLoader</span><span class="token punctuation">(</span><span class="token string">&quot;templates&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Configuration</span> cfg <span class="token operator">=</span> <span class="token class-name">Configuration</span><span class="token punctuation">.</span><span class="token function">defaultConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">GroupTemplate</span> gt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GroupTemplate</span><span class="token punctuation">(</span>loader<span class="token punctuation">,</span>cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取模板</span>
<span class="token class-name">Template</span> t <span class="token operator">=</span> gt<span class="token punctuation">.</span><span class="token function">getTemplate</span><span class="token punctuation">(</span><span class="token string">&quot;hello.btl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//2.为变量赋值</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> params<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;荣耀证书&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;k&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;grade&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Java2209&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span><span class="token number">1110</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;卷王&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ce&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;persons&quot;</span><span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
t<span class="token punctuation">.</span><span class="token function">binding</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//3.⽣成⽂件</span>
t<span class="token punctuation">.</span><span class="token function">renderTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;ce.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、beetl总结" tabindex="-1"><a class="header-anchor" href="#五、beetl总结" aria-hidden="true">#</a> 五、Beetl总结</h2><h3 id="_1-模板文件中的语法格式" tabindex="-1"><a class="header-anchor" href="#_1-模板文件中的语法格式" aria-hidden="true">#</a> 1.模板⽂件中的语法格式</h3><p>1.获取变量：\${变量名}<br> 2.分⽀语句：&lt;% if(boolean表达式){%&gt; 满⾜条件要输出的内容&lt;%}%&gt;<br> 3.循环语句：&lt;% for(变量名-内部 in 集合名-外部){%&gt; 重复输出的内容&lt;%}%&gt;</p><h3 id="_2-基于模板引擎实现java源代码的生成" tabindex="-1"><a class="header-anchor" href="#_2-基于模板引擎实现java源代码的生成" aria-hidden="true">#</a> 2.基于模板引擎实现Java源代码的⽣成</h3><p>1.编写源⽂件的模板<br> 把会变的改为变量，使⽤\${变量名获取}<br> 2.编写代码赋值输出⽣成⽂件</p>`,12);function V(F,N){const t=p("ExternalLinkIcon"),o=p("Vssue"),e=p("Meting"),c=p("PDF");return i(),r("div",null,[d,n("p",null,[n("a",v,[s("https://www.kancloud.cn/xiandafu/beetl3_guide/1992542"),a(t)])]),m,n("p",null,[s("模板引擎：即⼀种基于模板和要改变的数据， 并⽤来⽣成输出⽂本(HTML⽹⻚，电⼦邮件，配置⽂件，"),g,s(" 源代码等)的通⽤⼯具"),b,s(" 模板引擎=模板⻚⾯+动态数据=输出的⻚⾯（HTML、Java源⽂件、xml⽂件、word⽂件）"),h,s(" 市⾯上的模板引擎："),_,s(" 1.jsp"),f,s(" jsp模板+对象数据（四⼤域）=html⻚⾯"),q,s(" 2.Freemarker"),w,s(" ftl模板+对象数据=⽂件"),y,n("a",x,[s("http://freemarker.foofun.cn/"),a(t)]),j,s(" 3.Thymeleaf"),T,s(" html模板+对象数据=html⻚⾯"),B,n("a",L,[s("https://www.thymeleaf.org/"),a(t)]),E,s(" 4.Beetl"),$,s(" btl模板+对象数据=⽂件"),C,n("a",I,[s("http://bbs.ibeetl.com/"),a(t)])]),M,a(o),a(e,{server:"netease",type:"playlist",mid:"8197314707","lrc-type":3}),a(e,{server:"netease",type:"playlist",mid:"411997722","lrc-type":3}),a(c)])}const D=l(k,[["render",V],["__file","Beetl.html.vue"]]);export{D as default};
