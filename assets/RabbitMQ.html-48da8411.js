const e=JSON.parse(`{"key":"v-3f308faa","path":"/java/Common/RabbitMQ.html","title":"MQ","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"MQ ⼀、MQ 1.MQ是什么 MQ（Message Queue）消息队列，是基础数据结构中“先进先出”的⼀种数据结构。⼀般⽤来解决应⽤解耦，异步消息，流量削峰等问题，实现⾼性能，⾼可⽤，可伸缩和最终⼀致性架构。把要传输的数据（消息）放在队列中，⽤队列机制来实现消息传递——⽣产者产⽣消息并把消息放⼊队列，然后由消费者去处理。消费者可以到指定队列拉取消息，或者订阅相应的队列，由MQ服务端给其推送消息。 修改密码 1、进入容器 docker exec -it mqId bash 2、查看当前用户列表 rabbitmqctl list_users 3、修改密码 rabbitmqctl change_password guest 'Kz898989' 4、增加用户赋予超级管理员权限 rabbitmqctl add_user 用户名 密码 rabbitmqctl set_user_tags 用户名 administrator 5、删除用户 rabbitmqctl delete_user Username","head":[["meta",{"property":"og:url","content":"https://steven-kz.github.io/KBlogsPro/KBlogsPro/java/Common/RabbitMQ.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"MQ"}],["meta",{"property":"og:description","content":"MQ ⼀、MQ 1.MQ是什么 MQ（Message Queue）消息队列，是基础数据结构中“先进先出”的⼀种数据结构。⼀般⽤来解决应⽤解耦，异步消息，流量削峰等问题，实现⾼性能，⾼可⽤，可伸缩和最终⼀致性架构。把要传输的数据（消息）放在队列中，⽤队列机制来实现消息传递——⽣产者产⽣消息并把消息放⼊队列，然后由消费者去处理。消费者可以到指定队列拉取消息，或者订阅相应的队列，由MQ服务端给其推送消息。 修改密码 1、进入容器 docker exec -it mqId bash 2、查看当前用户列表 rabbitmqctl list_users 3、修改密码 rabbitmqctl change_password guest 'Kz898989' 4、增加用户赋予超级管理员权限 rabbitmqctl add_user 用户名 密码 rabbitmqctl set_user_tags 用户名 administrator 5、删除用户 rabbitmqctl delete_user Username"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-12T08:02:42.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-12T08:02:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MQ\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-12T08:02:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\",\\"url\\":\\"https://steven-kz.github.io/KBlogsPro/\\"}]}"]]},"headers":[{"level":2,"title":"1.MQ是什么","slug":"_1-mq是什么","link":"#_1-mq是什么","children":[]},{"level":2,"title":"1.P2P消息","slug":"_1-p2p消息","link":"#_1-p2p消息","children":[{"level":3,"title":"1.1原生的发送","slug":"_1-1原生的发送","link":"#_1-1原生的发送","children":[]},{"level":3,"title":"1.2原生的接收","slug":"_1-2原生的接收","link":"#_1-2原生的接收","children":[]}]},{"level":2,"title":"2.Work消息","slug":"_2-work消息","link":"#_2-work消息","children":[]},{"level":2,"title":"3.Pub/Sub消息","slug":"_3-pub-sub消息","link":"#_3-pub-sub消息","children":[{"level":3,"title":"3.1fanout类型 直接转发","slug":"_3-1fanout类型-直接转发","link":"#_3-1fanout类型-直接转发","children":[]},{"level":3,"title":"3.2direct类型 匹配转发","slug":"_3-2direct类型-匹配转发","link":"#_3-2direct类型-匹配转发","children":[]},{"level":3,"title":"3.3topic类型 模糊匹配","slug":"_3-3topic类型-模糊匹配","link":"#_3-3topic类型-模糊匹配","children":[]}]},{"level":2,"title":"4.RabbitMQ基于死信实现延迟","slug":"_4-rabbitmq基于死信实现延迟","link":"#_4-rabbitmq基于死信实现延迟","children":[{"level":3,"title":"4.1RabbitMQ事务","slug":"_4-1rabbitmq事务","link":"#_4-1rabbitmq事务","children":[]},{"level":3,"title":"4.2RabbitMQ手动应答","slug":"_4-2rabbitmq手动应答","link":"#_4-2rabbitmq手动应答","children":[]},{"level":3,"title":"4.1RabbitMQ如何防止消息丢失","slug":"_4-1rabbitmq如何防止消息丢失","link":"#_4-1rabbitmq如何防止消息丢失","children":[]},{"level":3,"title":"4.2RabbitMQ如何保证消息的幂等性","slug":"_4-2rabbitmq如何保证消息的幂等性","link":"#_4-2rabbitmq如何保证消息的幂等性","children":[]},{"level":3,"title":"4.3RabbitMQ集群模式","slug":"_4-3rabbitmq集群模式","link":"#_4-3rabbitmq集群模式","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1696930298000,"updatedTime":1697097762000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":3}]},"readingTime":{"minutes":10.99,"words":3298},"filePathRelative":"java/Common/RabbitMQ.md","localizedDate":"2022年1月4日","excerpt":"<h1> MQ</h1>\\n<h1> ⼀、MQ</h1>\\n<h2> 1.MQ是什么</h2>\\n<p>MQ（Message Queue）消息队列，是基础数据结构中“先进先出”的⼀种数据结构。⼀般⽤来解决应⽤解耦，异步消息，流量削峰等问题，实现⾼性能，⾼可⽤，可伸缩和最终⼀致性架构。把要传输的数据（消息）放在队列中，⽤队列机制来实现消息传递——⽣产者产⽣消息并把消息放⼊队列，然后由消费者去处理。消费者可以到指定队列拉取消息，或者订阅相应的队列，由MQ服务端给其推送消息。</p>\\n<p><strong>修改密码</strong></p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token number\\">1</span>、进入容器\\n<span class=\\"token function\\">docker</span> <span class=\\"token builtin class-name\\">exec</span> <span class=\\"token parameter variable\\">-it</span> mqId <span class=\\"token function\\">bash</span>\\n<span class=\\"token number\\">2</span>、查看当前用户列表\\nrabbitmqctl  list_users  \\n<span class=\\"token number\\">3</span>、修改密码\\nrabbitmqctl  change_password  guest  <span class=\\"token string\\">'Kz898989'</span>\\n<span class=\\"token number\\">4</span>、增加用户赋予超级管理员权限\\nrabbitmqctl add_user 用户名 密码\\nrabbitmqctl  set_user_tags 用户名 administrator\\n<span class=\\"token number\\">5</span>、删除用户\\nrabbitmqctl delete_user Username\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
