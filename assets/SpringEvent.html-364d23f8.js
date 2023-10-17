const t=JSON.parse('{"key":"v-541bf0b2","path":"/interview/java/SpringEvent.html","title":"Spring事件","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","description":"Spring事件 事件监听概念 应用程序事件允许我们发送和接收特定事件，我们可以根据需要处理这些事件。事件用于在松散耦合的组件之间交换信息。由于发布者和订阅者之间没有直接耦合，因此可以在不影响发布者的情况下修改订阅者，反之亦然。 事件监听三要素 事件源：事件对象的产生者，任何一个事件都有一个来源 ApplicationEvent 事件监听器：事件框架或组件收到一个事件后，需要通知所有相关的事件监听器来进行处理。这些监听器统一存储在事件监听器注册表中。 ApplicationListener @EventListener（注解式事件监听器） 发布事件：ApplicationContext（spring容器） 创建一个事件源ApplicationEvent，通过ApplicationContext发布事件，事件监听器ApplicationListener监听事件，逻辑处理","head":[["meta",{"property":"og:url","content":"https://steven-kz.github.io/KBlogsPro/KBlogsPro/interview/java/SpringEvent.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"Spring事件"}],["meta",{"property":"og:description","content":"Spring事件 事件监听概念 应用程序事件允许我们发送和接收特定事件，我们可以根据需要处理这些事件。事件用于在松散耦合的组件之间交换信息。由于发布者和订阅者之间没有直接耦合，因此可以在不影响发布者的情况下修改订阅者，反之亦然。 事件监听三要素 事件源：事件对象的产生者，任何一个事件都有一个来源 ApplicationEvent 事件监听器：事件框架或组件收到一个事件后，需要通知所有相关的事件监听器来进行处理。这些监听器统一存储在事件监听器注册表中。 ApplicationListener @EventListener（注解式事件监听器） 发布事件：ApplicationContext（spring容器） 创建一个事件源ApplicationEvent，通过ApplicationContext发布事件，事件监听器ApplicationListener监听事件，逻辑处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-12T08:02:42.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:modified_time","content":"2023-10-12T08:02:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring事件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-12T08:02:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\",\\"url\\":\\"https://steven-kz.github.io/KBlogsPro/\\"}]}"]]},"headers":[],"git":{"createdTime":1697097762000,"updatedTime":1697097762000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"interview/java/SpringEvent.md","localizedDate":"2023年10月12日","excerpt":"<h1> Spring事件</h1>\\n<p><strong>事件监听概念</strong><br>\\n应用程序事件允许我们发送和接收特定事件，我们可以根据需要处理这些事件。事件用于在松散耦合的组件之间交换信息。由于发布者和订阅者之间没有直接耦合，因此可以在不影响发布者的情况下修改订阅者，反之亦然。<br>\\n<strong>事件监听三要素</strong><br>\\n<strong>事件源</strong>：事件对象的产生者，任何一个事件都有一个来源  ApplicationEvent<br>\\n<strong>事件监听器</strong>：事件框架或组件收到一个事件后，需要通知所有相关的事件监听器来进行处理。这些监听器统一存储在事件监听器注册表中。 ApplicationListener<br>\\n@EventListener（注解式事件监听器）<br>\\n<strong>发布事件</strong>：ApplicationContext（spring容器）<br>\\n创建一个事件源ApplicationEvent，通过ApplicationContext发布事件，事件监听器ApplicationListener监听事件，逻辑处理</p>","autoDesc":true}');export{t as data};
