const e=JSON.parse('{"key":"v-822b51dc","path":"/database/Mysql.html","title":"Mysql进阶","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"Mysql进阶 一、Mysql进阶 1.1Mysql基础 DBMS：数据库管理系统 Mysql数据库的数据类型 1.数字类型：int bigint tinyint double decimal(⻓度，⼩数点的位数) 2.字符串类型：char varchar text 3.⽇期类型：date datetime Mysql约束条件：为字段添加约束条件 1.主键约束 2.外键约束 3.⾮空约束 4.唯⼀约束 5.⾃增约束 6.默认约束 SQL：结构化查询语⾔，操作数据库 SQL分类： 1.DDL:数据定义 create drop alter 2.DML:数据操作 insert update delete 3.DQL:数据查询 select 4.TPL(TCL):事务处理 commit rollback 5.DCL:数据控制语⾔ grant 6.CCL:指针控制语⾔ cursor","head":[["meta",{"property":"og:url","content":"https://steven-kz.github.io/KBlogsPro/KBlogsPro/database/Mysql.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"Mysql进阶"}],["meta",{"property":"og:description","content":"Mysql进阶 一、Mysql进阶 1.1Mysql基础 DBMS：数据库管理系统 Mysql数据库的数据类型 1.数字类型：int bigint tinyint double decimal(⻓度，⼩数点的位数) 2.字符串类型：char varchar text 3.⽇期类型：date datetime Mysql约束条件：为字段添加约束条件 1.主键约束 2.外键约束 3.⾮空约束 4.唯⼀约束 5.⾃增约束 6.默认约束 SQL：结构化查询语⾔，操作数据库 SQL分类： 1.DDL:数据定义 create drop alter 2.DML:数据操作 insert update delete 3.DQL:数据查询 select 4.TPL(TCL):事务处理 commit rollback 5.DCL:数据控制语⾔ grant 6.CCL:指针控制语⾔ cursor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T17:13:50.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T17:13:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql进阶\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-10T17:13:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\",\\"url\\":\\"https://steven-kz.github.io/KBlogsPro/\\"}]}"]]},"headers":[{"level":3,"title":"1.1Mysql基础","slug":"_1-1mysql基础","link":"#_1-1mysql基础","children":[]},{"level":3,"title":"1.2 视图","slug":"_1-2-视图","link":"#_1-2-视图","children":[]},{"level":3,"title":"1.3触发器","slug":"_1-3触发器","link":"#_1-3触发器","children":[]},{"level":3,"title":"1.4SQL语法","slug":"_1-4sql语法","link":"#_1-4sql语法","children":[]},{"level":3,"title":"1.5自定义函数","slug":"_1-5自定义函数","link":"#_1-5自定义函数","children":[]},{"level":3,"title":"1.5存储过程","slug":"_1-5存储过程","link":"#_1-5存储过程","children":[]},{"level":3,"title":"1.6索引","slug":"_1-6索引","link":"#_1-6索引","children":[]},{"level":2,"title":"二、SQL优化","slug":"二、sql优化","link":"#二、sql优化","children":[]},{"level":2,"title":"注：SpringBoot配置sql监控","slug":"注-springboot配置sql监控","link":"#注-springboot配置sql监控","children":[{"level":3,"title":"2.1 SQL执⾏顺序","slug":"_2-1-sql执行顺序","link":"#_2-1-sql执行顺序","children":[]},{"level":3,"title":"2.2 SQL优化之定位","slug":"_2-2-sql优化之定位","link":"#_2-2-sql优化之定位","children":[]},{"level":3,"title":"2.3 SQL优化之分析","slug":"_2-3-sql优化之分析","link":"#_2-3-sql优化之分析","children":[]},{"level":3,"title":"2.4 SQL优化之解决","slug":"_2-4-sql优化之解决","link":"#_2-4-sql优化之解决","children":[]},{"level":3,"title":"2.5 常⽤的SQL优化⽅案","slug":"_2-5-常用的sql优化方案","link":"#_2-5-常用的sql优化方案","children":[]}]},{"level":2,"title":"三、Mysql集群","slug":"三、mysql集群","link":"#三、mysql集群","children":[{"level":3,"title":"1. Sharding-JDBC实现Mysql集群","slug":"_1-sharding-jdbc实现mysql集群","link":"#_1-sharding-jdbc实现mysql集群","children":[]}]}],"git":{"createdTime":1696925569000,"updatedTime":1696958030000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":3}]},"readingTime":{"minutes":20.24,"words":6072},"filePathRelative":"database/Mysql.md","localizedDate":"2022年1月4日","excerpt":"<h1> Mysql进阶</h1>\\n<h1> 一、Mysql进阶</h1>\\n<h3> 1.1Mysql基础</h3>\\n<p>DBMS：数据库管理系统<br>\\nMysql数据库的数据类型<br>\\n1.数字类型：int bigint tinyint double decimal(⻓度，⼩数点的位数)<br>\\n2.字符串类型：char varchar text<br>\\n3.⽇期类型：date datetime<br>\\nMysql约束条件：为字段添加约束条件<br>\\n1.主键约束<br>\\n2.外键约束<br>\\n3.⾮空约束<br>\\n4.唯⼀约束<br>\\n5.⾃增约束<br>\\n6.默认约束<br>\\nSQL：结构化查询语⾔，操作数据库<br>\\nSQL分类：<br>\\n1.DDL:数据定义 create drop alter<br>\\n2.DML:数据操作 insert update delete<br>\\n3.DQL:数据查询 select<br>\\n4.TPL(TCL):事务处理 commit rollback<br>\\n5.DCL:数据控制语⾔ grant<br>\\n6.CCL:指针控制语⾔ cursor</p>","autoDesc":true}');export{e as data};
