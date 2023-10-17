const e=JSON.parse('{"key":"v-1b639f8b","path":"/interview/database/Redis.html","title":"Redis","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","description":"Redis 一、Redis存储数据的结构 常用的5种数据结构： key-string：一个key对应一个值。 key-hash：一个key对应一个Map。 key-list：一个key对应一个列表。 有序的 可以重复的 key-set：一个key对应一个集合。 无序的 不可以重复的 key-zset：一个key对应一个有序的集合。 有序的 不可以重复的 另外三种数据结构：","head":[["meta",{"property":"og:url","content":"https://steven-kz.github.io/KBlogsPro/KBlogsPro/interview/database/Redis.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"Redis"}],["meta",{"property":"og:description","content":"Redis 一、Redis存储数据的结构 常用的5种数据结构： key-string：一个key对应一个值。 key-hash：一个key对应一个Map。 key-list：一个key对应一个列表。 有序的 可以重复的 key-set：一个key对应一个集合。 无序的 不可以重复的 key-zset：一个key对应一个有序的集合。 有序的 不可以重复的 另外三种数据结构："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T09:54:31.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:modified_time","content":"2023-10-11T09:54:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-11T09:54:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\",\\"url\\":\\"https://steven-kz.github.io/KBlogsPro/\\"}]}"]]},"headers":[{"level":2,"title":"一、Redis存储数据的结构","slug":"一、redis存储数据的结构","link":"#一、redis存储数据的结构","children":[]},{"level":2,"title":"二、Redis事物","slug":"二、redis事物","link":"#二、redis事物","children":[]},{"level":2,"title":"三、Redis持久化机制","slug":"三、redis持久化机制","link":"#三、redis持久化机制","children":[]},{"level":2,"title":"四、Redis常见问题【重点】","slug":"四、redis常见问题【重点】","link":"#四、redis常见问题【重点】","children":[{"level":3,"title":"4.1 key的生存时间到了，Redis会立即删除吗？","slug":"_4-1-key的生存时间到了-redis会立即删除吗","link":"#_4-1-key的生存时间到了-redis会立即删除吗","children":[]},{"level":3,"title":"4.2 Redis的淘汰机制","slug":"_4-2-redis的淘汰机制","link":"#_4-2-redis的淘汰机制","children":[]},{"level":3,"title":"4.3 缓存的常问题","slug":"_4-3-缓存的常问题","link":"#_4-3-缓存的常问题","children":[]}]},{"level":2,"title":"五、延迟双删","slug":"五、延迟双删","link":"#五、延迟双删","children":[]},{"level":2,"title":"六、哨兵模式","slug":"六、哨兵模式","link":"#六、哨兵模式","children":[]}],"git":{"createdTime":1697018071000,"updatedTime":1697018071000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":1}]},"readingTime":{"minutes":7.85,"words":2356},"filePathRelative":"interview/database/Redis.md","localizedDate":"2023年10月11日","excerpt":"<h1> Redis</h1>\\n<h2> 一、Redis存储数据的结构</h2>\\n<p><strong>常用的5种数据结构：</strong></p>\\n<ul>\\n<li>key-string：一个key对应一个值。</li>\\n<li>key-hash：一个key对应一个Map。</li>\\n<li>key-list：一个key对应一个列表。 有序的 可以重复的</li>\\n<li>key-set：一个key对应一个集合。 无序的 不可以重复的</li>\\n<li>key-zset：一个key对应一个有序的集合。 有序的 不可以重复的</li>\\n</ul>\\n<p><strong>另外三种数据结构：</strong></p>","autoDesc":true}');export{e as data};
