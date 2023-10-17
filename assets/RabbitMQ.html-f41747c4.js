import{_ as a,o as r,c as t,f as e}from"./app-eb665f75.js";const i={},n=e('<h1 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h1><h1 id="一、消息丢失" tabindex="-1"><a class="header-anchor" href="#一、消息丢失" aria-hidden="true">#</a> 一、消息丢失</h1><h2 id="_1-1-生产者消息丢失" tabindex="-1"><a class="header-anchor" href="#_1-1-生产者消息丢失" aria-hidden="true">#</a> 1.1 生产者消息丢失</h2><p>分为两种</p><p><strong>1.1 事务机制</strong><br>可以开启事务，就是⽣产者发送数据之前开启 RabbitMQ 事务 channel.txSelect ，然后发送消息，如果说这个消息没有成功被 RabbitMQ 接收到，那么⽣产者会收到异常报错，然后就可以回滚事务 channel.txRollback ，回滚之后就重新发送消息，如果收到了消息，那么可以提交事务 channel.txCommit 但是这种方式的效率是比较低的。<br><strong>1.2 confirm机制</strong><br> 还有一种是RabbitMQ的confirm 机制，就是在生产者开启 confirm 模式，每个消息都会分配⼀个唯⼀的 id，如果说这个消息成功写⼊RabbitMQ 中，RabbitMQ 会给⽣产者回传⼀个 ack 消息，告诉mq接收到了。如果 RabbitMQ 没能处理这个消息，就会调用⼀个 nack 接⼝，就是这个消息他接收失败了，然后⽣产者继续发送消息。⽽且可以结合这个机制⾃⼰在内存⾥维护每个消息 id 的状态，如果超过⼀定时间还没接收到这个消息的回调，那么可以重发。<strong>回调的机制，推荐采⽤这种</strong></p><h2 id="_1-2-rabbitmq服务器端" tabindex="-1"><a class="header-anchor" href="#_1-2-rabbitmq服务器端" aria-hidden="true">#</a> 1.2 RabbitMQ服务器端</h2><p><strong>开启RabbitMQ的持久化</strong>。当⽣产者把消息成功写⼊RabbitMQ之后，RabbitMQ就把消息持久化到磁盘。但是如果说还没写的磁盘上，mq就宕机了，那么就要配合confirm机制，只有当消息成功持久化磁盘之后，才会回调⽣产者的接⼝返回ack 消息，否则都算失败，⽣产者会重新发送。存⼊磁盘中，这样就算RabbitMQ挂掉了，重启之后，他会读取磁盘中的消息，不会导致消息的丢失。</p><h2 id="_1-3-消费端" tabindex="-1"><a class="header-anchor" href="#_1-3-消费端" aria-hidden="true">#</a> 1.3 消费端</h2><p><strong>刚消费到，还没有处理，结果进程就挂了，就可能造成消息丢失</strong><br>改为手动ack，当消息正确处理完成后，手动ack确认。如果说消费端处理消息异常，会回传nack，这样mq会把这条消息重新发送。还有一种情况就是mq会将超时未确认（ack）的消息重新放回队列</p><h1 id="二、幂等性" tabindex="-1"><a class="header-anchor" href="#二、幂等性" aria-hidden="true">#</a> 二、幂等性</h1><p>1、⽣成全局id(雪花算法)，存⼊redis或者数据库，在消费者消费消息之前，查询⼀下该消息是否有消费过。<br>2、如果该消息已经消费过，则告诉mq消息已经消费，将该消息丢弃（⼿动ack）。<br>3、如果没有消费过，将该消息进⾏消费并将消费记录写进redis或者数据库中。</p>',11),b=[n];function c(h,d){return r(),t("div",null,b)}const s=a(i,[["render",c],["__file","RabbitMQ.html.vue"]]);export{s as default};
