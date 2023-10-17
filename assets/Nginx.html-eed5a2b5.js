import{_ as l,r as d,o as r,c as t,a as n,b as e,d as s,f as a}from"./app-eb665f75.js";const c={},o=n("h1",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),e(" Nginx")],-1),v=n("h2",{id:"一、-nginx是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、-nginx是什么","aria-hidden":"true"},"#"),e(" 一、 Nginx是什么")],-1),u={href:"http://nginx.p2hp.com/",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),p=n("br",null,null,-1),b=n("br",null,null,-1),g=n("br",null,null,-1),h=a(`<blockquote><p>**稳定性极强。 7*24⼩时不间断运⾏。 **<br> **Nginx提供了⾮常丰富的配置实例。 **<br><strong>占⽤内存⼩，并发能⼒强。</strong><br> tomcat 默认线程池线程线程数数 150 可以认为 tomcat 只能承受150个并发， nginx 最高承受50000以上并发</p></blockquote><p><strong>在搭建集群后，使用Nginx</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910162756.png" alt="image.png" loading="lazy"></p><h2 id="二、nginx的安装" tabindex="-1"><a class="header-anchor" href="#二、nginx的安装" aria-hidden="true">#</a> 二、Nginx的安装</h2><p>使用Docker-Compose安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt
mkdir docker_nginx
cd docker_nginx
vim docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker-compose.yml 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3.1&#39;</span>
services:
  nginx:
    restart: always
    image: daocloud.io/library/nginx:latest
    container_name: nginx
    ports:
      - <span class="token number">80</span>:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动： docker-compose up -d<br>重启： docker-compose restart nginx <br>地址：ip/域名<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910162825.png" alt="image.png" loading="lazy"><br>Nginx配置文件<br>进入容器 docker exec -it nginx /bin/sh || docker exec -it nginx bash</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
drwxr-xr-x <span class="token number">1</span> root root   <span class="token number">26</span> Sep  <span class="token number">9</span> 07:34 conf.d      配置文件目录 里面有个默认配置文件
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">1007</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> fastcgi_params
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">2837</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> koi-utf
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">2223</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> koi-win
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">5231</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> mime.types
lrwxrwxrwx <span class="token number">1</span> root root   <span class="token number">22</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> modules -<span class="token operator">&gt;</span> /usr/lib/nginx/modules
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">643</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> nginx.conf   主配置文件
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">636</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> scgi_params
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">664</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> uwsgi_params
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">3610</span> Dec <span class="token number">15</span>  <span class="token number">2020</span> win-utf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cd /etc/nignx nignx.conf<strong>文件说明</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span>     <span class="token comment"># Nginx用户  </span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment"># 工作进程：数目。根据硬件调整，通常等于CPU数量或者2倍于CPU</span>

error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>    <span class="token comment"># pid（进程标识符）：存放路径。</span>
<span class="token comment"># 以上统称为全局块， </span>
<span class="token comment"># worker_processes他的数值越大，Nginx的并发能力就越强</span>
<span class="token comment"># error_log 代表Nginx的错误日志存放的位置</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>   <span class="token comment">#每个工作进程的最大连接数量。根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行</span>
<span class="token punctuation">}</span>
<span class="token comment"># events块</span>
<span class="token comment"># worker_connections他的数值越大，Nignx并发能力越强</span>

http <span class="token punctuation">{</span>   <span class="token comment"># http块</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	<span class="token comment"># include代表引入一个外部的文件 -&gt; /mime.types中放着大量的媒体类型</span>
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>   <span class="token comment"># 日志</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>    <span class="token comment"># keepalive超时时间  单位是秒</span>

    <span class="token comment">#gzip  on;</span>
	<span class="token comment">#include /etc/nginx/conf.d/*.conf; -&gt; 引入了conf.d目录下的以.conf为结尾的配置文件</span>
    <span class="token comment"># 相当于引入外部的配置文件  咱们主要关注这个文件</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方便修改nginx配置文件 修改docker-compose文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
  nginx:
    restart: always
    image: daocloud.io/library/nginx:latest
    container_name: nginx
    ports:
      - 80:80
    volumes:
      - /opt/docker_nginx/conf.d:/etc/nginx/conf.d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在本地映射的数据卷的目录/opt/docker_nginx/conf.d/下面创建一个新的配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /opt/docker_nginx/conf.d/
vi default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件的内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 这个是 /etc/nginx/conf.d/default.conf
server {    # server 块是http 块中的 内容
    listen       80;    # nginx 默认监听的端口号
    listen  [::]:80;    
    server_name  localhost;  # ip 
	
	# location块
	# root：将接收到的请求根据/usr/share/nginx/html去查找静态资源
	# index： 默认去上述的路径中找到index.html或者index.htm
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
 	
    #50x 错误页面跳转 
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启nginx： docker-compose restart nginx || docker restart nginx 可以再次打开浏览器验证<br>看到的Nginx欢迎页面是在容器内部的 /usr/share/nginx/html 目录下的 index.html页面</p><h2 id="三、nginx代理" tabindex="-1"><a class="header-anchor" href="#三、nginx代理" aria-hidden="true">#</a> 三、Nginx代理 *</h2><p><strong>正向代理和反向代理介绍</strong><br>正向代理：</p><ul><li>正向代理服务是由客户端设立的。</li><li>客户端了解代理服务器和目标服务器都是谁。</li><li>帮助咱们实现突破访问权限，提高访问的速度，对目标服务器隐藏客户端的ip地址。</li></ul><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910162845.png" alt="image.png" loading="lazy"><br>反向代理：</p><ul><li>反向代理服务器是配置在服务端的。</li><li>客户端是不知道访问的到底是哪一台服务器。</li><li>达到负载均衡，并且可以隐藏服务器真正的ip地址</li></ul><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910162858.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><p><strong>基于Nginx实现反向代理</strong><br>为了验证路径优先级问题，我们准备两台Tomcat服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 8080:8080 --name tomcat1 -v /opt/docker_nginx/tomcat1:/usr/local/tomcat/webapps/ROOT  daocloud.io/library/tomcat:9.0.0.M22
docker run -d -p 8081:8080 --name tomcat2 -v /opt/docker_nginx/tomcat2:/usr/local/tomcat/webapps/ROOT  daocloud.io/library/tomcat:9.0.0.M22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>本地的文件夹</th><th>映射到容器内的文件夹</th></tr></thead><tbody><tr><td>/opt/docker_nginx/tomcat1</td><td>Tomcat1容器内的 /usr/local/tomcat/webapps/ROOT</td></tr><tr><td>/opt/docker_nginx/tomcat2</td><td>Tomcat2容器内的 /usr/local/tomcat/webapps/ROOT</td></tr></tbody></table><p>下载vim<br>因为容器是与本地隔绝的，所以我们要先安装vim</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt-get update		#更新包管理
apt-get install vim -y   #安装vim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先需要准备两个index.html文件放在相应的tomcat中做测试使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Tomcat1的内容 || Tomcat2的内容&lt;/h1&gt; 
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-基于nginx实现反向代理" tabindex="-1"><a class="header-anchor" href="#_3-1-基于nginx实现反向代理" aria-hidden="true">#</a> 3.1 基于Nginx实现反向代理</h3><p>修改nginx容器内部/etc/nginx/conf.d/default.conf文件 实现反向代理</p><p>nginx默认监听80端口</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>location / <span class="token punctuation">{</span>
        #root /usr/share/nginx/html;
        #index index.html index.htm;
        proxy_pass http<span class="token operator">:</span><span class="token comment">//192.168.174.128:8080;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910162939.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-2-关于localtion路径映射" tabindex="-1"><a class="header-anchor" href="#_3-2-关于localtion路径映射" aria-hidden="true">#</a> 3.2 关于localtion路径映射</h3><p>上面已经准备了两个tomcat</p><blockquote><p>优先级关系如下：</p><ul><li>location = /路径：优先级最高，精准匹配，一旦匹配， 不再去找其他匹配项。</li><li>location ^~ /路径：优先级次之，字符串匹配，一旦匹配， 不再去找其他匹配项。</li><li>location ~ 正则表达式：如果有多个location的正则能匹配的话，则使用正则表达式最长的那个。</li><li>location ~* 正则表达式：和location ~ 正则表达式相同，不过当前方式不区分大小写。</li><li>location /路径：常规方式，匹配前缀，优先级最低。</li></ul></blockquote><p><strong>注意：有没有映射（匹配）上 是一回事 映射上了location 有没有找到 对应的资源 是另外一回事</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接匹配 优先级最高
location = / {
  # 精准匹配，主机名后面不能带任何的字符串
}

# 完全匹配 精确匹配 a
location /aaa/bbb/ccc/d.html {
    proxy_pass http://39.106.47.23:8080;
}

# 匹配开头路径 正则匹配 b
location ^~ /aaa/bbb {
  # 匹配所有以/aaa/bbb开头的路径，匹配后，不再筛选其他选项
}

# 正则匹配优先级 c
location ~ /aaa/bbb { 
  # 匹配所有以/aaa/bbb开头的路径
}

location ~ /aaa/bbb/ccc {
    proxy_pass http://39.106.47.23:8081;
}

# 正则匹配后缀    优先级4
location ~* \\.(gif|jpg|png|js|css)$ {
  # 匹配以gif或者jpg或者png为结尾的路径
}

# 常规匹配   通用匹配   优先级5
location /xxx {
  # 匹配所有以/xxx开头的路径
}

# 全部通配     优先级6
location / {
  # 匹配全部路径  
}


TIPS：
^~ 和直接写路径的两种方式，不同同时存在！比如： ^~ /abc 和 /abc 同时存在会出错！
总结：
^~ /路径 &gt; ~ /路径 &gt; /路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、nginx负载均衡" tabindex="-1"><a class="header-anchor" href="#四、nginx负载均衡" aria-hidden="true">#</a> 四、Nginx负载均衡 *</h2><p>Nginx为我们默认提供了三种负载均衡的策略：</p><ul><li><strong>轮询</strong>：将客户端发起的请求，平均的分配给每一台服务器。 默认策略</li><li><strong>权重</strong>：会将客户端的请求，根据服务器的权重值不同，分配不同的数量。</li><li><strong>ip_hash</strong>：基于发起请求的客户端的ip地址不同，他始终会将请求发送到指定的服务器上。 根据ip地址计算出一个结果 根据这个结果找对应的服务器<img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910163013.png" alt="image.png" loading="lazy"></li></ul><h3 id="_4-1-轮询" tabindex="-1"><a class="header-anchor" href="#_4-1-轮询" aria-hidden="true">#</a> 4.1 轮询 *</h3><p>轮询访问 一次8080 一次8081<br>nginx内部 /etc/nginx/conf/defualt.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># nginx内部 /etc/nginx/conf/defualt.conf
#负载均衡 
upstream sso {
  server 39.106.47.23:8080;
  server 39.106.47.23:8081;
}

server {
    listen       80;
    server_name  localhost;

	#  负载均衡
    location / {
         proxy_pass http://sso;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-权重" tabindex="-1"><a class="header-anchor" href="#_4-2-权重" aria-hidden="true">#</a> 4.2 权重 *</h3><p>weight=权重比例 根据配置的权重比例访问相应服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream sso {
    server 39.106.47.23:8080 weight=2;   #weight=权重比例
    server 39.106.47.23:8081 weight=1;
}

server {    # server 块是http 块中的 内容
    listen       80;    # nginx 默认监听的端口号
    listen  [::]:80;
    server_name  localhost;  # ip

    location / {
        proxy_pass http://sso;
    }

    #50x 错误页面跳转
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-ip-hash" tabindex="-1"><a class="header-anchor" href="#_4-3-ip-hash" aria-hidden="true">#</a> 4.3 ip_hash</h3><p>ip_hash实现 根据hash 算法 固定访问某个地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream sso {
    ip_hash;
    server 39.106.47.23:8080;
    server 39.106.47.23:8081;
}

server {    # server 块是http 块中的 内容
    listen       80;    # nginx 默认监听的端口号
    listen  [::]:80;
    server_name  localhost;  # ip

    location / {
        proxy_pass http://sso;
    }

    #50x 错误页面跳转
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展：</p><p>**4.4fair模式 **</p><p>**4.5url_hash模式 **</p><p>1.down 表示单前的server暂时不参与负载</p><p>列如： server 39.106.47.23:8080 down;</p><p>2.weight 默认为1.weight越大，负载的权重就越大。</p><p>3.max_fails ：允许请求失败的次数默认为1.当超过最大次数时，返回proxy_next_upstream 模块定义的错误</p><p>4.fail_timeout:max_fails次失败后，暂停的时间。</p><p>5.backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。</p><p>6.max_conns：限制分配给某台Server处理的最大连接数量，超过这个数量，将不会分配新的连接给它。默认为0，表示不限制。注意： 1.5.9之后的版本才有这个配置。</p>`,63),x={href:"https://cloud.tencent.com/product/cns?from=20067&from_column=20067",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="五、nginx动静分离" tabindex="-1"><a class="header-anchor" href="#五、nginx动静分离" aria-hidden="true">#</a> 五、Nginx动静分离</h2><p>Nginx的并发能力公式：<br>worker_processes * worker_connections / 4 | 2 = Nginx最终的并发能力<br>动态资源需要/4，静态资源需要/2.<br>Nginx通过动静分离，来提升Nginx的并发能力，更快的给用户响应。</p><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910163043.png" alt="image.png" loading="lazy"><br>上图是动态资源的请求工程 四个连接数 ，咱们把静态资源放在nginx 上面 就只需要两个连接数， 同时也减轻了后面服务器的压力 ， 如下图 静态资源直接放在nginx<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910163054.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230910163104.png" alt="image.png" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 修改配置文件
upstream emp {
  ip_hash;
  server 39.106.47.23:8081;
  server 39.106.47.23:8080;
}

server{
	listen 80;
	server_name localhost;
    
    location ~* \\.(gif|jpg|png|js|css|html)$ {
        # 匹配以gif|jpg|png|js|css|html为结尾的路径 静态资源
        root /usr/share/nginx/statics;
    }
	
	location / {
		proxy_pass http://emp/;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="三、nginx核心" tabindex="-1"><a class="header-anchor" href="#三、nginx核心" aria-hidden="true">#</a> 三、Nginx核心</h2><p>代理：正向代理和反向代理 <br>正向代理：需要安装在⽤户的电脑上，代理⽤户发出的请求，⽐如：翻墙软件、⽹络加速器等 <br>反向代理：需要安装在服务器上的，代理服务器的请求和响应，⽐如：Nginx <br>负载均衡：⼀个事，多个⼈⼲，这多个⼈就形成了集群，这些⼈就是负载均衡 <br>负载均衡算法：决定这事交给集群中哪⼀个⼈做 <br>1.轮询 按次序先后分配 <br>2.权重 根据权重值，进⾏优先分配，权重⼤的，被分配到的概率就⼤ <br>3.ip_hash 根据ip地址的哈希算法，分配请求 <br>4.fair 响应时间短的优先分配，能者多劳 <br>5.url_hash 根据url地址进⾏哈希算法分配请求 <br>核⼼点： <br>1.Nginx实现静态资源代理服务器 <br>代理静态⻚⾯（html）性能远超Apahce <br>2.Nginx实现反向代理 <br>3.Nginx实现Tomcat负载均衡（反向代理） <br>4.Nginx绑定域名</p>`,7);function _(f,w){const i=d("ExternalLinkIcon");return r(),t("div",null,[o,v,n("p",null,[e("官网："),n("a",u,[e("nginx 中文网 官网"),s(i)]),m,e("Nginx是由俄罗斯人研发的，应对Rambler的网站，并且2004年发布的第一个版本。"),p,e("1.Nginx 是一个高性能的Http和反向代理服务器，特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好。国内使用nginx的网站有很多，如 百度 京东 新浪 网易 淘宝 等"),b,e("2.Nginx作为web 服务器 ： nginx 只能作为静态页面的web服务器，同时还支持CGI协议的动态语言，比如perl,php 等， 但是不支持java ,java程序只能通过与tomcat配合完成。nginx 专为性能优化而开发，性能是其最重要的考量，实现上 非常注重效率，能经受高负载的考验，有报告表明能支持高达50000个并发连接数。"),g,e("特点：")]),h,n("p",null,[e("7.resolve：将server指令配置的域名，指定"),n("a",x,[e("域名解析"),s(i)]),e("服务器。")]),k])}const N=l(c,[["render",_],["__file","Nginx.html.vue"]]);export{N as default};
