import{_ as s,r as a,o as e,c as t,d as p,f as c}from"./app-eb665f75.js";const o={},l=c(`<h1 id="request请求体丢失" tabindex="-1"><a class="header-anchor" href="#request请求体丢失" aria-hidden="true">#</a> request请求体丢失</h1><h2 id="一、问题描述" tabindex="-1"><a class="header-anchor" href="#一、问题描述" aria-hidden="true">#</a> 一、问题描述</h2><p>在拦截器中获取流之后request.getInputStream();后续再次获取Required request body is missing 请求体丢失</p><h2 id="二、原因" tabindex="-1"><a class="header-anchor" href="#二、原因" aria-hidden="true">#</a> 二、原因</h2><p>在HTTP协议中，请求的Body内容是通过输入流（InputStream）传输的。一旦读取了输入流中的数据，就无法再次读取。这是因为HTTP请求是基于流式传输的，一旦读取了流中的数据，数据就会被消耗掉，无法再次获取。<br>具体到Java Servlet中，当调用request.getInputStream()方法时，Servlet容器会从请求中读取输入流的数据，并且将其缓存起来供后续使用。一旦读取了输入流的数据，就无法再次获取同一个输入流，因为输入流的数据已经被读取和消耗掉了。<br>所以，在上述代码中，当拦截器中第一次调用request.getInputStream()获取了输入流后，如果后续代码再次调用request.getInputStream()来获取输入流，就会导致&quot;Required request body is missing&quot;错误。因为此时输入流中已经没有数据可读取了。<br>解决这个问题的常见方法是通过HttpServletRequestWrapper类来包装请求对象，实现自定义的HttpServletRequest，并在包装类中重写getInputStream()或getReader()方法，以提供对输入流的多次读取支持。这样就可以将输入流的数据保存在一个缓存中，并在每次调用getInputStream()时返回缓存中的数据，从而避免了多次读取输入流导致数据被消耗的问题。<br>总之，HTTP请求的输入流只能读取一次，无法重复获取。如果需要多次读取输入流的数据，可以使用HttpServletRequestWrapper类来进行包装和处理。</p><h2 id="三、解决" tabindex="-1"><a class="header-anchor" href="#三、解决" aria-hidden="true">#</a> 三、解决</h2><h3 id="_3-1-重写httpservletrequestwrapper" tabindex="-1"><a class="header-anchor" href="#_3-1-重写httpservletrequestwrapper" aria-hidden="true">#</a> 3.1 重写HttpServletRequestWrapper</h3><p>HttpServletRequestWrapper的主要作用是对原始的HttpServletRequest进行包装和增强，以实现对请求对象的个性化处理和定制化逻辑。<br>它提供了以下几个主要功能：</p><ol><li><strong>请求参数修改：</strong> 通过重写getParameter、getParameterNames、getParameterValues等方法，可以修改对请求参数的访问方式，实现自定义的参数处理逻辑。</li><li><strong>请求头修改：</strong> 通过重写getHeader、getHeaders、getHeaderNames等方法，可以修改对请求头的访问方式，实现自定义的请求头处理逻辑。</li><li><strong>请求URL修改：</strong> 通过重写getRequestURI、getContextPath、getServletPath等方法，可以修改对请求URL的访问方式，实现自定义的URL处理逻辑。</li><li><strong>请求方法修改：</strong> 通过重写getMethod方法，可以修改请求的HTTP方法，比如将POST请求修改为GET请求。</li><li><strong>其他功能增强：</strong> 可以通过重写其他方法，如getInputStream、getReader等，实现请求流的修改和增强。</li></ol><p>通过扩展HttpServletRequestWrapper，您可以在不修改原始请求对象的情况下，对请求进行个性化处理。这对于在过滤器或拦截器中对请求进行预处理、请求参数校验、请求日志记录等场景非常有用。<br>需要注意的是，HttpServletRequestWrapper本身是一个抽象类，您需要根据自己的需求继承它并实现自己的定制逻辑。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BodyReaderHttpServletRequestWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServletRequestWrapper</span> <span class="token punctuation">{</span>

    <span class="token comment">//存储Body容器</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> body<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">BodyReaderHttpServletRequestWrapper</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    body <span class="token operator">=</span> <span class="token class-name">HttpHelper</span><span class="token punctuation">.</span><span class="token function">getBodyString</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BufferedReader</span> <span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletInputStream</span> <span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

    <span class="token keyword">final</span> <span class="token class-name">ByteArrayInputStream</span> bais <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ServletInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> bais<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFinished</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setReadListener</span><span class="token punctuation">(</span><span class="token class-name">ReadListener</span> readListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2获取输入流内容" tabindex="-1"><a class="header-anchor" href="#_3-2获取输入流内容" aria-hidden="true">#</a> 3.2获取输入流内容</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpHelper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 获取请求Body
     * <span class="token keyword">@param</span> <span class="token parameter">request</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getBodyString</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedReader</span> reader <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            inputStream <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">,</span> <span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> line <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;getBodyString出现问题！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>inputStream <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>reader <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    reader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3过滤器" tabindex="-1"><a class="header-anchor" href="#_3-3过滤器" aria-hidden="true">#</a> 3.3过滤器</h3><p>OncePerRequestFilter 是 Spring Framework 提供的抽象类，用于创建自定义过滤器。它保证每个请求只会被该过滤器执行一次，而不会重复执行。<br>这个过滤器的作用是在请求被处理前，将请求的 Body 内容读取并存储起来，以克服 getInputStream 只能获取一次的问题。通过包装请求对象并使用 HttpHelper.getBodyString 方法获取请求的 Body 内容，可以保证在后续处理中仍然能够访问到请求的 Body 数据。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 请求体丢失 Required request body is missing？解决getInputStream获取流 只能获取一次的问题
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">extends</span> <span class="token class-name">OncePerRequestFilter</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 将流写出，提供后续使用
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilterInternal</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>

        <span class="token comment">// 防止流读取一次后就没有了, 所以需要将流继续写出去，提供后续使用</span>
        <span class="token class-name">ServletRequest</span> requestWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BodyReaderHttpServletRequestWrapper</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token class-name">HttpHelper</span><span class="token punctuation">.</span><span class="token function">getBodyString</span><span class="token punctuation">(</span>requestWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这里一定要注意返回的request必须是我们重写之后的，否则还是会出现问题！</span>
        filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>requestWrapper<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,17);function i(u,r){const n=a("PDF");return e(),t("div",null,[l,p(n)])}const k=s(o,[["render",i],["__file","request.html.vue"]]);export{k as default};
