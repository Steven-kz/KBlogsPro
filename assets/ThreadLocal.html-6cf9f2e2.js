import{_ as c,r as p,o,c as l,a as n,b as s,d as a,f as i}from"./app-eb665f75.js";const u={},k=n("h1",{id:"threadlocal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#threadlocal","aria-hidden":"true"},"#"),s(" ThreadLocal")],-1),r=n("h2",{id:"一、threadlocal介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、threadlocal介绍","aria-hidden":"true"},"#"),s(" 一、ThreadLocal介绍")],-1),d={href:"https://zhuanlan.zhihu.com/p/444331676",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),v={href:"https://blog.csdn.net/qq_40813329/article/details/124290304",target:"_blank",rel:"noopener noreferrer"},b=i(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>ThreadLocal 用作保存每个线程独享的对象，为每个线程都创建一个副本，这样每个线程都可以修改自己所拥有的副本, 而不会影响其他线程的副本，确保了线程安全。<br> ThreadLocal叫做_<strong>线程变量</strong><em>，意思是ThreadLocal中</em><strong>填充的变量</strong>_属于**<em>当前线程</em>**，该变量对其他线程而言是隔离的，也就是说该变量是当前线程独有的变量。ThreadLocal为变量在每个线程中都创建了一个副本，那么每个线程可以访问自己内部的副本变量。</p></div><h2 id="二、threadlocal与thread-threadlocalmap之间的关系" tabindex="-1"><a class="header-anchor" href="#二、threadlocal与thread-threadlocalmap之间的关系" aria-hidden="true">#</a> 二、ThreadLocal与Thread，ThreadLocalMap之间的关系</h2><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230402204447.png" alt="image.png" loading="lazy"><em>Thread线程可以拥有多个ThreadLocal维护的自己线程独享的共享变量</em>（这个共享变量只是针对自己线程里面共享）</p><h2 id="三、使用场景" tabindex="-1"><a class="header-anchor" href="#三、使用场景" aria-hidden="true">#</a> 三、使用场景</h2><blockquote><p>举一个比较详细的例子，我的一些接口需求鉴权，当然是要写一个GenericFilterBean来进行校验，对接sso校验是否登录，放行之后访问service层，但这里就会与一个问题，后续的操作可能也会需要用户的信息，所以就要把loginInfo存起来，这里就用到了ThreadLocal 因为：<strong>每个线程有自己单独的实例，实例在多个方法中共享，但不被多线程共享 解决方法传参</strong></p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>tool<span class="token punctuation">.</span>stevenkztool<span class="token punctuation">.</span>threadLocal</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>collect<span class="token punctuation">.</span></span><span class="token class-name">Maps</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collections</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Objects</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* Java8中ThreadLocal对象提供了一个Lambda构造方式，实现了非常简洁的构造方法：withInitial。这个方法采用Lambda方式传入实现了 Supplier 函数接口的参数。
* ThreadLocal 用作保存每个线程独享的对象，为每个线程都创建一个副本，这样每个线程都可以修改自己所拥有的副本, 而不会影响其他线程的副本，确保了线程安全。

*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocals</span> <span class="token punctuation">{</span>
    <span class="token comment">//用ThreadLocal作为容器，当每个线程访问这个 THREAD_LOCAL_CONTEXT 变量时，ThreadLocal会为每个线程提供一份变量，各个线程互不影响。</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token constant">THREAD_LOCAL_CONTEXT</span> <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedMap</span><span class="token punctuation">(</span><span class="token class-name">Maps</span><span class="token punctuation">.</span><span class="token function">newHashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ThreadLocals</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
* key存在不赋值（不覆盖原有值）
* <span class="token keyword">@param</span> <span class="token parameter">key</span> k
* <span class="token keyword">@param</span> <span class="token parameter">value</span> v
*/</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setIfAbsent</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putIfAbsent</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">removeValue</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> context <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span><span class="token constant">THREAD_LOCAL_CONTEXT</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//返回本地变量</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            context <span class="token operator">=</span> <span class="token class-name">Maps</span><span class="token punctuation">.</span><span class="token function">newHashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token constant">THREAD_LOCAL_CONTEXT</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span>context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//具体实现 根据filter存入</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserInfoContext</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token class-name">LoginInfo</span> loginInfo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadLocals</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token class-name">Consts</span><span class="token punctuation">.</span><span class="token constant">THREAD_LOCAL_USER_INFO_KEY</span><span class="token punctuation">,</span> loginInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LoginInfo</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ThreadLocals</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Consts</span><span class="token punctuation">.</span><span class="token constant">THREAD_LOCAL_USER_INFO_KEY</span><span class="token punctuation">,</span> <span class="token class-name">LoginInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LoginInfo</span> loginInfo <span class="token operator">=</span> <span class="token class-name">ThreadLocals</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Consts</span><span class="token punctuation">.</span><span class="token constant">THREAD_LOCAL_USER_INFO_KEY</span><span class="token punctuation">,</span> <span class="token class-name">LoginInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loginInfo <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>loginInfo<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> loginInfo<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LoginInfo</span> loginInfo <span class="token operator">=</span> <span class="token class-name">ThreadLocals</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Consts</span><span class="token punctuation">.</span><span class="token constant">THREAD_LOCAL_USER_INFO_KEY</span><span class="token punctuation">,</span> <span class="token class-name">LoginInfo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>loginInfo <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>loginInfo<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> loginInfo<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function g(h,f){const t=p("ExternalLinkIcon"),e=p("PDF");return o(),l("div",null,[k,r,n("p",null,[n("a",d,[s("https://zhuanlan.zhihu.com/p/444331676"),a(t)]),m,n("a",v,[s("https://blog.csdn.net/qq_40813329/article/details/124290304"),a(t)])]),b,a(e)])}const w=c(u,[["render",g],["__file","ThreadLocal.html.vue"]]);export{w as default};
